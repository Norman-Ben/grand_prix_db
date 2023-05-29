import Link from 'next/link';

type RaceCalendarProps = Record<string, any>;

export default function RaceCalendarResults({ calendar }: RaceCalendarProps) {
  function formatDate(date: string) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    return `${day}-${month}-${year}`;
  }

  const currentDate = new Date().toISOString();

  return (
    <div className="container mx-auto my-6 flex justify-around">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Race</th>
              <th>Laps</th>
              <th>Date</th>
              <th>Results</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through calendar object and add a table row for each */}
            {calendar?.calendar?.calendarObj?.data.response.map(
              (race: Record<string, any>, index: number) => {
                return (
                  <tr key={index}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar w-16">
                          <img
                            src={race.circuit.image}
                            alt="Avatar Tailwind CSS Component"
                            className="bg-gray-200 rounded-md"
                          />
                        </div>
                        <div>
                          <div className="font-bold">
                            {race.competition.name}
                          </div>
                          <div className="text-sm opacity-50">
                            {race.circuit.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {race.laps.total}
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        {race.distance}
                      </span>
                    </td>
                    <td>{formatDate(race.date)}</td>
                    <th>
                      {race.date > currentDate ? (
                        <button className="btn btn-disabled btn-xs" disabled>
                          Results
                        </button>
                      ) : (
                        <Link href={`race-results?id=${race.id}`}>
                          <button className="btn btn-primary btn-xs">
                            Results
                          </button>
                        </Link>
                      )}
                    </th>
                  </tr>
                );
              }
            )}
          </tbody>
          {/* <!-- foot --> */}
          <tfoot>
            <tr>
              <th>Race</th>
              <th>Laps</th>
              <th>Date</th>
              <th>Results</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
