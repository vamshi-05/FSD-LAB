const colors = ["red", "green", "blue", "yellow"]

let [first,second]=colors
console.log(`First Element : ${first} , Second Element : ${second}`)

let [,secondEle,,fourth]=colors
console.log(`Second Element : ${secondEle} , Fourth Element : ${fourth}`)