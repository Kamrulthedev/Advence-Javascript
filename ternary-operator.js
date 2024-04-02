const myAddess = {
    home: 'Moheskhli',
    Union: 'kalarmer Chhra',
    college: 'Cox`s Bazer DC College',
    class:11,
    no: 20,
    Post: 4710,
    friend: 'all Friends'
};

// console.log(myAddess.code?.Post);

const code = myAddess.code?.Post? myAddess.code.Post : 122;
myAddess.no = code;

console.log(myAddess.code?.Post);
