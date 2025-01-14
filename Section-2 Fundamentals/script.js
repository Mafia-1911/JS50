'use strict';
//Cathes Un-initaized variables instead of initializing them  
//Catches the reserved keywords even the up-to-release ones 

// 3. Functions 
// function makeJuice(apples,oranges){
//     console.log( `Juice made with ${apples} apples and ${oranges} oranges`)
// }

// makeJuice(10,5);

//4. Functions Declarions vs Expressions 
// function calcAge1(birthYear){
//     let age= 2025-birthYear;
//     console.log( `Your age is: `+age );
//     return age;
// }
// calcAge1(1969);

// //Anonymous Function , Useful for calculating Assinging values all in one go 
// const calcAge2=function (birthYear) {
//     return 2025-birthYear;
// }

//5. Arrow Functions 
//You dont need to explicitely return the value for one liner
const calcAge3=(birthYear)=>{2025-birthYear}
const age3= calcAge3(1995);
console.log( age3 ); 

//6. Functions calling Functions 
// function grinder(fruit){
//     //makes  pieces
//     return fruit/4;
// }
// function juiceMaker(apples,oranges){
//     const applePieces=grinder(apples);
//     const orangePieces=grinder(oranges);
//     console.log( `Fresh Juice made of ${applePieces} piece of apples \n And of ${orangePieces} Piece of Oranges` );
//     return  applePieces+orangePieces
// }
// juiceMaker(40,20);

//Challenge 1
// const calcAverage=(score1,score2,score3)=>{return (score1+score2+score3)/3}

// const checkWinner=(avgDolphins,avgKoalas)=>{
//     if(avgDolphins>= 2*avgKoalas){
//         console.log( `Dolphins win (${avgDolphins} vs. ${avgKoalas})` )
//     }else {
//         console.log( `Koalas win (${avgKoalas} vs. ${avgDolphins})` )
//     }
// }
// const dolphins=calcAverage(44,23,71);
// const koalas=calcAverage(65,54,49);
// checkWinner(dolphins,koalas)

//9.Arrays 
//--> Using the new Keyword 
// const students= new Array(5);
// console.log( students )
// //--> Declaring Directly
// const teachers = [1,2,34]
// console.log( teachers )
// const friends= ['Mich','obama']
// //You can merge other data types in an array 
// const Mushtasin=['Ahmed',2003,'CSE',22]

//Adding elements to the end 
//Mushtasin.push("Engineer")
//Push Function - It returns the new length
// function push(newElement){
//     array[array.length]=newElement;
//     return array.length++;
// }

// //Adding elements to the front 
// Mushtasin.unshift("SSC:2020")
// console.log( Mushtasin )

// //Removing the last Element 
// const removedElement = Mushtasin.pop()
// //Removing the First Element ( array.shift() )
// Mushtasin.shift()

// //Check if element exists 
// Mushtasin.includes("SSC:2022") // Includes is very useful for conditionals

//Challenge 2
// function calcTip(bill){
//     const tip=0;
//     if(bill>50 && bill < 300 ){
//         tip=0.15*bill;
//     }else{
//         tip=0.20*bill;
//     }
//     return tip;
// }
// calcTip(15)
// const tips=new Array(125,555,44);


//12.Objects 
//Creating an object with the object literal syntax
const student1={
    firstName:"Jonas",
    lastName:"Ahmed",
    birthYear:2021,
    age:2024-2021,
    friends:["Friend1","Friend2"]
};
console.log( student1.firstName )
console.log( student1["firstName"] )

//Using the bracket notation to compute AND then retrieve
let nameKey="Name"
console.log( student1["last"+nameKey] )

//printing the object
console.log( `Hi this is ${student1.firstName} ${student1.lastName},
    And my age is ${student1["age"]} and i have ${student1.friends.length} Friends` )































































