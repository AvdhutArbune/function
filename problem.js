// greet();
// const greet = function() {
//   console.log("Hello!");
// };

// ------------------------------------------------------------------------------------------------------------------------

// function add(a, b) {
//     console.log(a + b);
//     return a + b;
//   }
//   add(5);





// function greet(name = "Guest") {
//     return "Hello, " + name;
//   }
//   console.log(greet());



// function multiply(x, y) {
//     return x * y;
//   }
//   console.log(multiply(3, 4));




// function greetUser() {
//     return "Hello, User!";
//   }
//   let result = greetUser();
//   console.log(result);






// let person = {
//     name: "Alice",
//     age: 25,
//     greet: function () {
//         console.log("Hello, " + this.name);
//     }
// };
// person.greet();




// let person = {
//     birthYear: 1995,
//     getAge: function (currentYear) {
//         return currentYear - this.birthYear;
//     }
// };
// console.log(person.getAge(2024));




// let greeting = "Hello";
// greeting = "Hi";
// console.log(greeting);



// //wrong code
// function getCharacterFrequency(str) {
//     let frequency = {};
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         frequency.char = (frequency.char || 0) + 1;
//     }
//     return frequency;
// }

// console.log(getCharacterFrequency('aamm'));

// The issue in your code is that you're using frequency.char instead of frequency[char]. In JavaScript, frequency.char accesses a property literally named "char", rather than dynamically using the value of the variable char. This results in all characters updating the same property instead of their own respective entries.



//Right code

// function getCharacterFrequency(str) {
//     let frequency = {};
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         frequency[char] = (frequency[char]  || 0)+ 1;
//     }
//     return frequency;
// }

// console.log(getCharacterFrequency('aamm'));



// function sum(...nums){
//     let sum=0;
//     for(let i of nums){
//         sum+=i
//     }
//     return sum
// }
// console.log(sum(11,22,33,44,55,66,77,88));//396



// let person1 = {
//     name: 'Avdhut',
//     age: 55,
//     greet: function () {
//         console.log("Good morning", this.name);
//     }
// };

// let person2 = {
//     name: 'Sagar',
//     age: 56,
//     greet: person1.greet // Assign the greet function from person1
// };

// person2.greet(); // "Good morning Sagar"



// function freq(str) {
//     let d1 = {}
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i]
//         d1[char]=d1[char] || 0 + 1
//     }
//     return d1
// }
// console.log(freq('Avdhutu'));


function fetchdata(printdata){
    console.log('Data is Fetching....');
    setTimeout(()=>{
       let data='sample data from server'
       printdata(data)
    },2000)
    
}
function printdata(data){
    console.log('the fetched data is', data);
    
}

fetchdata(printdata)











