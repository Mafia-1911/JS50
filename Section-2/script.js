'use strict';
//Cathes Un-initaized variables instead of initializing them  
//Catches the reserved keywords even the up-to-release ones 

// 3. Functions 
function makeJuice(apples,oranges){
    console.log( `Juice made with ${apples} apples and ${oranges} oranges`)
}

makeJuice(10,5);

//4. Functions Declarions vs Expressions 
function calcAge1(birthYear){
    let age= 2025-birthYear;
    console.log( `Your age is: `+age );
    return age;
}
calcAge1(1969);

//Anonymous Function , Useful for calculating Assinging values all in one go 
const calcAge2=function (birthYear) {
    return 2025-birthYear;
}

