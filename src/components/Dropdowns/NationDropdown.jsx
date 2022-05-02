// dropdown with nation (water, earth, fire, air, clear)

import { useState } from "react";

export default function NationDropdown({ selectNation }) {
  const [filter, setFilter] = useState('All');

  // handle change
  function handleChange(e) {
    setFilter(e.target.value);
    selectNation(e.target.value);
  }
  // return: onChange(handle), options (value)
  return <select 
  className="nation-dropdown"
  value={filter}
  onChange={handleChange}>
    <option value='all'>All</option>
    <option value='Water Tribe'>Water Tribe</option>
    <option value='Earth Kingdom'>Earth Kingdom</option>
    <option value='Fire Nation'>Fire Nation</option>
    <option value='Air Nomads'>Air Nomads</option>
  </select>
}