console.log('these files are connected!')

/*
    Read: https://css-tricks.com/snippets/javascript/select-random-item-array/
*/

let nouns = ["heart", "ocean", "beach"];
let verbs = ["look", "make", "continue"];
let adjectives = ["good", "different", "possible"];

let noun = nouns[Math.floor(Math.random() * nouns.length)] // 0, 1 or 2
let verb = verbs[Math.floor(Math.random() * verbs.length)] // 0, 1 or 2
let adjective = adjectives[Math.floor(Math.random() * adjectives.length)] // 0, 1 or 2
// console.log(noun)

let sentence = `My ${noun} leaps ${adjective} when I ${verb} a rainbow in the sky.`
console.log(sentence)