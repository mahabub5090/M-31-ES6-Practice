// 1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
// Now convert this array into an even array (array with even
// numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
// method. Hints: add one to any odd number and it will become an even
// number.

const oddNumbers = [1, 3, 5, 7, 9];

function evenNumbers(odd) {
    const evenNumbers = [];
    for (let number of odd) {
        number = number + 1;
        evenNumbers.push(number);
    }
    // console.log(evenNumbers);
    return evenNumbers;
}
const result = evenNumbers(oddNumbers);
// console.log(result);

//array.map

const makeEven = oddNumbers.map(num => num + 1);
// console.log(makeEven);

// forEach array
// (na buje kora hoice)

const newArray = [];

const r = oddNumbers.forEach(x => {
    x = x + 1;
    newArray.push(x);
})

console.log(newArray);

// 2) You are given an array say: [33, 50, 79, 78, 90, 101, 30].Now
// return /get all the elements which are divisible by 10 using
// array.filter() method.

const divisibleBy10 = [33, 50, 79, 78, 90, 101, 30];

const result3 = divisibleBy10.filter(x => x % 10 === 0);
console.log(result3);

// 3) Now do the same task of question 2. But do this using array.find()
// method.Then compare the output of question 2 & question 3.

const divisibleBy10two = [33, 50, 79, 78, 90, 101, 30];

const result4 = divisibleBy10two.find(x => x % 10 === 0);
console.log(result4);

// 1) You have an array[1, 9, 17, 22].Add the all elements
// of this array and give output.Do this using for loop &
//     array.reduce() method.

const array = [1, 9, 17, 22];

let sum = 0;
for (const arr of array) {
    sum = sum + arr;
}
console.log(sum);

// array.reduce

const initial = 0;

const result5 = array.reduce(((earliar, latest) => earliar + latest), initial);
console.log(result5);


//Q:5. Practice Problem reduce() = challenging 

// 1) Challenging Follow above array of objects.So, you have 3 objects as
//     array element.Can you find out the total sum from here ?
//         20 + 15 + 22 = 57.The output will be 57
// What are you thinking ? Yeah! Do it with for loop.I know you can do it.
//     But! Wait!! Wait!!! Do the same task using array.reduce() method.


const people = [
    { name: "Meena", age: 20 },
    { name: "Rina", age: 15 },
    { name: "Suchorita", age: 22 },

];

// method-0 (forOf)

let ageTotal = 0;

for (const object of people) {
    ageTotal = ageTotal + object.age;
}

console.log(ageTotal);

// array.reduce
//  method-1

const result6 = people.reduce(((earliar, latestObject) => earliar + latestObject.age), 0);

console.log(result6);

// method-2

const result7 = people.reduce(function (earliar, latestObject) { return earliar + latestObject.age }, 0);
console.log(result7)

// method-3

const result8 = people.reduce(function (earliar, latestObject) {
    return { age: earliar.age + latestObject.age };
});

console.log(result8);

// method-4

const result9 = people.reduce((earliar, latestObject) => ({ age: earliar.age + latestObject.age }));


console.log("result9", result9);

// method-4.1

const result13 = people.reduce((earliar, latestObject) => ({ age: earliar.age + latestObject.age })).age;


console.log("result13", result13);

// method-5 (destructuring method)

const result10 = people.reduce((earliar, { age }) => earliar + age, 0);
console.log(result10);

// method-6 (with array map)

const result11 = people.map(function (earliar) { return earliar.age; })
    .reduce(function (earliar, latestObject) { return earliar + latestObject; });

console.log(result11);

// method-7 (with arrow map)

const result12 = people.map(earliar => earliar.age).reduce(function (earliar, latestObject) { return earliar + latestObject });

console.log(result12);

// method-8
// fail...

// const result14 = (people, age) => people.reduce((earliar, latestObject) => { return earliar + latestObject.age }, 0);

// console.log(result14);

// method-9

const result15 = people.reduce((earliar, latestObject) => {
    return {
        age: earliar.age + latestObject.age
    };
}, {
    age: 0
});

console.log(result15);

// method-9
// failed...
// const result16 = people.reduce(function (earliar, latestObject) { return earliar.age + latestObject.age });

// console.log(result16);

// method-10
// fail---
// const result17 = (people, age) => {
//     const initialValue = {};
//     return people.reduce((earliar, latestObject) => {
//         return {
//             ...earliar,
//             [latestObject[age]]: latestObject,
//         };
//     }, initialValue);
// };

// console.log(result17);


// ===================================================
// 0.6 Console the value of age;
const student = {
    name: "Fredie",
    age: 26
}
// 1
console.log(student["age"]);
// 2
console.log(student.age);
// 3 
const boyos = "age";
console.log(student[boyos]);

// Console the value of city

let data = {
    location: [
        {
            latitude: '34.5, 37.8',
            longitute: "98.77, 58.7",
            city: "Hyderabad",
            country: "India"
        }
    ]
}

const result20 = data.location[0].city;
console.log(result20);

// 07 (challenging)

//   Console the value of email
// ● Console the value of address
// ● Console the value of city
// ● Console the value of lat
// ● Console the value of company name

const object = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}