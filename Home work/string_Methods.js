// Write a function that compares two strings regardless of case sensitivity using toLowerCase() or toUpperCase(). Return true if the strings are the same, otherwise return false.

let compare_String = (str1, str2) => {
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(compare_String("Tushar", "tushar"));

// Create a function that checks if a given sentence contains the word "JavaScript" using the includes() method. Return a message indicating whether the word is found.
let check_word = (sentence) => {
    return sentence.includes("JavaScript");
}
console.log(check_word("JavaScript is a programming language"));

// Write a function that splits a sentence into an array of words using split(). Then, use join() to convert the array back into a sentence, separating the words with hyphens (-).
let split_sentence = (sentence) => {
    return sentence.split(" ").join("-");
}
console.log(split_sentence("JavaScript is a programming language"));

// Create a function that takes a string and extracts a portion using slice(). The function should take a start and an end index as arguments and return the sliced part.
let slice_string = (string, start, end) => {
    return string.slice(start, end);
}
console.log(slice_string("JavaScript is a programming language", 0, 10));

// Given an object with properties name, email, and age, use destructuring to extract the values into variables and log them to the console.
let obj = {
    name: "Tushar",
    email: "tushar.cb@gmail.com",
    age: 20
}
console.log(obj);
let {name, email, age} = obj;
console.log(name, email, age);

