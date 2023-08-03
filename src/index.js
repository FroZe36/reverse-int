module.exports = function reverse (n) {
  let reverse = n.toString();
  return reverse.includes('-') ? reverse.slice(1).split('').reverse().join('') : reverse.split('').reverse().join('')
}
