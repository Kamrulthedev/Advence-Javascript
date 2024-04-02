/**
 * optional syening ------------..
 * 
 * ?
*/

const myAddess = {
     home: 'Moheskhli',
     Union: 'kalarmer Chhra',
     college: 'Cox`s Bazer DC College',
     class:11,
     no: 20,
     Post: 4710,
     friend: 'all Friends'
};

// console.log(myAddess.code)--------------nudefined
// console.log(myAddess.code.Post)-------error

// error handleing

console.log(myAddess.code?.Post);