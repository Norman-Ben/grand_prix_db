import Link from 'next/link';
import React from 'react';

interface RaceCalendarProps {
  calendar: any;
}

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
            {/* Map though calendar object and add a table row for each */}
            {Object.keys(calendar.data.response).map((key) => {
              return (
                <tr key={key}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar w-16">
                        <img
                          src={calendar.data.response[key].circuit.image}
                          alt="Avatar Tailwind CSS Component"
                          className="bg-gray-200 rounded-md"
                        />
                      </div>
                      <div>
                        <div className="font-bold">
                          {calendar.data.response[key].competition.name}
                        </div>
                        <div className="text-sm opacity-50">
                          {calendar.data.response[key].circuit.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {calendar.data.response[key].laps.total}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {calendar.data.response[key].distance}
                    </span>
                  </td>
                  <td>{formatDate(calendar.data.response[key].date)}</td>
                  <th>
                    <Link
                      href={`race-results?id=${calendar.data.response[key].id}`}
                    >
                      <button
                        className={`btn ${
                          calendar.data.response[key].date > currentDate
                            ? 'btn-disabled'
                            : 'btn-primary'
                        } btn-xs`}
                      >
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
