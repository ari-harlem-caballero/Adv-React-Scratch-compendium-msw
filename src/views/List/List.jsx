// holds list of character cards, dropdown component, filters
import { useEffect, useState } from 'react';
// import: CharacterCard, NationDropdown
import CharacterCard from '../../components/Character/CharacterCard';
import NationDropdown from '../../components/Dropdowns/NationDropdown';

export default function CharacterList() {
  // set state: loading, results, filter
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);

  // useEffect: fetchCharacters (data.map: id, photoUrl, name, affiliation)
  // handleSearch: filter characters based on nation (dropdown holder)
  // return:
    /// loading/spinner
    /// map list of CharacterCard
}