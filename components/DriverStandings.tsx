import React from 'react';

interface DriverStandingsProps {
  standings: any;
}

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
            {standings?.standings?.driverStandingsObj?.data ? (
              Object.keys(
                standings.standings.driverStandingsObj.data.response
              ).map((key) => {
                return (
                  <tr key={key}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar w-16">
                          <img
                            src={
                              standings.standings.driverStandingsObj.data
                                .response[key].driver.image
                            }
                            alt="Avatar Tailwind CSS Component"
                            className="bg-gray-200 rounded-md"
                          />
                        </div>
                        <div>
                          <div className="font-bold">
                            {
                              standings.standings.driverStandingsObj.data
                                .response[key].driver.name
                            }
                          </div>
                          <div className="text-sm opacity-50">
                            {
                              standings.standings.driverStandingsObj.data
                                .response[key].driver.abbr
                            }
                          </div>
                          <div className="text-sm opacity-50">
                            {
                              standings.standings.driverStandingsObj.data
                                .response[key].driver.number
                            }
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {
                        standings.standings.driverStandingsObj.data.response[
                          key
                        ].position
                      }
                      <br />
                    </td>
                    <td>
                      {standings.standings.driverStandingsObj.data.response[key]
                        .points || 0}
                    </td>
                    <th>
                      <div className="flex items-center space-x-3">
                        <div className="avatar w-16">
                          <img
                            src={
                              standings.standings.driverStandingsObj.data
                                .response[key].team.logo
                            }
                            alt="Avatar Tailwind CSS Component"
                            className="bg-gray-200 rounded-md"
                          />
                        </div>
                        <div>
                          <div className="font-bold">
                            {
                              standings.standings.driverStandingsObj.data
                                .response[key].team.name
                            }
                          </div>
                        </div>
                      </div>
                    </th>
                  </tr>
                );
              })
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
