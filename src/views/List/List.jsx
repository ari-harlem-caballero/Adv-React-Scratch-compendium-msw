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
  const [filter, setFilter] = useState('All');
  const [filtered, setFiltered] = useState([]);

  // useEffect: fetchCharacters (data.map: id, photoUrl, name, affiliation)
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
    const characterNation = characters.reduce(({tribe, character}) => {
      if(character.nation) {
        const nation = character.nation
          .toLowerCase()
          .split(' ');

        const includes = nation.includes(filter);

        if (includes === true) {
          tribe.push(character);
        }
      }

      return tribe;
    }, [filter]);

    setResults(characterNation);
  }, [filter])

  // return:
    /// loading/spinner
    /// map list of CharacterCard
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

            {(filtered.length ? filtered : results).map((character) => {
              return (
                <CharacterCard character={character} />
              )
            })}
          </section>
        </>
      )}
    </>
  )
}