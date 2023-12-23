// const symbol = Symbol();
//
// const dogID = Symbol('dog');
//
// const dog1 = Symbol('dog');
// const dog2 = Symbol('dog');

// console.log(dog1)

// console.log(dog1 === dog2); //false

// const dogID = Symbol('hot dog');
// alert(dogID)
// console.log(dogID)
// console.log(dogID.description)


// let id = Symbol('dogID');
// let buddy = {
//     [id]: 'Hans'
// }
// console.log(buddy[id]);

//    // let id = Symbol('id')
//    // buddy[id] = "Pu" // Uncaught SyntaxError: Identifier 'id' has already been declared

// let buddies = {
//     [Symbol('pu')]: 'Pupa',
//     [Symbol('lu')]: 'Lula',
//     [Symbol('ka')]: 'Kak',
//     elephant: 'Bamboo',
// }
// console.log(buddies);

// let newBuddies = {};
// Object.assign(newBuddies,buddies);
// buddies.cat = 'Fat'
// console.log(newBuddies)

// let id = Symbol.for("id")
// let idAgain = Symbol.for("id")
// console.log(id === idAgain)
// alert(id === idAgain)

let sym = Symbol.for("name")
let sym2 = Symbol.for("id")

console.log(Symbol.keyFor(sym))
console.log(Symbol.keyFor(sym2))