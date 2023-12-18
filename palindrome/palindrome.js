
function palindrome(str) {
  let reversed = ''
  for (letter of str) {
    reversed = letter + reversed;
  }
  return reversed === str;
}

module.exports = palindrome;