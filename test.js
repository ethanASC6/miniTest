// 1. Declare a number called myNumber that is equal to your age and print it
let myNumber = 16;
console.log(myNumber);


// 2. Declare a string called myName that contains your name and print it
const myName = 'Ethan';
console.log(myName);


// 3. Declare an array named myArray that contains your age, your first name, and if it's true or false that you're a student
let isStudent = true;
let myArray = [myNumber, myName, isStudent];


// 4. Write and call a function called printHello that prints your name to the console by accessing myArray
function printHello(){
    console.log(myArray[1]);
}
printHello();


/* 5.
1)create a function called area that takes in two parameters, width and length
2) the function, area should return width times length
3) call the function and give two values for the parameters */
function area(width,length){
    let area = width * length;
    return area;
}
area(5,4);


/* 6. Use conditional statements to write fizzBuzz
1) if num is divisble by BOTH 3 and 5, console.log "FizzBuzz"
2) if num is divisible by 3, console.log "Fizz"
3)  if num is divisible by 5, console.log "Buzz"  */
function fizzBuzz(num){
    if (num%3==0 && num%5==0){
        console.log('FizzBuzz');
    }
    else if (num%3==0){
        console.log('Fizz');
    }
    else if (num%5==0){
        console.log('Buzz');
    }
    else{
        console.log('Please input a number divisible by 3 and/or 5');
    }
}
fizzBuzz(5);


// 7. Write a loop that prints hello to the console 4 times
for(let i = 0; i < 4; i++){
    console.log('hello');
}


//8. write a nested for loop that reads the array and console.log each element
let nestedArray = [
    [2,1],[5,8],[3,9]
]
for(let i = 0; i<nestedArray.length; i++){
    for(let j = 0; j<2; j++){
        console.log(nestedArray[i][j]);
    }
}

//9. Command line problems (MAKE SURE TO ANSWER THESE IN THE COMMENTS)

//9a. make a directory called test

// write answer here: 
//mkdir test

//9b. move to your test directory that you just created

// write answer here: 
//cd test

//9c. make a file called test.js

// write answer here: 
//touch test.js

//9d. what is the command to open a file to vscode? 

// write answer here: 
//code

//9e. So you already did "git add ." and then you did git commit -m
// What is the last step of the process to push everything to github?

// write answer here:
//git push