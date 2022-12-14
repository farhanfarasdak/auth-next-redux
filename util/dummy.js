export const sum = (a, b) => a + b;

export const cloneArray = (array) => [...array];

export const helper = () => {
  console.log('hehehe');
  return { message: 'mantap' };
};

export const pokemonAPI = async (name) => {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await resp.json();
  return data;
};
