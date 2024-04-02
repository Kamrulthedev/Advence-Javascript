/**
 * sperad & Rrst oparetor
 * 
*/

const Arrey = [1, 2, 3];
// console.log(Arrey);
const CoppoitoArrey = [...Arrey];
// console.log(CoppoitoArrey);

Arrey.push(5);
CoppoitoArrey.push(6);
// console.log(Arrey);
// console.log(CoppoitoArrey);


/**
 * Rest Oparetor
 * 
*/

const AddtoArreyFunction = (...Perams) => {
    // const sum = num1 + num2;
    // console.log(Perams);
    let sum = 0;
    Perams.forEach(num => {
        // console.log(num)
        // const num1 = num + 1;
        sum = sum + num;
        // console.log(num1)
    })
    // console.log(sum);

};


AddtoArreyFunction(1, 2, 3, 4, 5, 6, 7, 8, 84, 48, 44, 33);
// console.log(AddtoArreyFunction(1, 2, 3, 4, 5, 6, 7, 8));

/**
 * Rest Sprat Oprator..------------
*/

const addedFunction = (num1, num2, ...RestA) => {
    console.log(num1);
    console.log(num2);
    console.log(RestA);
};


addedFunction(1, 2, 3, 4, 5, 6, 7, 8, 9);



