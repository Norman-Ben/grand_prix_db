import Link from 'next/link';
import { RaceCalendarProps } from '@/types/RaceCalendarTypes';

// Consider moving this to a utilities file
function formatDate(date: string) {
  const d = new Date(date);
  return d.toISOString().split('T')[0]; // This gives you "YYYY-MM-DD" format
}
export default function RaceCalendarResults({ calendar }: RaceCalendarProps) {
  const currentDate = new Date();
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
            {calendar?.calendarObj?.response?.map((race) => {
              const raceDate = new Date(race.date);
              const btnClass =
                raceDate > currentDate ? 'btn-disabled' : 'btn-primary';
              return (
                <tr key={race.id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar w-16">
                        <img
                          src={race.circuit.image}
                          alt={race.circuit.name}
                          className="bg-gray-200 rounded-md"
                        />
                      </div>
                      <div>
                        <div className="font-bold">{race.competition.name}</div>
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
                    <Link href={`race-results?id=${race.id}`}>
                      <button className={`btn ${btnClass} btn-xs`}>
                        Results
                      </button>
                    </Link>
                  </th>
                </tr>
              );
            })}
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
