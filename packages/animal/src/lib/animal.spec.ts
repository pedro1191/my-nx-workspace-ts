import { getRandomAnimal } from './animal.js';

describe('animal', () => {
  it('should return a random animal with name and sound', () => {
    const result = getRandomAnimal();
    expect(result).toHaveProperty('name');
    expect(result).toHaveProperty('sound');
    expect(typeof result.name).toBe('string');
    expect(typeof result.sound).toBe('string');
  });
});
