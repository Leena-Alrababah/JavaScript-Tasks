/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
function tellFortune (job_title , geographic_location , partner_name , number_of_children) {
    console.log (` You will ba a ${job_title} in ${geographic_location}, and marrid to ${partner_name} with ${number_of_children} kids`);
  }
  tellFortune ( "X" , "Y" , "Z" , "N");
  
  /*
  2
  Write a function named calculateDogAge that:
  takes 1 argument: your puppy's age.
  calculates your dog's age based on the conversion
  rate of 1 human year to 7 dog years.
  outputs the result to the screen like so:
  "Your doggie is NN years old in dog years!"
  
  Ex: calculateDogAge(1);
  => "Your doggie is 7 years old in dog years!"
  */
  function calculateDogAge ( your_puppy_age) {
    let aage = your_puppy_age * 7 ;
    console.log (`Your doggies is ${aage} years old in dog years!`);
  }
  
  calculateDogAge (3);
  /*
  3
  Write a function named calculateSupply that:
  takes 2 arguments: age, amount per day.
  calculates the amount consumed for rest of the life (based on a constant max age 100).
  outputs the result to the screen like so:
  "You will need NN to last you until the ripe old age of X"
  
  Ex: calculateSupply(30, 3);
  => 'You will need 76650 cups of tea to last you until the ripe old age of 100;
  */
  
  function calculateSupply ( age , amount_per_day) {
    const maxAge = 80;
    let amount = (amount_per_day * 365) * ( maxAge - age);
    let message = ` You will need ${amount} cups of tea to last you until the ripe old of ${maxAge}`;
    console.log (message);
  }

  calculateSupply (23 , 1);
  /*
  4
  Write a function called greet that:
  takes 1 argument: name.
  and it will return hello + name
  
  Ex: greet("Adam")
  => "Hello Adam"
  */
  function greet (name) {
    console.log ("Hello " + name);
  }
  greet ("Leena");
  
  /*
  5
  what is the error:
  function double(cat) {
    return 2 * x;
  }
  function double(7) {
    return 2 * 7;
  }
  
  function double('7') {
    return 2 * 'x';
  }
  */
  
  function double(x) {
    return 2 * x;
  }
  function double(cat) {
    return 2 * 7;
  }
  
  function double(cat) {
    return 2 * 'x';
  }
  
  /*
  6
  fix these functions:
  func double1(x {
    return 2 * x ;
  }
  
  functiondouble2 x)
  return 2 * x;
  }
  
  function (x) double3 {
    return 2 * x;
  
  */
  
    function double1(x) {
        return 2 * x ;
      }
      
      function double2 (x) {
      return 2 * x;
      }
      
      function  double3 (x) {
        return 2 * x;
      }
  /*
  7
  Write a function called cube that:
  accept 1 parameter and calculate the cube of this number
  
  Ex: cube(4)
  => 64
  */
   function cube (num) {
    console.log (num ** 3);
   }

   cube (2);
  
  /*
  8
  Write a function called multiply that:
  accept 2 parameters and calculate the multiply of these 2 numbers
  
  Ex: multiply(3,4)
  => 12
  Ex: multiply(5,4)
  => 20
  */
  function multiply ( value1 , value2) {
    console.log (value1 * value2);
  }
  multiply (3,4);
  multiply (5,4);
  
  /*
  9
  Write a function called canIGetADrivingLicense that:
  accept 1 parameter represent the age
  and if the age greater than or equal to 20 return "yes you can"
  otherwise return "please come back after X years to get one"
  
  Ex: canIGetADrivingLicense(21)
  => "yes you can"
  
  Ex: canIGetADrivingLicense(17)
  => "please come back after 3 years to get one"
  
  Ex: canIGetADrivingLicense(20)
  => "yes you can"
  
  */
  
  function canIGetADrivingLicense (the_age) {
    if (the_age >= 20) {
        console.log ("yes you can");
    } 
    else {
        let a = 20 - the_age;
        console.log (`please come back after ${a} years to get one`);
    }
  }
  canIGetADrivingLicense (21);
  canIGetADrivingLicense (17);
  canIGetADrivingLicense (21);


  /*
  10
  Write a function called sameLength
  that accepts two strings as arguments,
  and returns true if those strings have the same length, and false otherwise.
  
  **hint: how we can know string length   Ex: : "tree".length   => 4
  
  Ex: sameLength("tree","clue")
  => true
  
  Ex: sameLength("tree","car")
  => false
  */
  function sameLength (text1 , text2) {
    if (text1.length == text2.length) {
        console.log (true);
    }
    else {
        console.log (false);
    }
  }
  sameLength ("Leena" , "Rania");
  /*
  11
  Write a function called largerNubmer
  that accept two numbers as arguments,
  and return the first larger numbers
  
  Ex: largerNubmer(5,6)
  => 6
  
  Ex: largerNubmer(5,3)
  => 5
  */
  
  function largerNubmer (num1 , num2 ) {
    if (num1 > num2) {
        console.log (num1);
    }
    else {
        console.log (num2);
    }
  }

  largerNubmer (5,11);


  /*
  12
  Write a function called smallerNubmer
  that accept three numbers as arguments,
  and return the first smaller number
  
  Ex: smallerNubmer(8,6,7)
  => 6
  
  Ex: smallerNubmer(5,99,34)
  => 5
  
  Ex: smallerNubmer(5,99,3)
  => 3
  
  Ex: smallerNubmer(5,3,3)
  => 3
  
  */
  function smallerNubmer ( a,b,c ) {
    if (a < b && a < c) {
        console.log (a);
    }
    else if ( b < a && b < c) {
        console.log (b);
    }
    else {
        console.log (c);
    }
  }

  smallerNubmer (7 , 110 , 90.5);

  /*
  13
  Write a function called shorterString
  that accept five string as an arguments,
  and return the first shorter string
  
  Ex: shorterString("air","school","car","by","github")
  => by
  
  Ex: shorterString("air","tr","car","by","github")
  => tr
  
  Ex: shorterString("by","tr","car","air","github")
  => by
  
  Ex: shorterString("air","by","car","school","github")
  => by
  
  Ex: shorterString("air","tr","by","car","github")
  => by
  
  Ex: shorterString("air","tr","car","github","by")
  => by
  
  */
  
  function shorterString ( s1 , s2 , s3 , s4 , s5 ) {
    if ( s1.length < s2.length && s1.length < s3.length && s1.length < s4.length && s1.length < s5.length) {
        console.log (s1);
    }
    else if ( s2.length < s1.length && s2.length < s3.length && s2.length < s4.length && s2.length < s5.length) {
        console.log (s2);
    }
    else if ( s3.length < s1.length && s3.length < s2.length && s3.length < s4.length && s3.length < s5.length) {
        console.log (s3);
    }
    else if ( s4.length < s1.length && s4.length < s2.length && s4.length < s3.length && s4.length < s5.length) {
        console.log (s4);
    }
    else {
        console.log (s5);
    }
  }

  shorterString ("Leena" , "Rama" , "Rania" , "Razan" , "Lammma");


  /*
  14
  Write a function called longerString
  that accept four string as an arguments,
  and return the first longer string
  
  Ex: longerString("air","school","car","github")
  => school
  
  Ex: longerString("air","schoo","car","github")
  => github
  
  try all the cases (change the order of the longestString)
  */
  
  function longerString ( ss1 , ss2 , ss3 , ss4 ) {
    if ( ss1.length > ss2.length && ss1.length > ss3.length && ss1.length > ss4.length) {
        console.log (ss1);
    }
    else if ( ss2.length > ss1.length && ss2.length > ss3.length && ss2.length > ss4.length) {
        console.log (ss2);
    }
    else if ( ss3.length > ss1.length && ss3.length > ss2.length && ss3.length > ss4.length) {
        console.log (ss3);
    }
    else {
        console.log (ss4);
    }
  }

  longerString ("Hey" , "Hello" , "Hi" , "Welcome");

  /*
  15
  Write a function called isEven
  that accept 1 argument as a number,
  and return true if this number is even
  and false if this number is odd
  
  Ex: isEven(1)
  => false
  Ex: isEven(2)
  => true
  
  */
  function isEven (arg1) {
    if ( arg1 % 2 == 0) {
        console.log (true);
    }
    else {
        console.log (false);
    }
  }

  isEven (10);
  isEven (11);
  
  /*
  16
  Write a function called isOdd
  that accept 1 argument as a number,
  and return true if this number is Odd
  and false if this number is Even
  
  Ex: isOdd(4)
  => false
  Ex: isOdd(5)
  => true
  
  */
  function isOdd (arg2) {
    if ( arg2 % 2 == 0) {
        console.log (false);
    }
    else {
        console.log (true);
    }
  }

  isOdd (10);
  isOdd (11);
  
  /*
  17
  Write a function called positive
  that accept 1 argument as a number,
  and return the positive version of the number passed
  
  Ex: positive(4)
  => 4
  Ex: positive(-5)
  => 5
  
  */
  function positive (arg3) {
    if ( arg3 > 0) {
        console.log (arg3);
    }
    else {
        console.log (- arg3);
    }
  }
  
  positive (3);
  positive (-6);

  /*
  18
  Write a function called fullName
  that accept two parameters, firstName and lastName,
  and returns the firstName and lastName concatenated
  together with a space in between.
  
  Ex: fullName("Adam","McCallen")
  => "Adam McCallen"
  Ex: fullName("Alex", "Mercer")
  => "Alex Mercer"
  */
  function fullName (firstName , lastName ) {
    console.log (` "${firstName} ${lastName}" `);
  }

  fullName ("Leena" , "Al-Rababah");
  
  /*
  19
  Write a function called average
  that takes five numbers as inputs
  and returns the average of those numbers.
  
  Ex: average(1,2,3,4,5)
  => 3
  
  Ex: average(5,7,9,3,5)
  => 5.8
  
  */
  
  function average (mark1 , mark2 , mark3 , mark4 , mark5 ) {
    let avr = (mark1 + mark2 + mark3 + mark4 + mark5) / 5 ;
    console.log (avr);
  }

  average (20 , 18 , 13 , 16 , 20);
  
  /*
  20
  Write a function called randomNumber
  that didnt takes any parameter
  and returns a random number between 0-1
  ** hint: you can seacrh using MDN
  
  Ex: randomNumber()
  => 0.2278
  
  Ex: randomNumber()
  => 0.475
  
  */
  
  function randomNumber () {
    console.log (Math.random () );
  }

  randomNumber ();
  /*
  21
  Write a function called randomBetweenNumbers
  that takes 2 parameters
  and returns a random number between them
  ** hint: you can seacrh using MDN
  
  Ex: randomBetweenNumbers(1,8)
  => 7.5412
  
  Ex: randomBetweenNumbers(3,100)
  => 23
  
  */
  
  function randomBetweenNumbers(start, end){
    console.log ( Math.random() * (start - end) + end)
}
randomBetweenNumbers (1,8);
randomBetweenNumbers (3,100);
  /*
  22
  Write a function called scoreInUniversty
  that takes 1 parameters
  and returns the alpabet in the unevirsty
  A => 95-100
  B => 85-94
  C => 70-84
  D=> 50-69
  F=> 0-49
  
  Ex: scoreInUniversty(96)
  => "A"
  
  Ex: scoreInUniversty(3)
  => "F"
  
  Ex: scoreInUniversty(71)
  => "C"
  */
  
  function scoreInUniversty (grade) {
    if ( grade >= 95 && grade <= 100 ) {
        console.log ("A");
    } 
    else if ( grade >= 85 ) {
        console.log ("B")
    }
    else if ( grade >= 70 ) {
        console.log ("C")
    }
    else if ( grade >= 50 ) {
        console.log ("D")
    }
    else {
        console.log ("F");
    }
  }

  scoreInUniversty (79);
  /*
  23
  Write a function called counter
  that will returns a number bigger
  than the one that returnd before
  and start from 0
  
  Ex: counter()
  => 1
  
  Ex: counter()
  => 2
  
  Ex: counter()
  => 3
  
  */

  let count = 0;
  function counter() {
    console.log ( count++ );
  }

  counter ();
  counter ();
  counter ();
  counter ();
  counter ();

  /*
  24
  Write a function called resetCounter
  that will reset the previuos function
  and return the number before reset and
  a string say that the counter reset
  
  Ex: counter()
  => 1
  
  Ex: counter()
  => 2
  
  Ex: counter()
  => 3
  
  Ex: resetCounter()
  => 3 and the counter reset now
  
  Ex: counter()
  => 1
  
  Ex: counter()
  => 2
  
  Ex: resetCounter()
  => 2 and the counter reset now
  
  Ex: counter()
  => 1
  */

  function resetCounter () {
    console.log ( --count );
  }

  resetCounter ();
  resetCounter ();
  resetCounter ();
  resetCounter ();