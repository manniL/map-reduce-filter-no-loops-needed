const axios = require('axios')
/*

0. Build own map/filter with reduce
1. Query parameter object concatenation
2. Get names from all locations with more than 500 users
3. Show all location names that contain an U (case-insensitive)

4. Do you have any ideas or wishes?

*/

const parameters = {query: 'i+search+things', order: 'asc', limit: '10'}
//http://example.org/?query=...&order=...&limit=10

const url = 'http://example.org/'

let queryStrings = Object.keys(parameters).map(key => key + '=' + parameters[key]).join('&')

//console.log(url + '?' + queryStrings)

/*
const filter = (collection, f) => {
  return collection.reduce((acc, o) => {
    if (f(o)) {
      return acc.concat(o)
    }
    return acc
  }, [])
}

const numbers = [1, 2, 3, 4]
const jeven = n => !(n % 2)

console.log(filter(numbers, jeven))
*/

const sum = (collection) => {
  return collection.reduce((acc, number) => acc + number)
}

const idGreater70 = (city) => city.id > 70

const processData = ({data}) => console.log(sum(data.filter(idGreater70).map(city => city.users)))

//Sum of users where ID > 70

axios.get('https://raw.githubusercontent.com/fsr/php-lessons/master/code/locations.json')
  .then(processData)

//remove duplicates

removeDuplicatePrimitives = (collection) => {
  return collection.reduce((acc, o) => {
    return !acc.includes(o) ? acc.concat(o) : acc
  }, [])
}

//console.log(removeDuplicatePrimitives([1, 2, 2, 3, 1, 5, 4, 3, 1, 1, 1, 10, 42]))