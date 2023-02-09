// 24_5-1 Understand recursion using sum of numbers

// let sum = 0;
// for (let i=1; i <=5; i++){
//     sum = sum +i;
// }
// console.log(sum);

// output-
// 15

// or

// let sum = 0;
// for(let i = 5; i >= 1; i--){
//     sum = sum + i;
// }
// console.log(sum);

// output-
// 15


// 24_5-2 Explore Factorial Recursion using a for loop concept

// function sum(i){
//     if(i == 1){
//         return 1;
//     }
//     return i + sum(i-1);
// }
// const result = sum(5);
// console.log(result);


// output-
// 15


// ***** recursion is repeat call in a same function *****


// function factorial(i){
//     if(i == 1){
//         return 1;
//     }
//     return i * factorial(i-1);
// }

// const result = factorial(5);

// output-
// error


// 24_5-3 (optional) Explore what you can do with JavaScript Object


// const student = {
//     name: 'Shakib Khan',
//     id: 121,
//     address: 'movie cinema',
//     isSingle: true,
//     friends: ['Apu', 'Raaz', 'Salman', 'Aamir'],
//     car:{
//         brand: 'tesla',
//         price: 5000000,
//         made: 2023
//     }
// }
// console.log(student);

// output-
// {
//     name: 'Shakib Khan',
//     id: 121,
//     address: 'movie cinema',
//     isSingle: true,
//     friends: [ 'Apu', 'Raaz', 'Salman', 'Aamir' ],     
//     car: { brand: 'tesla', price: 5000000, made: 2023 }
//   }


// ****array like object*****

// function add(num1, num2){
//     console.log(num1, num2);
//     console.log(arguments[4]);
// }
// add(12, 13, 45, 89, 78);

// output-
// 12 13
// 78


// 24_5-4 (advanced) Find the matching product by searching products

// const numbers = [45, 65, 23, 98, 19];
// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }


// output-
// PS C:\Users\User\amin> node js-24-5
// 45
// 65
// 23
// 98
// 19



// or,

// const numbers = [45, 65, 23, 98, 19];

// for(const number of numbers){
//     console.log(number)
// }

// output-
// 45
// 65
// 23
// 98
// 19


// const products = [
//     {id: 1, name: 'xiami', price: 19000},
//     {id: 2, name: 'samsung', price: 20000},
//     {id: 3, name: 'walton', price: 12000},
//     {id: 4, name: 'iphone', price: 69000},
//     {id: 5, name: 'nokia', price: 17000},
//     {id: 6, name: 'opp', price: 60000},
//     {id: 7, name: 'simens', price: 13000},
//     {id: 2, name: 'symphony', price: 10000},
// ]

// function matchedProducts (products, search){
//     const matched = [];
//     for (const product of products){
//         if(product.name.includes(search)){
//             matched.push(product);
//         }
//     }
//     return matched;
// }

// const result = matchedProducts(products, 'iphone');
// console.log(result);


// output-
// [ { id: 4, name: 'iphone', price: 69000 } ]



   
   




