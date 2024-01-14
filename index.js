// 1-MASALA
// let arr = [`A`, `B`];
// let [b, a] = arr;



// 3-MASALA
// let arr = [1, 2, 3, 4, 5];
// let [a, b, ...res] = arr;
// let new_array = [];
// new_array.push(a, b)

// console.log(new_array);
// console.log(res);




// 4-MASALA
// let person = {
//     name: 'John',
//     age: 30
// };

// let {name, age} = person;
// console.log(name);
// console.log(age);




// 5-MASALA
// let car = {
//     name: 'Mersedes',
//     year: 2023,
//     color: 'black'
// };

// let {name = 'bmw', year = 2020, color = 'white', max_speed= '300km/h'} = car;
// console.log(name, year, color, max_speed);




// 6-MASALA
// let users = [
//     {
//         id: 1,
//         name: 'John',
//         age: 21
//     },

//     {
//         id: 2,
//         name: `Jack`,
//         age: 34
//     },

//     {
//         id: 3,
//         name: 'Michael',
//         age: 43
//     }
// ];

// let {id, name, age} = users[0];
// let {id, name, age} = users[1];
// let {id, name, age} = users[2];
//1-misol
/**let arr=['Azizbek','Akmal'];
let [a,b]=arr
let arr2=[]
arr2.push(b,a)
console.log(arr2); */

//2-misol
/**let arr = [1, 2, 3, 4, 5, 6, 7];
let a = Math.floor(arr.length / 2);
let [bir, or, ox] = [arr.slice(0, a), arr[a], arr.slice(a + 1)];
console.log(or); */

//3-misol
/**let arr=[1,2,3,4,5]
let [a,b,...res]=arr
console.log(a, ' ',b,' ',res); */

//4-misol
/**let a = {
    shaxs:
    {
        ism: 'Jon',
        yosh: 30
    }
};
let { ism, yosh } = a.shaxs;

console.log(ism);
console.log(yosh); */

//5-misol
/**let a = {
    shaxs:
    {
        ism: 'Jon',
        yosh: 30
    }
};
let { ism,familiya='Uik',yosh } = a.shaxs;

console.log(ism);
console.log(familiya);
console.log(yosh); */

let objectsArray = [
    { ism: 'John', yosh: 30 },
    { ism: 'Alice', yosh: 25 },
    { ism: 'Bob', yosh: 35 }
  ];
  
  // Massiv va ob'ektni tuzilmasini buzish
  let newArray = objectsArray.map(({ ism, yosh }) => ({ ism, yosh }));
  
  console.log(newArray);
  

