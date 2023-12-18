const palindrome = require('./palindrome');

describe('Palindrome', () => {
  it('should be a function', () => {
    expect(typeof palindrome).toEqual('function');
  });

  it('should return true or false', () => {
    expect(typeof palindrome('hello')).toEqual('boolean');
  });

  it('should return true if strings match', () => {
    expect(palindrome('racecar')).toBeTruthy();
    expect(palindrome('noon')).toBeTruthy();
  });

  it('should return false if strings don\'t match', () => {
    expect(palindrome('hello')).toBeFalsy();
    expect(palindrome('grape')).toBeFalsy();
  });
});