// user Object.values and Object.key to solve these problems!

// Input: 
const objeto = {
    wheels: 8,
    type: 'truck',
    goes: 'vroom',
}



/*
Output:
`wheelstypegoes`
or
`goeswheelstype`
or
`wheelsgoestype`
,
etc

(we cannot control the order that these appear in without extra work, so any of these outputs are acceptable)
*/

export function makeWeirdStringFromKeys(someObject) {
    const newArr = Object.keys(someObject);
    return newArr;
}
  



/*
Output:
{
    WHEELS: 8,
    TYPE: 'truck',
    GOES: 'vroom',
}
*/

export function makeMoreScreamingKeys(someObject) {
    return Object.assign(...Object.keys(someObject).map(key => 
        ({[key.toUpperCase()]: someObject[key]
        })));
    }

/*
Output:
[ 
    ['wheels', 8],
    ['type', 'truck'],
    ['goes', 'vroom'],
]
*/

export function makeTuples(someObject) {
    const newArr = Object.entries(someObject);
    return newArr;  
}
