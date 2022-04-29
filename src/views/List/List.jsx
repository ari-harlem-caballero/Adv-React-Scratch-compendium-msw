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
  const [filter, setFilter] = useState(1);

  // useEffect: fetchCharacters (data.map: id, photoUrl, name, affiliation)
  // handleSearch: filter characters based on nation (dropdown holder)
  // return:
    /// loading/spinner
    /// map list of CharacterCard
  return (
    <>
      <h1>Avatar Characters:</h1>
      { loading ? (
        <figure>
          <img 
            src='../assets/avatar_spinner.gif'
            alt='avatar wheel of punishment spinner' 
          />
          <figcaption>Loading...</figcaption>
        </figure>
      ) : (
        <>
          <NationDropdown selectNation={setFilter} />
          <section>
            {characters.map((character) => {
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