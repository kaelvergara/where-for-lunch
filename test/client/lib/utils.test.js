
import { getRandom, isObjectEmpty } from 'client/lib/utils';

describe('getRandom', () => {
  test('returns null when passed in an empty list', () => {
    expect(getRandom([])).toBe(null);
  });
  test('returns null when passed in null', () => {
    expect(getRandom()).toBe(null);
  });
});

describe('isObjectEmpty', () => {
  test('returns true when passed obj is empty', () => {
    expect(isObjectEmpty({})).toBe(true);
  });
  test('returns false when passed obj is not empty', () => {
    expect(isObjectEmpty({ a: 'b' })).toBe(false);
  });
  test('throws error when no obj parameter is passed', () => {
    expect(() => { isObjectEmpty(); }).toThrowError('Parameter obj is required');
  });
  test('throws error when obj parameter is not an object', () => {
    expect(() => { isObjectEmpty('ImAString'); }).toThrowError('Parameter obj should be of type object');
  });
});
