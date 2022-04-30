export async function avatarFetch() {
  const res = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=500');
  const json = await res.json();
      
  const avatarInfo = json.map((info)  => ({
    id: info._id,
    name: info.name,
    image: info.photoUrl,
    nation: info.affiliation,
  }));

  return avatarInfo;
}