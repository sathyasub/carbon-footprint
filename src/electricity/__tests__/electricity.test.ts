import { keys, map } from 'ramda';
import electricity from '../electricity';

test('All electricity keys should contain a valid number', () => {
  const electricityKeys = keys(electricity);
  map((item: number) => expect(typeof electricityKeys[item]).toBe('number'));
});
