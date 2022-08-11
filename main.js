const str = `
010-1234-5678
thesecon@gamil.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown jox jumps over the lazy dog.
abbcccddd
`

console.log(str.match(/(?<=@).{1,}/g))