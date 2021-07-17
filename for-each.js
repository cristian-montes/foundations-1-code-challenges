// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.


// Input:
const animals = [
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
]


/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    let arrAnimals = []
    arr.forEach(element => {
         arrAnimals.push(element.name);        
    });
    return arrAnimals;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    let arrAnimals = []
    arr.forEach(element => {
         arrAnimals.push(element.type);        
    });
    return arrAnimals.reverse();
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    let arrAnimals = []
  const espanol =   arr.forEach(element => {
         arrAnimals.push({
            nombre: element.name,
            tipo: element.type
         })
                
    });
    return arrAnimals;
}

