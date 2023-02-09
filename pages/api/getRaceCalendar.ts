import { Client, Entity, Schema, Repository } from 'redis-om';

export default async function getNews(req: any, res: any) {
  let client = await new Client().open(process.env.REDIS_URL);

  class RaceCalendar extends Entity {}

  const RaceCalendarSchema = new Schema(RaceCalendar, {
    gpName: { type: 'string' },
  });

  let isCached = await client.execute(['KEYS', 'RaceCalendar:*']);
  // console.log(isCached);

  if (isCached.length === 0) {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
        'X-RapidAPI-Host': process.env.X_RapidAPI_Host,
      },
    };

    let apiCall = await fetch(
      'https://api-formula-1.p.rapidapi.com/races?type=race&season=2022',
      options
    )
      .then((response) => response.json())
      .catch((err) => console.error(err));

    console.log(apiCall.response[0].circuit.name);

    const raceCalendarRepository =
      client.fetchRepository<RaceCalendar>(RaceCalendarSchema);

    const newRaceCalendar = raceCalendarRepository.createEntity();
    newRaceCalendar.gpName = apiCall.response[0].circuit.name;

    const id = await raceCalendarRepository.save(newRaceCalendar);

    console.log(id);
    await raceCalendarRepository.expire(id, 600);
  } else {
    const raceCalendarCache = await client.execute(['KEYS', 'RaceCalendar:*']);
    console.log(raceCalendarCache);
    res = await client.execute(['JSON.GET', raceCalendarCache]);
    console.log(res);
  }
  // console.log(res);
  await client.close();
}
