// global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
//   json: () => ({ weight: 60 }),
// }));

import { insertUserBiodata } from './user';

// test('call pokemon api successfully', async () => {
//   const pokemonName = 'pikachu';
//   const data = await pokemonAPI(pokemonName);

//   expect(
//     data,
//   ).toEqual(expect.objectContaining({ weight: 60 }));
// });

// jest.mock('firebase/database', () => {
//   set: () => ({value: 'here'})
// });

test('successfully insert biodata', async () => {
  const id = 'someidhere';
  const userData = { data: 'somedatahere' };

  const data = await insertUserBiodata(id, userData);
  expect(data).toEqual(undefined);
});
