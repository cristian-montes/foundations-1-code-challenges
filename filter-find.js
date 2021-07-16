// Use the filter or find array methods to solve these problems


// Input:
 const groceryList = [
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    },
    { 
        id: 'banana',
        price: 1,
        quantity: 3,
        category: 'fruit'
    },
    { 
        id: 'dog food',
        price: 5,
        quantity: 1,
        category: 'other'
    },
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
];

/*Output: 
[
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]*/

export function getAllDairy(arr) {
   const newArr =  arr.filter( objK => 
        objK.category === 'dairy')
    return newArr
}

/*
Output: 
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    }
]
*/

export function getAllFruitsThatCostMoreThanTwo(arr) {
   const newArr = arr.filter(objK=> 
        objK.category === 'fruit' && objK.price > 2);
   return newArr;
}


/*
Output: 
    { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
*/

export function findTheCheese(arr) {
    const dairyArr = getAllDairy(arr);
    const newArr = dairyArr.filter(objK =>
        objK.id === 'cheese');
    return newArr;
}

/*
Output: 
['apple', 'banana']
*/

export function listNamesOfAllFruits(arr) {
        let namesArr = [];
      const newArr = arr.filter(objK => 
         objK.category === 'fruit' )

         for(let i of newArr){
            namesArr.push(i.id);
         }
         
   return namesArr;
}

