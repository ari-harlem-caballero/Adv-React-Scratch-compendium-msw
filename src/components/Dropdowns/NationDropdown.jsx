// dropdown with nation (water, earth, fire, air, clear)

export default function NationDropdown({ selectNation }) {
  // handle change
  function handleChange(e) {
    selectNation(e.target.value);
  }
  // return: onChange(handle), options (value)
  return <select 
  className="nation-dropdown" 
  onChange={handleChange}>
    <option value='1'>All</option>
    <option value='2'>Water Tribe</option>
    <option value='3'>Earth Kingdom</option>
    <option value='4'>Fire Nation</option>
    <option value='5'>Air Nomads</option>
  </select>
}