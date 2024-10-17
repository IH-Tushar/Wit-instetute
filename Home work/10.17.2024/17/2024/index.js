// Write a function called addNumbers that takes two numbers as parameters and returns their sum.
    function addName(a,b){
        return a+b;
    }
    console.log(addName(3,5));

// Write a function called sumUpToN that takes a number n and returns the sum of all numbers from 1 to n. Use a loop.

    sum = 0;
    function sumUpTon (n){
        for(let i=1; i<=n; i++){
            sum = sum+=i;
        }
        return sum;
    }
    console.log(sumUpTon(5));
// Write a function called sumArray that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.
    let newsum = 0;
    arr = [2,3,4]
    function sumArray(){
        for(let i=0; i<arr.length; i++){
            newsum = newsum += arr[i];
        }
        return newsum;
    }
    console.log(sumArray(arr));
    
// Write a function called countEvenNumbers that takes an array of numbers as a parameter and returns the count of even numbers in the array.

let anotherarr = [10,15,26,2,4,6,8,10,12]
even = 0;
    function countEvenNumbers(){
        for(i=0; i<anotherarr.length; i++){
            if(anotherarr[i] % 2 == 0){
                even++;
            }
        }
        return even;
    }
    countEvenNumbers()
    console.log(even)

// Write a function called stringLength that takes a string as a parameter and returns the length of the string.
    let str = "hello world";
    let lengthofstring;
function stringLength(){
    lengthofstring = str.length;
    return lengthofstring;
}
stringLength();
console.log(lengthofstring);
