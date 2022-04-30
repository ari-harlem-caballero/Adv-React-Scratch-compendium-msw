// holds list of character cards, dropdown component, filters
import './List.css';
import { useEffect, useState } from 'react';
// import: CharacterCard, NationDropdown
import CharacterCard from '../../components/Character/CharacterCard';
import NationDropdown from '../../components/Dropdowns/NationDropdown';

export default function CharacterList() {
  // set state: loading, results, filter
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState('');
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const fetchAvatar = async () => {
      const res = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=500');
      const json = await res.json();
      
      const avatarInfo = json.map((info)  => ({
        id: info._id,
        name: info.name,
        image: info.photoUrl,
        nation: info.affiliation,
      }));

      setCharacters(avatarInfo);
      setLoading(false);
    };

    fetchAvatar();
  }, []);
  

  useEffect(() => {
    const characterNation = characters.filter((character) => {
      if (filter === 'all') return character;

      const lowerCase = character.nation.toLowerCase();
      console.log('lowerCase', lowerCase);

      const split = lowerCase.split(' ');
      console.log('split', split);

      const include = split.includes(filter.toLowerCase());
      console.log('include', include);
      if (include === true) return character;
      return character.nation === filter;
    });
    
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
    </>
  )
}