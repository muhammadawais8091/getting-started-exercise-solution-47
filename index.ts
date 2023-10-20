enum Transportations {
    Motorcycle= 'MOTOTRCYCLE',
    Car = 'CAR',
    Bicycle = 'BICYCLE'
}

//Problem-2
const personName = 'Eric'; 
console.log(`Hello ${personName}, would you like to learn some Python today?`);

//Problem-3
const personNameConversion = 'Joe Zeek'; 

//Person Name in Lowercase
personNameConversion.toLowerCase()

//Person Name in UpperCase
console.log(personNameConversion.toUpperCase());

//Person Name in TilteCase
console.log(personNameConversion[0].toUpperCase() + personNameConversion.slice(1).toLowerCase())

//Problem-4
console.log(`Mahatma Gandhi once said, “Be the change that you wish to see in the world.”`)

//Problem 5
const  famous_person = 'Albert Einstein'
const famous_person_message = `${famous_person} once said, “Imagination is more important than knowledge.”`;

console.log(famous_person_message);

//Problem 6
const personNameWithWhitespace = "\t  \nJohn Doe   \t\n";

console.log("Name with whitespace:");
console.log(personNameWithWhitespace);

const strippedName = personNameWithWhitespace.trim();

console.log("\nName after stripping whitespace:");
console.log(strippedName)

//Problem 7 & 8

//1-addition
console.log('5 + 3', 5 + 3);
//2-subtraction
console.log('16 - 8', 16 - 8);
//3-multiplication
console.log('2 * 4', 2 * 4);
//3-division
console.log('16 / 2', 16 / 2);

//Problem 9
const favorite_number:number = 49;
const  favorite_number_message = `My favorite number is ${favorite_number}`;
console.log(favorite_number_message)

// Problem 11
const myFriends_names: string[] = ["Usama", "Uzair", "Bilal", "Hassan", "Zahid"]
for (let friend of myFriends_names) {
   console.log(`${friend}`);
}

// Problem 12
for (let friend of myFriends_names) {
    console.log(`Dear ${friend}, I hope you are doing well.`);
}

//Problem 13
const favorite_transportations = ['MOTOTRCYCLE', 'CAR', 'BICYCLE' ];

for (let favorite_transportation of favorite_transportations) {
    if(favorite_transportation === Transportations.Motorcycle){
        console.log('I would like to own a motorcycle.')
    }
    else if(favorite_transportation === Transportations.Car){
      console.log('Driving a car is so convenient.');
    }else{
       console.log('Riding a bicycle gives me a sense of freedom.')
    }
}

//Problem 14
const invited_realtives = ['Jabbar', 'Daniyal', 'Meesam' ]
for (let relative of invited_realtives) {
  console.log(`Dear ${relative}, I warmly invite you to join me for a delightful dinner and cherished moments together.`);  
}

//Problem 15-1
const unavailable_person =  invited_realtives[0]

for (let index = 0; index < invited_realtives.length; index++) {
   if(invited_realtives[index] !== unavailable_person){
    console.log(`Dear ${invited_realtives[index]}, I warmly invite you to join me for a delightful dinner and cherished moments together.`);  
   }

   if(index === invited_realtives.length - 1){
     console.log(`The person who is not coming to make the dinner ${unavailable_person}`)
   }
}

// ---Modeifying List
for (let index = 0; index < invited_realtives.length; index++) {
  if(invited_realtives[index] ===  unavailable_person){
    invited_realtives[index] = 'Mohib';
  }
}

//Print a second set of invitation message
for (let relative of invited_realtives) {
  console.log(`Dear ${relative}, I warmly invite you to join me for a delightful dinner and cherished moments together.`);  
}

//Problem-16
let more_guest:string[] = [...invited_realtives];

//Add one new guest to the beginning of your array.
more_guest.unshift("saleem");

//Add one new guest to the middle of your array
const middleIndex = Math.floor(more_guest.length / 2);
more_guest.splice(middleIndex, 0, "Waseem");

//Add one new guest to the enf of your array
more_guest.push("Ammar")

console.log("name of List", more_guest);

const shrinkingGuestList:string[] = [...more_guest];

// Problem-17
console.log('I can invite only two people for dinner.');

const allShrinkingGuests = shrinkingGuestList.length - 2

for (let index = 0; index < allShrinkingGuests; index++) {
   const shrinkingGuest =  shrinkingGuestList.pop()
   console.log(`I’m sorry ${shrinkingGuest}, i can’t invite you on dinner.`);   
}

for (let index = 0; index < shrinkingGuestList.length; index++) {
  console.log(`Hey ${shrinkingGuestList[index]}, Your’re still invited 😊 for the dinner!.`);   
}

for (let index = 0; index < shrinkingGuestList.length; index++) {
  shrinkingGuestList.pop()
}

for (let index = 0; index < shrinkingGuestList.length; index++) {
  console.log(`I have empty list!`);   
}

//Problem 18
let favourite_Locations = [
  "Lahore",
  "Karachi",
  "Multan",
  "Islamabad",
  "Hunza",
];

//Print your array in its original order.
for (let index = 0; index < favourite_Locations.length; index++) {
  console.log(`Favourite Locations ${favourite_Locations[index]}`);   
}

//  Print your array in alphabetical order without modifying the actual list.
const favourite_Locations_inorder = [...favourite_Locations].sort()

for (let index = 0; index < favourite_Locations_inorder.length; index++) {
  console.log(`Favourite Locations alphabetical order ${favourite_Locations_inorder[index]}`);   
}

//Show that your array is still in its original order by printing it.
for (let index = 0; index < favourite_Locations.length; index++) {
  console.log(`Favourite Locations ${favourite_Locations[index]}`);   
}

//Print your array in reverse alphabetical order without changing the order of the original list.
const favourite_Locations_inreverseorder = [...favourite_Locations].reverse()

for (let index = 0; index < favourite_Locations_inreverseorder.length; index++) {
  console.log(`Favourite Locations in reverse alphabetical order ${favourite_Locations_inreverseorder[index]}`);   
}

//Show that your array is still in its original order by printing it again.
for (let index = 0; index < favourite_Locations.length; index++) {
  console.log(`Favourite Locations ${favourite_Locations[index]}`);   
}

//Reverse the order of your list. Print the array to show that its order has changed.
favourite_Locations = favourite_Locations.reverse()

for (let index = 0; index < favourite_Locations.length; index++) {
  console.log(`Favourite Locations ${favourite_Locations[index]}`);   
}

//Reverse the order of your list again. Print the list to show it’s back to its original order.
favourite_Locations = favourite_Locations.reverse()

for (let index = 0; index < favourite_Locations.length; index++) {
  console.log(`Favourite Locations ${favourite_Locations[index]}`);   
}

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
favourite_Locations = favourite_Locations.sort()

for (let index = 0; index < favourite_Locations.length; index++) {
  console.log(`Favourite Locations ${favourite_Locations[index]}`);   
}

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
favourite_Locations = favourite_Locations.reverse()

for (let index = 0; index < favourite_Locations.length; index++) {
  console.log(`Favourite Locations ${favourite_Locations[index]}`);   
}

//Problem 19
shrinkingGuestList.push("Saleem Razzaq", "Taha Khan", "Haider Ali")

console.log(`I am inviting ${shrinkingGuestList.length} for the dinner.`);

//Problem 20
const famous_Mountains_List_Pakistan = [
  "K2",
  "Nanga Parbat",
  "Gasherbrum I",
  "Broad Peak",
  "Rakaposhi",
  "Tirich Mir",
  "Spantik Peak",
  "Masherbrum",
  "Chogolisa",
  "Trango Towers"
];

console.log("List of Famous Mountains in Pakistan:");
for (const mountain of famous_Mountains_List_Pakistan) {
  console.log(mountain);
}

//Problem 21

interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

const personsList: Person[] = [
  {
    firstName: 'Ali',
    lastName: 'Khan',
    age: 21
  },
]

for (const person of personsList) {
  const {firstName, lastName, age} = person
  console.log("First Name:", firstName);
  console.log("Last Name:", lastName);
  console.log("Age:", age);
  console.log("\n");
}

//Problem 22
const specialFruits = ['apple', 'banana', 'cherry'];
const fruitIndex = specialFruits[3];
console.log(specialFruits);
const accessibleFruitIndex = specialFruits[1];
console.log(accessibleFruitIndex);

//Problem 23
const friendsAge = 26;
console.log("Is friendsAge == 26 ? I predict True.")
console.log(friendsAge === 26)
console.log("\n");

const month = 'August';
console.log("Is month == 'August' ? I predict True.")
console.log(friendsAge === 26)
console.log("\n");

const favoriteFood = 'Biryani';
console.log("Is favoriteFood == 'Biryani' ? I predict True.")
console.log(favoriteFood === 'Biryani')
console.log("\n");

const XbelongsTo = 'Elon Musk';
console.log("Is XbelongsTo === 'Elon Musk' ? I predict True.")
console.log(XbelongsTo === 'Elon Musk')
console.log("\n");

const googleCEO = 'Sundar Pichai';
console.log("Is Google CEO === 'Sundar Pichai' ? I predict True.")
console.log(googleCEO === 'Sundar Pichai')
console.log("\n");

const  oddNumber:number = 5;
console.log("oddNumber === 6 ? I predict  false.");
console.log(oddNumber === 6 )
console.log("\n");

const intArray:number[] = [3, 2];
console.log("Is intArray length === 0 ? I predict false.")
console.log(intArray.length === 0)
console.log("\n");

const tsFileExtension:string = 'js';
console.log("Is tsFileExtension === ts ? I predict false.")
console.log(tsFileExtension === 'ts')
console.log("\n");  

const capitalofPakistan:string = 'Islamabd';
console.log("Is capitalofPakistan === Karachi ? I predict false.")
console.log(capitalofPakistan === 'Karachi')
console.log("\n");

const capitalofPunjab:string = 'Lahore';
console.log("Is capitalofPunjab === Multan ? I predict false.")
console.log(capitalofPakistan === 'Multan')
console.log("\n");

//Problem 24

// equality and inequality
const testName1:string = 'John';
const testName2:string = 'Jane';

console.log(testName1 === testName2);

// lower case
const mixedCase = 'HeLLo';
console.log(mixedCase.toLowerCase() === 'hello'); 
console.log(mixedCase.toLowerCase() !== 'hello'); 

//numerical tests:
const num1:number = 5;
const num2:number = 10;

console.log(num1 > num2);  
console.log(num1 < num2); 
console.log(num1 >= num2);  
console.log(num1 <= num2);  
console.log(num1 === num2);  
console.log(num1 !== num2);  

//and" and "or" test:
const isRainy = true;
const hasUmbrella = false;

console.log(isRainy && hasUmbrella);  
console.log(isRainy || hasUmbrella);


//check item in array test
const testNumbers = [1, 2, 3, 4, 5];

console.log(!(testNumbers.indexOf(3) === -1));  
console.log(!(testNumbers.indexOf(6) === -1));

//check item nor in array test
const testFruits = ['apple', 'banana', 'cherry'];

console.log(testFruits.indexOf('orange') === -1); 
console.log(testFruits.indexOf('banana') === -1); 

//Problem 25
const alien_color_v1:string ='green';

if(alien_color_v1 === 'green'){
  console.log("Player just earned 5 points");
}

const alien_color_v2:string ='red';

if(alien_color_v2 === 'green'){
  console.log("Player just earned 5 points");
}

//Problem 26
const alien_color_25_v1:string = 'yellow';
if(alien_color_25_v1 === 'yellow'){
  console.log('player just earned 5 points for shooting the alien.');
}else{
  console.log('player just earned 10 points');
}

const alien_color_25_v2:string = 'red';
if(alien_color_25_v1 === 'yellow'){
  console.log('player just earned 5 points for shooting the alien.');
}else{
  console.log('player just earned 10 points');
}

//Problem 27
const alien_color_27:string = 'yellow';

if(alien_color_27 === 'green'){
  console.log('Player earned 5 points.');
}else if(alien_color_27 === ' yellow'){
  console.log('Player earned 10 points.');
}else{
  console.log('Player earned 15 points.');
}

//Problem 28
const stagesOfLife = 25;

if (stagesOfLife < 2){
  console.log("The person is a baby.")
}else if (stagesOfLife < 4){
  console.log("The person is a toddler.")
}else if (stagesOfLife < 13){
   console.log("The person is a kid.")
}else if (stagesOfLife < 20){
  console.log("The person is a teenager.")
}else if (stagesOfLife < 65){
  console.log("The person is an adult.")
}else{
  console.log("The person is an elder.")
}

//Problem 29;
const favorite_fruits = ['Apple', 'Peach', 'Mangoe', 'Banana'];
const favorite_fruits_message = 'I really like';

for (let index = 0; index < favorite_fruits.length; index++) {
  if(favorite_fruits[index] === 'Apple'){
    console.log(`${favorite_fruits_message} ${favorite_fruits[index]}!`);
  }

  if(favorite_fruits[index] === 'Carrot'){
    console.log(`${favorite_fruits_message} ${favorite_fruits[index]}!`);
  }

  if(favorite_fruits[index] === 'Peach'){
    console.log(`${favorite_fruits_message} ${favorite_fruits[index]}!`);
  }

  if(favorite_fruits[index] === 'Mangoe'){
    console.log(`${favorite_fruits_message} ${favorite_fruits[index]}!`);
  }

  if(favorite_fruits[index] === 'NonAple'){
    console.log(`${favorite_fruits_message} ${favorite_fruits[index]}!`);
  }
}

//Problem 30
console.log("\n");
let usersList = ['salman', 'qasim', 'jabbar', 'bilal', 'admin']
for (let index = 0; index < usersList.length; index++) {
  if(usersList[index] === 'admin'){
    console.log('Hello admin, would you like to see a status report?');
  }else{
    console.log(`Hello ${usersList[index]}, thank you for logging in again.`);
  }
}

//problem 31
if(usersList.length < 1){
  console.log('We need to find some users!');
}else{
  usersList = []  
}

//Problem 32
console.log("\n");
let current_users = ['salman', 'qasim', 'jabbar', 'bilal', 'admin'];
let new_users = ['salman', 'qasim', 'abid', 'osama', 'basit'];
current_users = current_users.map(username => username.toLowerCase());

for (const user in new_users) {
  const new_user = new_users[user].toLowerCase();

   if(current_users.indexOf(new_user) === -1){
    console.log(`This ${new_user} username is available.`);
   }else{
    console.log('Person will need to enter a new username');
   }
}

//problem 33
console.log("\n");
const ordinal_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number of ordinal_numbers) {
    if (number === 1) {
        console.log(`${number}st`);
    } else if (number === 2) {
        console.log(`${number}nd`);
    } else if (number === 3) {
        console.log(`${number}rd`);
    } else {
        console.log(`${number}th`);
    }
}

//problem 34
console.log("\n");
const favoritePizzas = ['Pepperoni', 'Margherita', 'BBQ Chicken'];
console.log('My favorite pizzas:');
for (const pizza of favoritePizzas) {
    console.log(pizza);
}

console.log('\nStatements about my favorite pizzas:');
for (const pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Ending statement
console.log('\nI really love pizza!');


//problem 35
console.log("\n");
const animals = ['Dog', 'Cat', 'Rabbit'];
console.log('List of Animals:');
for (const animal of animals) {
    console.log(animal);
}

for (const animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

console.log('Any of these animals would make a great pet!');

//problem 36
console.log("\n");
function make_shirt(size:string, message:string) {
  console.log(`You have ordered a ${size} shirt with the message: "${message}".`);
}

make_shirt('Large', 'Hello, World!');

//problem 37
console.log("\n");
function make_shirt_size(size:string = 'Large', message:string = 'I love TypeScript') {
  console.log(`You have ordered a ${size} shirt with the message: "${message}".`);
}

make_shirt_size(); 
make_shirt_size('Medium'); 
make_shirt_size('Small', 'JavaScript is fun!'); 

//problem 38
console.log("\n");
function describe_city(city:string, country:string = 'Unknown') {
  console.log(`${city} is in ${country}.`);
}

describe_city('Karachi', 'Pakistan'); 
describe_city('Paris', 'France');  
describe_city('Sydney'); 

//problem 39
console.log("\n");
function city_country(city:string, country:string) {
  return `${city}, ${country}`;
}

const location1 = city_country('Lahore', 'Pakistan');
const location2 = city_country('New York', 'USA');
const location3 = city_country('Tokyo', 'Japan');

console.log(location1);
console.log(location2);
console.log(location3);

//problem 40
console.log("\n");
interface Album {
  artist: string;
  title: string;
  tracks?: number;
}

function make_album(artist: string, title: string, tracks?: number): Album {
  const album: Album = {
      artist: artist,
      title: title,
  };

  if (tracks !== undefined) {
      album.tracks = tracks;
  }

  return album;
}

 
const album1 = make_album('Ed Sheeran', 'Divide', 12);
const album2 = make_album('Taylor Swift', 'Lover');
const album3 = make_album('Adele', '25', 11);

console.log(album1);
console.log(album2);
console.log(album3);

//problem 41
console.log("\n");
function showMagicians(magicians:string[]) {
  for (const magician of magicians) {
      console.log(magician);
  }
}

const magicians = ['David Copperfield', 'Houdini', 'Penn Jillette', 'Teller'];
showMagicians(magicians);


//problem 42
console.log("\n");
let modifyingMagicians:string[] = []
function makeGreatMagicians(magicians:string[]) {
  for (let index = 0; index < magicians.length; index++) {
    modifyingMagicians[index] = `Great  ${magicians[index]}`
  }
}

makeGreatMagicians(magicians);

//probelm 43
console.log("\n");
let unchangedMagicians =[...magicians];
showMagicians(unchangedMagicians);
makeGreatMagicians(modifyingMagicians)


//probelm 44
console.log("\n");
function makeSandwich(...sandwitchItems: string[]) {
  console.log("You ordered a sandwich with the following items:");
  for (const item of sandwitchItems) {
      console.log(`- ${item}`);
  }
  console.log("Enjoy your sandwich!\n");
}

makeSandwich('Ham', 'Cheese', 'Lettuce', 'Tomato');
makeSandwich('Turkey', 'Swiss', 'Mayo');
makeSandwich('Peanut Butter', 'Jelly');


interface MakeCarInterface  {
  manufacturer: string,
  modelName:string,
  [key: string]: string;
}

function makeCar(car: MakeCarInterface) {
  console.log(`Car:`, car);
}

makeCar({manufacturer:'Suzuki', modelName: '2012', cololr: 'green'})