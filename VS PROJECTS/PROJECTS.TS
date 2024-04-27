// TASK 1 + 2
let personName = "SAM";
console.log(`Hello ${personName}, would you like to learn some Python today?`);

//TASK 3
let personName2 = "SAM";
console.log(personName2.toLowerCase());
console.log(personName2.toUpperCase());
console.log(personName2.charAt(0).toUpperCase() + personName2.slice(1).toLowerCase());

//TASK 4  Famous Quote
let quote: string = "A person who never made a mistake never tried anything new.";
let author: string = "Albert Einstein";
console.log(`${author} once said, "${quote}"`);

//TASK 5  Famous Quote 2
let famous_person: string = "Isaac Newton";
let message: string = `${famous_person} once said, "${quote}"`;
console.log(message);

//TASK 6  Stripping Names
let personName3: string = "\t   Steve Jobs \n";
console.log(personName3);
console.log(personName3.trim());

//TASK 7 + 8  Number Eight
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2); 

//TASK 9 Favorite Number
let favoriteNumber: number = 7;
console.log(`My favorite number is ${favoriteNumber}.`);

//TASK 10
// ALREADY ADDED COMMENTS ON TOP OF EACH PROGRAM

//TASK 11 NAMES
let names: string[] = ["ALPHA", "BRAVO", "Charlie", "DELTA"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
  }

//TASK 12 Greetings
for (let i = 0; i < names.length; i++) {
    console.log(`Hello ${names[i]}, how are you doing today?`);
  }
  
  //TASK 13 Your Own Array
let transportation: string[] = ["CAR", "MOTORCYCLE", "PRIVATE JET"];
for (let i = 0; i < transportation.length; i++) {
  console.log(`I would like to own a ${transportation[i]}.`);
}

//TASK 14 Guest List + TASK 15 Changing Guest List + TASK 16 More Guests + TASK 17 Shrinking Guest List
let guestList: string[] = ["SAM", "LUCY", "MIKE"];
for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]}, you are invited to dinner!`);
}
let unableToAttend: string = "MIKE";
console.log(`${unableToAttend} can't make it to dinner.`);
guestList.splice(guestList.indexOf(unableToAttend), 1);
guestList.push("ALEX");
for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]}, you are invited to dinner!`);
}
console.log("We found a bigger dinner table!");
guestList.unshift("TOMMY");
guestList.splice(Math.floor(guestList.length / 2), 0, "ELIZABETH");
guestList.push("Grace");
for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]}, you are invited to dinner!`);
}
console.log("Oops, the new table won't arrive in time.");
console.log("We can invite only two people for dinner.");
while (guestList.length > 2) {
  let removedGuest: string = guestList.pop()!;
  console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]}, you are still invited to dinner!`);
}
guestList = [];
console.log(guestList);

//TASK 19 Dinner Guests
console.log(`Number of people invited to dinner: ${guestList.length + 1}`);

//TASK 18 Seeing the World
let placesToVisit: string[] = ["SWITZERLAND", "ISTANBUL", "MOSCOW", "LONDON", "Sydney"];
console.log("Original order:", placesToVisit);
console.log("Alphabetical order:", placesToVisit.slice().sort());
console.log("Original order again:", placesToVisit);
console.log("Reverse alphabetical order:", placesToVisit.slice().sort().reverse());
console.log("Original order again:", placesToVisit);
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
placesToVisit.reverse();
console.log("Original order again:", placesToVisit);
placesToVisit.sort();
console.log("Sorted alphabetical order:", placesToVisit);
placesToVisit.sort().reverse();
console.log("Sorted reverse alphabetical order:", placesToVisit);

//TASK 20 Array of Mountains
let mountains: string[] = ["Everest", "K2", "Kilimanjaro", "Denali"];
console.log("Mountains:", mountains);

//TASK 21  TypeScript Objects
let vehicle: { make: string, model: string, year: number } = {
  make: "Toyota",
  model: "Camry",
  year: 2022
};
console.log("Car:", vehicle);

//TASK 22 // Intentional Error
let fruits: string[] = ["APPLE", "BANANA", "MANGO"];
console.log(fruits[3]); // This intentionally produces an array index error, but it's corrected before closing the program.

//TASK 23 + TASK 24 CONDITIONAL TESTS
// Conditional Tests
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota');

console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota');

console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru');

console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');

console.log("Is car === 'Toyota'? I predict False.");
console.log(car === 'Toyota');

console.log("Is car !== 'Toyota'? I predict True.");
console.log(car !== 'Toyota');

console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru');

// Tests using the lower case function
console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru'); // Output: true

// Numerical tests
let num = 10;

console.log("Is num == 10? I predict True.");
console.log(num == 10); // Output: true

console.log("Is num != 5? I predict True.");
console.log(num != 5); // Output: true

console.log("Is num > 5? I predict True.");
console.log(num > 5); // Output: true

console.log("Is num < 15? I predict True.");
console.log(num < 15); // Output: true

console.log("Is num >= 10? I predict True.");
console.log(num >= 10); // Output: true

console.log("Is num <= 10? I predict True.");
console.log(num <= 10); // Output: true

// Tests using "and" and "or" operators
console.log("Is num > 5 and num < 15? I predict True.");
console.log(num > 5 && num < 15); // Output: true

console.log("Is number > 15 or number < 5? I predict False.");
console.log(num > 15 || num < 5); // Output: false

// Test whether an item is in an array
console.log("Is 'banana' in fruits? I predict True.");
console.log(fruits.includes('banana')); // Output: true

// Test whether an item is not in an array
console.log("Is 'grape' not in fruits? I predict True.");
console.log(!fruits.includes('grape')); // Output: true

//task 25
let alien_color = 'green';

// Passing the if test
if (alien_color === 'green') {
    console.log("The player just earned 5 points.");
}

// Failing the if test (no output)
if (alien_color === 'red') {
    console.log("The player just earned 10 points.");
}

//TASK 26
let alien_color2 = 'green';

// Runs the if block
if (alien_color2 === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
} else { // Runs the else block
    console.log("The player just earned 10 points.");
}

// Runs the else block
if (alien_color2 !== 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
} else { // Runs the if block
    console.log("The player just earned 10 points.");
}

//TASK 27
let alien_color3 = 'red';

if (alien_color3 === 'green') {
    console.log("The player earned 5 points.");
} else if (alien_color3 === 'yellow') {
    console.log("The player earned 10 points.");
} else if (alien_color3 === 'red') {
    console.log("The player earned 15 points.");
}

let alien_color4 = 'green';

if (alien_color4 === 'green') {
    console.log("The player earned 5 points.");
} else if (alien_color4 === 'yellow') {
    console.log("The player earned 10 points.");
} else if (alien_color4 === 'red') {
    console.log("The player earned 15 points.");
}

let alien_color5 = 'yellow';

if (alien_color5 === 'green') {
    console.log("The player earned 5 points.");
} else if (alien_color5 === 'yellow') {
    console.log("The player earned 10 points.");
} else if (alien_color5 === 'red') {
    console.log("The player earned 15 points.");
}

//TASK 28 AGE CHECK
let age = 20; // Set the age value here

if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}
 //TASK 29 FAVOURITE FRUIT
 let favorite_fruits = ["BANANA", "ORANGE", "MANGO"]; // Array of favorite fruits

 // Check if "banana" is in the array
 if (favorite_fruits.includes("BANANA")) {
     console.log("You really like bananas!");
 }
 
 // Check if "apple" is in the array
 if (favorite_fruits.includes("APPLE")) {
     console.log("You really like apples!");
 }
 
 // Check if "orange" is in the array
 if (favorite_fruits.includes("ORANGE")) {
     console.log("You really like oranges!");
 }
 
 // Check if "mango" is in the array
 if (favorite_fruits.includes("MANGO")) {
     console.log("You really like mangoes!");
 }
 
 // Check if "kiwi" is in the array
 if (favorite_fruits.includes("WATERMELON")) {
     console.log("You really like WATERMELON!");
 }
 
//TASK 30 USERNAMES
let usernames = ["admin", "micheal", "max", "sam", "sturges"]; // Array of usernames
//TASK 31 CHECK FOR NO USERS
if (usernames.length === 0) {
  console.log("We need to find some users!");
} else {
  for (let username of usernames) {
      if (username.toLowerCase() === "admin") {
          console.log("Hello admin, would you like to see a status report?");
      } else {
          console.log(`Hello ${username}, thank you for logging in again.`);
      }
  }
}

//TASK 32 UNIQUE USERNAMES 
let current_users = ["Alpha", "Bravo", "Charlie", "Delta", "Smith"]; // List of current usernames
let new_users = ["Eric", "Sam", "Max", "Smith", "Delta"]; // List of new usernames

for (let new_user of new_users) {
    let usernameExists = current_users.some(user => user.toLowerCase() === new_user.toLowerCase());

    if (usernameExists) {
        console.log(`Sorry, the username '${new_user}' is already taken. Please choose a different username.`);
    } else {
        console.log(`The username '${new_user}' is available.`);
    }
}

//TASK 33 ORDINAL NUMBERS
let numbersArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbersArray) {
    let ordinalSuffix: string;
    if (number === 1) {
        ordinalSuffix = "st";
    } else if (number === 2) {
        ordinalSuffix = "nd";
    } else if (number === 3) {
        ordinalSuffix = "rd";
    } else {
        ordinalSuffix = "th";
    }
    console.log(`${number}${ordinalSuffix}`);
}

//TASK 34 PIZZA
let favoritePizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];

console.log("Pizza names:");
for (let pizza of favoritePizzas) {
    console.log(pizza);
}

console.log("\nSentences about favorite pizzas:");
for (let pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}

console.log("\n Personally i love BBQ Chicken pizza beacuse of its lovely smell and taste but along with that i love other type of pizzas tooo because I really love pizza!");

//TASK 35
let animals: string[] = ["Dog", "Cat", "Hamster"];

// Print animal names using a for loop
console.log("Animal names:");
for (let animal of animals) {
    console.log(animal);
}

// Print statements about each animal
console.log("\nStatements about animals:");
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} can be used to for entertainment purposes.`);
}

// Additional sentence about what these animals have in common
console.log("\nAny of these animals would make a great pet! beacuse all of them are not harmful to humans and like to live in a peaceful surrounding ");

//TASK 36 SIZE FUNCTION
function make_shirt(size: string, message: string): void {
    console.log(`The shirt size is ${size} and the message on it is: "${message}".`);
}
make_shirt("Large", "Hello, world!");

//TASK 37 MODIFIED SHIRT FUNCTION
function make_shirt1(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`The shirt size is ${size} and the message on it is: "${message}".`);
}

make_shirt1();

make_shirt1("Medium");

make_shirt1("Small", "Hello, world!");

//TASK 38 CITY FUNCTION
function describe_city(city: string, country: string = "United States"): void {
    console.log(`${city} is in ${country}.`);
}

describe_city("Karachi", "Pakistan");
describe_city("New York"); // Default country is used
describe_city("Paris", "France");

//TASK 39 CITY FUNTION 2
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("London", "United Kingdom"));

//TASK 40 ALBUMS
// Define the album type
type Album = {
    artist: string;
    title: string;
    tracks?: number; // Optional tracks property
};

// Define the make_album function
function make_album(artist: string, title: string, tracks?: number) {
    const album: Album = {
        artist: artist,
        title: title,
    };

    if (tracks) {
        album.tracks = tracks;
    }

    return album;
}

const album1 = make_album("Artist 1", "Album 1");
const album2 = make_album("Artist 2", "Album 2", 12); // Including the number of tracks
const album3 = make_album("Artist 3", "Album 3");

console.log(album1);
console.log(album2);
console.log(album3);



//TASK 41 MAGICIANS + TASK 42 MODIFIED MAGICIANS
let magicians = ["Magician 1", "Magician 2", "Magician 3", "Magician 4"];

function show_magicians(magiciansArray: string[]) {
    for (let magician of magiciansArray) {
        console.log(magician);
    }
}

// Define the make_great function to modify magician names
function make_great(magiciansArray: string[]) {
    for (let i = 0; i < magiciansArray.length; i++) {
        magiciansArray[i] = "the Great " + magiciansArray[i];
    }
}

make_great(magicians);

show_magicians(magicians);

//TASK 43 SEPERATE ARRAYS FOR MAGICIANS
const magicians2 = ["Magician 1", "Magician 2", "Magician 3", "Magician 4"];

function show_magicians2(magicians2Array: string[]) {
    for (let magician of magicians2Array) {
        console.log(magician);
    }
}

function make_great1(magicians2Array: string[]) {
    const newMagiciansArray: string[] = []; // Create a new array to store modified magician names

    for (let i = 0; i < magicians2Array.length; i++) {
        newMagiciansArray.push("the Great " + magicians2Array[i]); // Add "the Great" to each magician's name and push to the new array
    }

    return newMagiciansArray; // Return the new array with modified names
}

const greatMagicians = make_great1([...magicians]); // Using spread syntax to create a copy of the array

console.log("Original Magicians:");
show_magicians2(magicians);

console.log("\nModified Magicians with 'the Great':");
show_magicians2(greatMagicians);

//TASK 44 SANDWHICH
function order_sandwich(...items: string[]) {
    console.log("Order Summary:");
    console.log("Bread: Wheat");

    if (items.length > 0) {
        console.log("Ingredients:");
        for (let item of items) {
            console.log(`- ${item}`);
        }
    } else {
        console.log("No additional ingredients.");
    }

    console.log("Enjoy your sandwich!");
    console.log("----------------------");
}
order_sandwich("Chicken", "Lettuce", "Tomato", "Mayonnaise");
order_sandwich("Ham", "Cheese");
order_sandwich();

//TASK 45 CAR
function store_car_info(manufacturer: string, model: string, ...extras: { [key: string]: any }[]) {
    const carInfo = {
        manufacturer: manufacturer,
        model: model,
        ...Object.assign({}, ...extras) // Merge all keyword arguments into a single object
    };

    return carInfo;
}
const car3 = store_car_info("Toyota", "Camry", { color: "Blue" }, { features: ["Navigation", "Sunroof"] });

console.log(car);






























































