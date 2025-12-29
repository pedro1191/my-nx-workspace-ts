import { formatMessage, getRandomItem } from './util.js';

describe('util', () => {
  describe('formatMessage', () => {
    it('should format message with prefix', () => {
      expect(formatMessage('TEST', 'hello')).toEqual('[TEST] hello');
    });
  });

  describe('getRandomItem', () => {
    it('should return an item from the array', () => {
      const items = ['a', 'b', 'c'];
      const result = getRandomItem(items);
      expect(items).toContain(result);
    });
  });
});
