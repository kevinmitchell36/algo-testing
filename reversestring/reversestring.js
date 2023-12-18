
function reverseString(str) {
  let i = 0;
  let j = str.length - 1;
  str = str.split('')
  while (i < j) {
    let temp = str[i];
    str[i] = str[j];
    str[j] = temp;
    i++;
    j--;
  }
  return str.join('');
}



module.exports = reverseString;