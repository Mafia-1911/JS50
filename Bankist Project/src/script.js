'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];


// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


//Transactions List 
const displayMovements = function (movementsArr,sort=false) {
  const movs= sort ? movementsArr.slice().sort((a,b)=>a-b) : movementsArr;
  containerMovements.innerHTML = ' ';
  let finalHtml = ' ';
  movs.forEach(function (element, idx) {
    const type = element > 0 ? 'deposit' : 'withdrawal';
    let html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">
    ${idx + 1}) ${type}
    </div>
    <div class="movements__date">24/01/2037</div>
    <div class="movements__value">${element}€</div>
    </div>`;
    finalHtml += html;
    
    // containerMovements.insertAdjacentHTML("afterbegin",html); -> Inserting after every iteration
  });
  containerMovements.insertAdjacentHTML('afterbegin',finalHtml);
};

//+++12  Computing Username initials and making a property on the object 
const computeUser = function (user) {
  const initials = user.map(account => {
    console.log( account )
    const fullName = account.owner;
    let initial = '';
    fullName.split(' ').forEach((val, idx) => {
      initial += val[0];
    });
    account.username=initial;
    return initial;
  });
  console.log( initials )
};
computeUser(accounts)


//14
const calcBalance=function(account){
  account.balance=account.movements.reduce((acc,val)=>acc+val,0); //Creating a new Property
   
  labelBalance.textContent=`${account.balance} €`; // Displays on the top 
  
}


//++++ 16
const calcNdisplayBalance=function(movements){
  let income=movements.filter((val)=>{
    if(val>0) return val;
  }).reduce((acc,curr)=>{
    return acc+curr;
  },0);
  console.log( income );
  labelSumIn.textContent=`${income}€`;  ///Displays at the Bottom 
  
  let exp=movements.filter((val)=>{
    if(val<0) return val;
  }).reduce((acc,curr)=>{
    return acc+curr;
  },0);
  console.log( exp );
  labelSumOut.textContent=`${Math.abs(exp)}€ `;  
}


//++++ 18 
//FIND Method 


//++++19 Implementing Login 
let currentAccount;
btnLogin.addEventListener("click",function(e){
  e.preventDefault();
  // Finding the acc first 
  currentAccount=accounts.find((acc)=>{
    return acc.username===inputLoginUsername.value; //Return the entire object whose name matches 
  })
  
  // Matching Pin wiht that acc 
  if(currentAccount?.pin===Number(inputLoginPin.value)){
    console.log( "Matches" )
    console.log( `You are Successfully Logged in with :`,currentAccount)
    
    //Clearing the Input fields 
    inputLoginUsername.value=inputLoginPin.value='';
    //Display the UI wihth the nickname and meesege   
    labelWelcome.textContent=`WELCOME Back ${currentAccount.owner.split()[0]}`;
    containerApp.style.opacity=1;

    updateUI(currentAccount);
    
    
  }else{ 
    console.log( "ID and Pass Doesn match"  )
    inputLoginUsername.value=inputLoginPin.value='';
    
  }
  
  
  
})

const updateUI=(account)=>{
  //You can call it wherever and which ever account you want 

  // Display Transactions 
    displayMovements(account.movements)
    //Display balance 
    calcBalance(account);
    // Display Summery
    calcNdisplayBalance(account.movements)
}

//20 Implementing Transfers 
btnTransfer.addEventListener("click",(e)=>{
    e.preventDefault();
    let amount=Number(inputTransferAmount.value)
    let recipient=accounts.find((acc)=>{
      return acc.username == inputTransferTo.value;
    })
    //Amount Validation  
    inputTransferAmount.value = inputTransferTo.value=''
    if(amount>0 && recipient && amount<=currentAccount.balance && recipient.username !== currentAccount.username){
      //User loses this amount 
      console.log( `Pushing ${-amount}` )
      currentAccount.movements.push(-amount)
      updateUI(currentAccount)
      
      //recipient recieves it 
      recipient.movements.push(amount)
      console.log( "Moved from ",currentAccount,"to",recipient)
    }else {
      console.log( "Sorry User or amount is wrong" )
    }
  
});
//21 - Implementing Deleting User 
btnClose.addEventListener("click",function(e){
  e.preventDefault();
  //Check if Matches 
  if(inputCloseUsername.value==currentAccount.username && currentAccount.pin===Number(inputClosePin.value)){
    const idx=accounts.findIndex((acc)=>{ //Find the index of the user 
        return acc.username==inputCloseUsername.value
    })
    console.log( idx )
    accounts.splice(idx,1); //Delete the user from array of objects 
    inputCloseUsername.value=inputClosePin.value=''
    containerApp.style.opacity=0;   //Hide the UI 

  }else{
    console.log( "You are not Auhorized to Delete" )
    inputCloseUsername.value=inputClosePin.value=''
  }

})

// 22 FindLast ( )

// 23 Some( )
// -> Out back gives loan only if you have a transaction of less or equal to the 10% of the amount 
btnLoan.addEventListener("click",function(e){
  e.preventDefault();
  let loan=Number(inputLoanAmount.value)
  if(loan>0 && currentAccount.balance>loan && currentAccount.movements.some(transaction=> transaction>= 0.1*Number(inputLoanAmount.value))){
    //Will get the loan 
    currentAccount.movements.push(loan);
    inputLoanAmount.value="";

    updateUI(currentAccount)
  }else{
    console.log( "Sorry you are not Eligible for Loan " )
    inputLoanAmount.value="";
  }
  
})
// 24 Flat( )   Calculate the total transaction of the bank 
const turnover=(accounts)=>{
  let accountsMovements = accounts.map(acc=>acc.movements)
  const figure=accountsMovements.flat().reduce((acc,c)=>{
    return acc+c;
  },0)
  console.log( `${accountsMovements.flat()} with a figure of ${figure}` )
}
turnover(accounts)

// 26 SORT 
let sorted = false; //we start with unsorted 
btnSort.addEventListener("click",function(e){
  e.preventDefault();
  //We only update that part of UI , thats why we need 
  displayMovements(currentAccount.movements,!sorted)
  sorted = !sorted;

})



//
/////////////////////////////////////////////////
///
// 


//Compute the User names
// ++++ JONAS
//WE just need to show , we dont need a new array of usernames 
// const createUsernames=function(user){
  //   user.owner.split(" ").forEach((val,idx)=>{
    //       const username = val
    //           .toLowerCase()
    //           .split(' ')
    //           .map(name => val.at(0))
  //           .join('');
  //       console.log(`Jonas: ${username}`);
  
  //   })
  
  //   return username;
  // }
  // const user = 'Steven Thomas Williams';
  // createUsernames(accounts)
  
  
  
  
  /////////////////////////////////////////////////
  /////////////////////////////////////////////////
  // LECTURES
  
  const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
  ]);
  
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
  
  const deposits = movements.filter((val,idx,arr)=>{
    return val>0;
  }).reduce((acc,val)=>acc+val,0)
  
  const withdrawal = movements.filter((val)=>{
    return val<0;
  }).reduce((acc,val)=>acc+val,0)
  console.log( deposits , withdrawal)
  
  //?REDUCE 
  const balance = movements.reduce(function(accumulator , currentValue , idx ,arr){
    return accumulator+currentValue;
  },0)
  console.log( balance )
  
  let balance2=0;
  for(let val of movements){
    balance2 +=val;
  }
//FIND Method 
let sara_Obj=accounts.find(acc=>{
  return acc.owner == "Sarah Smith"
});

for(let acc in accounts){
  if(accounts[acc].owner==="Sarah Smith"){
    console.log(accounts[acc])
  }
}
  
  
  
  
  


