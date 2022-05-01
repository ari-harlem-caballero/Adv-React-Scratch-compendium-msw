// holds list of character cards, dropdown component, filters
import './List.css';
import { useEffect, useState } from 'react';
// import: CharacterCard, NationDropdown
import CharacterCard from '../../components/Character/CharacterCard';
import { avatarFetch } from '../../utils/fetch-utils';

export default function CharacterList() {
  // set state: loading, results, filter
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [filterNation, setFilterNation] = useState('');
  const [isFiltering, setIsFiltering] = useState(false);

  const noResults = isFiltering && !results.length;
  const characterList = isFiltering ? results : characters;

  const handleChange = event => {
    setFilterNation(event.target.value);
  }

  useEffect(() => {
    const fetchAvatar = async () => {
      const characterList = await avatarFetch();

      setCharacters(characterList);
      setLoading(false);
    };

    fetchAvatar();
  }, []);
  
  useEffect(() => {
    const filteredCharacters = characters.filter((character) => {
      return character.nation === filterNation;
  });
  
    setResults(filteredCharacters);
  }, [filterNation]);

  return (
    <>
      <h1>Avatar Characters:</h1>
      { loading ? (
        <figure>
          <img 
            src='./avatar_spinner.gif'
            alt='avatar wheel of punishment spinner'
          />
          <figcaption>Loading...</figcaption>
        </figure>
      ) : (
        <>
          <label>
            <select 
              value={filterNation}
              onChange={handleChange}>
              <option value='all'>All</option>
              <option value='water'>Water Tribe</option>
              <option value='earth'>Earth Kingdom</option>
              <option value='fire'>Fire Nation</option>
              <option value='air'>Air Nomads</option>
            </select>
          </label>
          <section>
            {characterList.map((character, i) => {
              return (
                <CharacterCard key={`${character.id} - ${i}`} character={character} />
              )
            })}
          </section>
        </>
      )}
      {noResults && <p>No Results Found</p>}
    </>
  )
}