export const getCharacters = async () => {
  try {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const data = await res.json();
    return data.results;
  } catch (error) {
    throw new Error(error);
  }
};

export const getCharacterById = async id => {
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
