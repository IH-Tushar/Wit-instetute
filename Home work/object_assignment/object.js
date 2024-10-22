// Write a function that loops through an array of numbers and returns the sum of the numbers.

function sum_of_number(arr) {
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}    

let arr = [2,2,3,4,10,30,50]

console.log(sum_of_number(arr));

// Create an object with properties name and age. Write a function to add a new property city to the object.

const obj = {
    name:'IH-TUSHAR',
    age:25
}

function add_new(obj){
   obj.city = 'comilla';
   return obj;
}

const new_obj = add_new(obj);

console.log(new_obj);


// Write a function that takes a number and returns whether it is even or odd.

function number_check(number) {
    if (number%2 == 0) {
        console.log('even');
        
    }
    else console.log('odd');
    ;
}

number_check(2);

// Create an object that represents a car with properties brand and model. Write a function to update the model of the car.

const car = {
    brand: 'ferrari',
    model: '360 spider'
};

function update_car_details(car) {
    car.brand = 'audi';
    return car;
}

const new_car = update_car_details(car);

console.log(new_car);

// Write a function that loops through an object and prints each property and its value.

function name() {
const obj5 = {
    name: 'tushar',
    age: 25,
    city: 'comilla',
    profession: 'Software Engineer'
}

for (const key in obj5) {
    console.log(`${key}: ${obj5[key]}`);
    }
}

name();