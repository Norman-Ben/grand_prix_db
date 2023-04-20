import Link from 'next/link';
import React, { useState } from 'react';

interface RaceResultsProps {
  qualifyingData: any;
  raceData: any;
  raceId?: number;
}

export default function RaceResults({
  qualifyingData,
  raceData,
}: RaceResultsProps) {
  const [activeTab, setActiveTab] = useState('qualifying');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="container mx-auto my-6 flex justify-around flex-col">
        <div className="tabs tabs-boxed justify-center">
          <a
            className={`tab ${activeTab === 'race' ? '' : 'tab-active'}`}
            onClick={() => handleTabClick('qualifying')}
          >
            Qualifying
          </a>
          <a
            className={`tab ${activeTab === 'qualifying' ? '' : 'tab-active'}`}
            onClick={() => handleTabClick('race')}
          >
            Race
          </a>
        </div>
        {activeTab === 'qualifying' ? (
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th>Driver</th>
                  <th>Position</th>
                  <th>Time</th>
                  <th>Team</th>
                </tr>
              </thead>
              <tbody>
                {/* Map though Standings object and add a table row for each */}
                {qualifyingData?.results?.qualifyingResultsObj?.data
                  .response ? (
                  Object.keys(
                    qualifyingData.results.qualifyingResultsObj.data.response
                  ).map((key) => {
                    return (
                      <tr key={key}>
                        <td>
                          <div className="flex items-center space-x-3">
                            <div className="avatar w-16">
                              <img
                                src={
                                  qualifyingData.results.qualifyingResultsObj
                                    .data.response[key].driver.image
                                }
                                alt="Avatar Tailwind CSS Component"
                                className="bg-gray-200 rounded-md"
                              />
                            </div>
                            <div>
                              <div className="font-bold">
                                {
                                  qualifyingData.results.qualifyingResultsObj
                                    .data.response[key].driver.name
                                }
                              </div>
                              <div className="text-sm opacity-50">
                                {
                                  qualifyingData.results.qualifyingResultsObj
                                    .data.response[key].driver.abbr
                                }
                              </div>
                              <div className="text-sm opacity-50">
                                {
                                  qualifyingData.results.qualifyingResultsObj
                                    .data.response[key].driver.number
                                }
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          {
                            qualifyingData.results.qualifyingResultsObj.data
                              .response[key].position
                          }
                          <br />
                        </td>
                        <td>
                          {qualifyingData.results.qualifyingResultsObj.data
                            .response[key].time || 'No Time Set In Session'}
                        </td>
                        <th>
                          <div className="flex items-center space-x-3">
                            <div className="avatar w-16">
                              <img
                                src={
                                  qualifyingData.results.qualifyingResultsObj
                                    .data.response[key].team.logo
                                }
                                alt="Avatar Tailwind CSS Component"
                                className="bg-gray-200 rounded-md"
                              />
                            </div>
                            <div>
                              <div className="font-bold">
                                {
                                  qualifyingData.results.qualifyingResultsObj
                                    .data.response[key].team.name
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
                  <th>Time</th>
                  <th>Team</th>
                </tr>
              </tfoot>
            </table>
          </div>
        ) : (
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th>Driver</th>
                  <th>Position</th>
                  <th>Time</th>
                  <th>Team</th>
                </tr>
              </thead>
              <tbody>
                {/* Map though Standings object and add a table row for each */}
                {raceData?.results?.raceResultsObj?.data.response ? (
                  Object.keys(
                    raceData.results.raceResultsObj.data.response
                  ).map((key) => {
                    return (
                      <tr key={key}>
                        <td>
                          <div className="flex items-center space-x-3">
                            <div className="avatar w-16">
                              <img
                                src={
                                  raceData.results.raceResultsObj.data.response[
                                    key
                                  ].driver.image
                                }
                                alt="Avatar Tailwind CSS Component"
                                className="bg-gray-200 rounded-md"
                              />
                            </div>
                            <div>
                              <div className="font-bold">
                                {
                                  raceData.results.raceResultsObj.data.response[
                                    key
                                  ].driver.name
                                }
                              </div>
                              <div className="text-sm opacity-50">
                                {
                                  raceData.results.raceResultsObj.data.response[
                                    key
                                  ].driver.abbr
                                }
                              </div>
                              <div className="text-sm opacity-50">
                                {
                                  raceData.results.raceResultsObj.data.response[
                                    key
                                  ].driver.number
                                }
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          {
                            raceData.results.raceResultsObj.data.response[key]
                              .position
                          }
                          <br />
                        </td>
                        <td>
                          {
                            raceData.results.raceResultsObj.data.response[key]
                              .time
                          }
                        </td>
                        <th>
                          <div className="flex items-center space-x-3">
                            <div className="avatar w-16">
                              <img
                                src={
                                  raceData.results.raceResultsObj.data.response[
                                    key
                                  ].team.logo
                                }
                                alt="Avatar Tailwind CSS Component"
                                className="bg-gray-200 rounded-md"
                              />
                            </div>
                            <div>
                              <div className="font-bold">
                                {
                                  raceData.results.raceResultsObj.data.response[
                                    key
                                  ].team.name
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
                  <th>Time</th>
                  <th>Team</th>
                </tr>
              </tfoot>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
