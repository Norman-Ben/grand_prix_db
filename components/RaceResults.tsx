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
        <div className="tabs tabs-boxed justify-center mb-2 max-w-[170px] mx-auto">
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
                {qualifyingData?.qualifyingResultsObj?.response ? (
                  Object.keys(qualifyingData.qualifyingResultsObj.response).map(
                    (key) => {
                      return (
                        <tr key={key}>
                          <td>
                            <div className="flex items-center space-x-3">
                              <div className="avatar w-16">
                                <img
                                  src={
                                    qualifyingData.qualifyingResultsObj
                                      .response[key].driver.image
                                  }
                                  alt={`Avatar of ${qualifyingData.qualifyingResultsObj.response[key].driver.name}`}
                                  className="bg-gray-200 rounded-md"
                                />
                              </div>
                              <div>
                                <div className="font-bold">
                                  {
                                    qualifyingData.qualifyingResultsObj
                                      .response[key].driver.name
                                  }
                                </div>
                                <div className="text-sm opacity-50">
                                  {
                                    qualifyingData.qualifyingResultsObj
                                      .response[key].driver.abbr
                                  }
                                </div>
                                <div className="text-sm opacity-50">
                                  {
                                    qualifyingData.qualifyingResultsObj
                                      .response[key].driver.number
                                  }
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            {
                              qualifyingData.qualifyingResultsObj.response[key]
                                .position
                            }
                            <br />
                          </td>
                          <td>
                            {qualifyingData.qualifyingResultsObj.response[key]
                              .time || 'No Time Set In Session'}
                          </td>
                          <td>
                            <div className="flex items-center space-x-3">
                              <div className="avatar w-16">
                                <img
                                  src={
                                    qualifyingData.qualifyingResultsObj
                                      .response[key].team.logo
                                  }
                                  alt={`Logo of ${qualifyingData.qualifyingResultsObj.response[key].team.name}`}
                                  className="bg-gray-200 rounded-md"
                                />
                              </div>
                              <div>
                                <div className="font-bold">
                                  {
                                    qualifyingData.qualifyingResultsObj
                                      .response[key].team.name
                                  }
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    }
                  )
                ) : (
                  <tr>
                    <td colSpan={4}>Loading results</td>
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
                {raceData?.raceResultsObj?.response ? (
                  Object.keys(raceData.raceResultsObj.response).map((key) => {
                    return (
                      <tr key={key}>
                        <td>
                          <div className="flex items-center space-x-3">
                            <div className="avatar w-16">
                              <img
                                src={
                                  raceData.raceResultsObj.response[key].driver
                                    .image
                                }
                                alt={`Avatar of ${raceData.raceResultsObj.response[key].driver.name}`}
                                className="bg-gray-200 rounded-md"
                              />
                            </div>
                            <div>
                              <div className="font-bold">
                                {
                                  raceData.raceResultsObj.response[key].driver
                                    .name
                                }
                              </div>
                              <div className="text-sm opacity-50">
                                {
                                  raceData.raceResultsObj.response[key].driver
                                    .abbr
                                }
                              </div>
                              <div className="text-sm opacity-50">
                                {
                                  raceData.raceResultsObj.response[key].driver
                                    .number
                                }
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          {raceData.raceResultsObj.response[key].position}
                          <br />
                        </td>
                        <td>{raceData.raceResultsObj.response[key].time}</td>
                        <td>
                          <div className="flex items-center space-x-3">
                            <div className="avatar w-16">
                              <img
                                src={
                                  raceData.raceResultsObj.response[key].team
                                    .logo
                                }
                                alt={`Logo of ${raceData.raceResultsObj.response[key].team.name}`}
                                className="bg-gray-200 rounded-md"
                              />
                            </div>
                            <div>
                              <div className="font-bold">
                                {
                                  raceData.raceResultsObj.response[key].team
                                    .name
                                }
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={4}>Loading results</td>
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
