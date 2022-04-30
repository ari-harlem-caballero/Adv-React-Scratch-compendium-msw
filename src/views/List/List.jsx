// holds list of character cards, dropdown component, filters
import './List.css';
import { useEffect, useState } from 'react';
// import: CharacterCard, NationDropdown
import CharacterCard from '../../components/Character/CharacterCard';
import NationDropdown from '../../components/Dropdowns/NationDropdown';
import { avatarFetch } from '../../utils/fetch-utils';

export default function CharacterList() {
  // set state: loading, results, filter
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState('');
  const [filtered, setFiltered] = useState([]);

  const currentFilter = !!results.length;
  const noResults = currentFilter && !results.length;
  const characterList = currentFilter ? results : characters;

  useEffect(() => {
    const fetchAvatar = async () => {
      const characterList = await avatarFetch();

      setCharacters(characterList);
      setLoading(false);
    };

    fetchAvatar();
  }, []);
  

  useEffect(() => {
    const characterNation = characters.map((character) => {
      if (filter === 'all') return character;

      const lowerCase = character.nation.toLowerCase();
      console.log('lowerCase', lowerCase);

      const split = lowerCase.split(' ');
      console.log('split', split);

      if (split === true) return character;
    });
    console.log('characterNation', characterNation);
    setResults(characterNation);
  }, [filter])


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
          <NationDropdown selectNation={setFilter} />
          <section>
            {characters.map((character, i) => {
              return (
                <CharacterCard key={`${character.id} - ${i}`}character={character} />
              )
            })}
          </section>
        </>
      )}
      {noResults && <p>No Results Found</p>}
    </>
  )
}