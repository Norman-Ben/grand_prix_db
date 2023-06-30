import React from 'react';

export default function SeasonSelect({ season, setSeason }) {
  const handleChange = (e) => {
    setSeason(e.target.value);
  };
  console.log(season);

  return (
    <select
      className="select select-secondary w-full max-w-[180px] mt-6"
      onChange={handleChange}
    >
      <option disabled selected>
        Select a season
      </option>
      <option selected>2021</option>
      <option>2020</option>
      <option>2019</option>
      <option>2018</option>
      <option>2017</option>
      <option>2016</option>
      <option>2015</option>
      <option>2014</option>
      <option>2013</option>
      <option>2012</option>
    </select>
  );
}
