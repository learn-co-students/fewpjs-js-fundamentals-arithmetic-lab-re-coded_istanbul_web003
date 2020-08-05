
// Write your code here

/*
1. Create a variable called `multiply` that will multiply the variables `num1` and `num2`
   whose results will equal "62".
2. Create a variable called `random` that will generate a random integer greater
   than 0.
3. Create a variable called `mod` set to an equation whose remainder is equal to
   "4".
4. Create a variable called `max` that will return "20" as the highest number in
   the set.
*/
let num1= 31;
let num2=2;



let multiply = Math.floor(num1*num2);

let random= Math.floor(Math.random() * 10) + 1;


function remainder(num1, num2){
    return Math.floor(num1%num2);
}

let mod = remainder(40, 9);


let max = Math.max(1,2,20);