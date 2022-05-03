// dropdown with nation (water, earth, fire, air, clear)

export default function NationDropdown({ filter, setFilter }) {
  // handle change
  function handleChange(e) {
    setFilter(e.target.value);
  }
  // return: onChange(handle), options (value)
  return <select 
  className="nation-dropdown"
  value={filter}
  onChange={handleChange}>
    <option value='all'>All</option>
    <option value='water'>Water Tribe</option>
    <option value='earth'>Earth Kingdom</option>
    <option value='fire'>Fire Nation</option>
    <option value='air'>Air Nomads</option>
  </select>
}