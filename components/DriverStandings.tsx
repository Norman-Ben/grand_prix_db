import React from 'react';
import { DriverStandingsProps } from '@/types/DriverStandingsTypes';

export default function DriverStandings({ standings }: DriverStandingsProps) {
  return (
    <div className="container mx-auto my-6 flex justify-around">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Driver</th>
              <th>Position</th>
              <th>Points</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            {/* Map though Standings object and add a table row for each */}
            {standings?.driverStandingsObj?.response ? (
              Object.keys(standings?.driverStandingsObj.response).map(
                (key: string) => {
                  const entry = standings.driverStandingsObj?.response?.[key];
                  return (
                    <tr key={key}>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar w-16">
                            <img
                              src={entry?.driver.image}
                              alt={`Driver: ${entry?.driver.name} Avatar`}
                              className="bg-gray-200 rounded-md"
                            />
                          </div>
                          <div>
                            <div className="font-bold">
                              {entry?.driver.name}
                            </div>
                            <div className="text-sm opacity-50">
                              {entry?.driver.abbr}
                            </div>
                            <div className="text-sm opacity-50">
                              {entry?.driver.number}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{entry?.position}</td>
                      <td>{entry?.points || 0}</td>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar w-16">
                            <img
                              src={entry?.team.logo}
                              alt={`Team ${entry?.team.name} Logo`}
                              className="bg-gray-200 rounded-md"
                            />
                          </div>
                          <div>
                            <div className="font-bold">{entry?.team.name}</div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                }
              )
            ) : (
              <tr>
                <button className="btn btn-square loading"></button>
              </tr>
            )}
          </tbody>
          {/* <!-- foot --> */}
          <tfoot>
            <tr>
              <th>Driver</th>
              <th>Position</th>
              <th>Points</th>
              <th>Team</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
