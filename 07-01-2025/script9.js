const numbers = [1, 2, 4, 5];

const [lastElement] = numbers.reverse()
console.log(`Last Element : ${lastElement}`)

const num = [1, 2, 4, 5];
const {length,[length - 1]: last } = num
console.log(`Last Element : ${last}`)