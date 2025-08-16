const arr=['a','b','c']
console.log( arr.slice(1,5) )
//Skips the Last one like the .end() . To print the last one you need to give .end()+1
console.log( arr.slice(1,6) )
console.log( arr.slice(1,-1) )
console.log( arr.slice(4) )

// console.log( arr.splice(2) )
console.log( arr[arr.length-1] )
arr.at(-2);

let movements=[200, 450, -400, 3000, -650, -130, 70, 1300]
for(const i of movements){
    if(i>0){
        console.log( `You Deposited ${i}` )
    }else{
        console.log( `You Withdrew ${Math.abs(i)}` )
    }
}
console.log( `\n` )
movements.forEach(function(i,idx){
     if(i>0){
        console.log( `Transaction:${idx} -> You Deposited ${i}` )
    }else{
        console.log( `Transaction:${idx} -> You Withdrew ${Math.abs(i)}` )
    }
})



const myMap=new Map([
    ["EUR","Euro"],
    ["USD","United States Dollar"],
    ["YEN","Japanese Dollar"]
])

myMap.forEach(function(value,key,map){
    console.log( `${key}: ${value}` );
})


//Practising Map 
const conversionRate=1.23;
let movements_US=movements.map(
    val=>val*conversionRate
)
console.log( movements_US )
console.log( movements )
movements.forEach(function (i) {
    i=i*conversionRate
})
console.log( movements )

//+++ Map 
movements.map((val,idx,arr)=>{

})
const arro=[12,2345,-1,,3452,-6,234,6,457,62,34234,-2,567,67,82345,234]
let max=arro.reduce((acc,currentVal)=>{
    // console.log( acc )
    // console.log( currentVal )
    if(acc>=currentVal){
        return acc;
    }else if(currentVal>acc){
        return currentVal;
    }
    //What ever you return will be stored in the accumulator 
},arro[0])
// console.log( `The max value is : ${max}` )

console.log( arro.find((val)=>val<0) )

//++++22

let lastWithdrawal = arro.findLast(i=>i>2000)
console.log( lastWithdrawal )
//Finding the Last large movement index 
const latestLargeMovement = arro.findLastIndex(e=>  Math.abs(e)>2000 )
console.log( latestLargeMovement )
console.log( `You last Bigger transaction was about: ${lastWithdrawal} about ${arro.length-latestLargeMovement} movements ago` )

//++++ 23 
let ar1=[1,[2],[3],4,[5,6,7],8]
console.log( ar1.flat(2) )
console.log( ar1 )

///+++ 24 Sorting 
const arr1=[12,2345,-1,,3452,-6,234,6,457,62,34234,-2,567,67,82345,234]

arr1.sort((left,right)=>left-right)
console.log( arr1 )

const arr1_Obj=Object.groupBy(arr1,(movements)=>{
   return movements>0 ? "Deposit" : "Withdraw";
})
console.log( arr1_Obj )

let fil=new Array(10)
fil.fill(99)
console.log( fil )

///28+++ recversing 
console.log( arr1.toReversed() )
















