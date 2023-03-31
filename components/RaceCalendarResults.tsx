import React from 'react';

interface RaceCalendarProps {
  calendar: {};
}

export default function RaceCalendarResults({ calendar }: RaceCalendarProps) {
  function formatDate(date: string) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    return `${day}-${month}-${year}`;
  }

  console.log(calendar);

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
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={calendar.data.response[key].circuit.image}
                            alt="Avatar Tailwind CSS Component"
                            className="bg-gray-200"
                          />
                        </div>
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
                    {/* <span className="badge badge-ghost badge-sm">
                      {calendar.data.response[key].distance}
                    </span> */}
                  </td>
                  <td>{formatDate(calendar.data.response[key].date)}</td>
                  <th>
                    <button className="btn btn-primary btn-xs">Results</button>
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
