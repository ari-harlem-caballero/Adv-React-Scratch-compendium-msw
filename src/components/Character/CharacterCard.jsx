// character info to map over (id, photo, affiliation/nation)

export default function CharacterCard({ character }) {
  return (
    <>
      <figure >
        <img src={character.photoUrl} alt={character.name}/>
        <h2>{character.name}</h2>
        <p>{character.nation}</p>
      </figure>
    </>
  )
}