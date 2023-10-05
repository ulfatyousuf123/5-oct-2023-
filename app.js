//Question # 1:

// function  currentDate(){

//     var date = new Date();
//     console.log(date);
    
// }

// currentDate();

// Question # 2:

// function greet() {
//     var firstname = prompt("Enter first name");
//     var lastname = prompt("Enter last name");
//       var fullname = firstname + " " + lastname;
//       console.log(fullname);
//      }
  
//    greet();


//Question # 3:

// var val1 = +prompt("Enter a value for sum");
// var val2 = +prompt("Enter a second sum value ");

// function sum(val1,val2){
//     return val1 + val2;
// }
// var res = sum(val1,val2)
// console.log(res);



//Question # 4:  Calculator***********


// var num1 = +prompt("Enter first value");
// var opr = prompt("Enter operator value");
// var num2 = +prompt("Enter second value");

// var result = calc(num1,opr,num2);
// console.log(result);


// function calc(num1, opr, num2) {
//      if (opr === "+") {
//         return num1 + num2;
//     }  else if (opr === "-") {
//         return num1 - num2;
//     } else if (opr === "*") {
//         return num1 * num2;
//     } else if (opr === "/") {
//         return num1 / num2;
//     } else if (opr === "%") {
//         return num1 % num2;
//     }
// }


//Question # 5:
// var num = parseInt(prompt("Enter a number:"));

// sumOfSquares(num); {
//     var sum = 0;
    
    
//     for (i=0; i <=num; i++) {
//         sum += i*i; }
//         document.write("The sum of squares for numbers up to and including " +num+ "is " + sum ) ;
   
    
// }

//Question # 6:

// function factorial(n) {
//     let answer = 1;
//    if (n == 0 || n == 1 ) {
//         return answer;

//     }
//     else if (n > 1) { 
//         for (var i = n; i >= 1; i--) {
//             answer = answer * i;
//     }
// }
// }

//Question # 7 :

// var FirstNumber = "1,2,3,4,5,6,7,8,9,0";
// var SecondNumber = "a,b,c,d,e,f,g,h,j,i,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";

// function sum(FirstNumber,SecondNumber){ 
// for (var i = FirstNumber ;i < SecondNumber ; i++){
//     console.log(i)
// }

// }

// sum(FirstNumber,SecondNumber);

//Question # 8:





//Question # 9 :

// var length = prompt("Enter a rectangular length");
// var width = prompt("Enter a width for your rectangular");

// function area(length,width) {
//     return length * width;
// }
// function perimeter(length,width){
//     return 2 *(length + width);

// }
// document.writeln('The area of your rectangle is ' + area(length, width));         
//         document.writeln('The perimeter of your rectangle is ' + perimeter(length, width));


/// Question # 10 :


// var word = prompt("Enter a palindrome word");

// var check = "" ;

// for (var i = word.length -1 ; i >= 0; i-- ) {
//     check += word[i]
// }
// if (word === check){ 
//     console.log(word +  " " + "is palindrome word")
//

//Question # 11:


// function uppercase(str) {
//     var  array1 = str.split(" ");
//     var newarray1 =[];

//     for (var x = 0; x < array1.length ; x++) { 
//     newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(uppercase("the quick brown fox"));



//Question #14 ;

// function calcCircumfrence(radius) {
//     var y = (Math.PI * radius) * 2;
//   console.log("The circumfrence is " + y + ".");
//   }
//   function calcArea(radius) {
//     var x = (Math.PI * radius) * radius;
//   console.log("The area is " + x + ".");
//   }
  
//   calcCircumfrence(30);
//   calcArea(10);
  
  
