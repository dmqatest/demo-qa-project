// Test suite for the application
const { add } = require('./app');

describe('Math operations', () => {
  test('should add two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('should handle negative numbers', () => {
    expect(add(-2, 3)).toBe(1);
  });

  test('should handle zero', () => {
    expect(add(0, 5)).toBe(5);
  });
});
