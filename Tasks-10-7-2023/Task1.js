/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/
  let number1 = 20;
  let number2 = 30;
  if (number1 > number2) {
    console.log (number1);
  }
  else {
    console.log (number2); 
}


 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
  let z = 3 * -7 * 2;
  if ( z > 0){
    window.alert ("The sign is Positive");
  } 
  else {
    window.alert ("The sign is Negative");
  }


 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/

let a = 0;
let b = -1;
let c = 4;

if ( a>b && a>c){
  if (b>c) {
    console.log (a,b,c);
  }
  else {
    console.log (a,c,b);
  }
}
else if ( b>a && b>c) {
  if (a>c) {
    console.log (b,a,c);
  }
  else {
    console.log (b,c,a);
  }
}
else {
  if (a>b) {
    console.log (c,a,b);
  }
  else {
    console.log (c,b,a);
  }
}



  
 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */
let e = -5;
let h = -2;
let i = -6;
let g = 0;
let l = -1;

if ( e>h && e>i && e>g && e>i) {
    window.alert (e);
}
else if (h>e && h>i && h>g && h>l) {
    window.alert (h);
}
else if ( i>e && i>h && i>h && i>l) {
    window.alert (i);
}
else if ( g>e && g>h && g>i && g>l) {
    window.alert (g);
}
else {
    window.alert (l);
}

/******* Start Your Code *********/
  
 /******* End Your Code ********* */

 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
  let x = prompt ("Enter X Value");
  let y = prompt ("Enter Y Value");

  if ( x>y ) {
    window.alert ("Hello World");
  } else {
    window.alert ("Goodbye");
  }
 /******* End Your Code ********* */



