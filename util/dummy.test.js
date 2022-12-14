/* eslint-disable no-unused-labels */
/* eslint-disable no-labels */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
import {
  cloneArray, helper, pokemonAPI, sum,
} from './dummy';

test('adding number successfully', () => {
  expect(
    sum(1, 2),
  ).toBe(3);
});

test('properly clones array', () => {
  const array = [1, 2, 3];
  const clonedArray = cloneArray(array);
  expect(clonedArray).toEqual(array);
  expect(clonedArray).not.toBe(array);
});

test('helper function', () => {
  console.log = jest.fn();

  expect(
    helper(),
  ).toEqual({ message: 'mantap' });
});

global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
  json: () => ({ weight: 60 }),
}));

test('call pokemon api successfully', async () => {
  const pokemonName = 'pikachu';
  const data = await pokemonAPI(pokemonName);

  expect(
    data,
  ).toEqual(expect.objectContaining({ weight: 60 }));
});
