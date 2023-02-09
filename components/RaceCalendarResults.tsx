import React from 'react';

export default function RaceCalendarResults() {
  function formatDate(date: string) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    return `${day}-${month}-${year}`;
  }

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
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://media-3.api-sports.io/formula-1/circuits/2.png"
                        alt="Avatar Tailwind CSS Component"
                        className="bg-gray-200"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Bahrain Grand Prix</div>
                    <div className="text-sm opacity-50">
                      Bahrain International Circuit
                    </div>
                  </div>
                </div>
              </td>
              <td>
                58
                <br />
                <span className="badge badge-ghost badge-sm">307.6 km</span>
              </td>
              <td>{formatDate('2022-03-20T15:00:00+00:00')}</td>
              <th>
                <button className="btn btn-primary btn-xs">Results</button>
              </th>
            </tr>
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
