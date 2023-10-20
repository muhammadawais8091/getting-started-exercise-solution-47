var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Transportations;
(function (Transportations) {
    Transportations["Motorcycle"] = "MOTOTRCYCLE";
    Transportations["Car"] = "CAR";
    Transportations["Bicycle"] = "BICYCLE";
})(Transportations || (Transportations = {}));
//Problem-2
var personName = 'Eric';
console.log("Hello ".concat(personName, ", would you like to learn some Python today?"));
//Problem-3
var personNameConversion = 'Joe Zeek';
//Person Name in Lowercase
personNameConversion.toLowerCase();
//Person Name in UpperCase
console.log(personNameConversion.toUpperCase());
//Person Name in TilteCase
console.log(personNameConversion[0].toUpperCase() + personNameConversion.slice(1).toLowerCase());
//Problem-4
console.log("Mahatma Gandhi once said, \u201CBe the change that you wish to see in the world.\u201D");
//Problem 5
var famous_person = 'Albert Einstein';
var famous_person_message = "".concat(famous_person, " once said, \u201CImagination is more important than knowledge.\u201D");
console.log(famous_person_message);
//Problem 6
var personNameWithWhitespace = "\t  \nJohn Doe   \t\n";
console.log("Name with whitespace:");
console.log(personNameWithWhitespace);
var strippedName = personNameWithWhitespace.trim();
console.log("\nName after stripping whitespace:");
console.log(strippedName);
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
var favorite_number = 49;
var favorite_number_message = "My favorite number is ".concat(favorite_number);
console.log(favorite_number_message);
// Problem 11
var myFriends_names = ["Usama", "Uzair", "Bilal", "Hassan", "Zahid"];
for (var _i = 0, myFriends_names_1 = myFriends_names; _i < myFriends_names_1.length; _i++) {
    var friend = myFriends_names_1[_i];
    console.log("".concat(friend));
}
// Problem 12
for (var _a = 0, myFriends_names_2 = myFriends_names; _a < myFriends_names_2.length; _a++) {
    var friend = myFriends_names_2[_a];
    console.log("Dear ".concat(friend, ", I hope you are doing well."));
}
//Problem 13
var favorite_transportations = ['MOTOTRCYCLE', 'CAR', 'BICYCLE'];
for (var _b = 0, favorite_transportations_1 = favorite_transportations; _b < favorite_transportations_1.length; _b++) {
    var favorite_transportation = favorite_transportations_1[_b];
    if (favorite_transportation === Transportations.Motorcycle) {
        console.log('I would like to own a motorcycle.');
    }
    else if (favorite_transportation === Transportations.Car) {
        console.log('Driving a car is so convenient.');
    }
    else {
        console.log('Riding a bicycle gives me a sense of freedom.');
    }
}
//Problem 14
var invited_realtives = ['Jabbar', 'Daniyal', 'Meesam'];
for (var _c = 0, invited_realtives_1 = invited_realtives; _c < invited_realtives_1.length; _c++) {
    var relative = invited_realtives_1[_c];
    console.log("Dear ".concat(relative, ", I warmly invite you to join me for a delightful dinner and cherished moments together."));
}
//Problem 15-1
var unavailable_person = invited_realtives[0];
for (var index = 0; index < invited_realtives.length; index++) {
    if (invited_realtives[index] !== unavailable_person) {
        console.log("Dear ".concat(invited_realtives[index], ", I warmly invite you to join me for a delightful dinner and cherished moments together."));
    }
    if (index === invited_realtives.length - 1) {
        console.log("The person who is not coming to make the dinner ".concat(unavailable_person));
    }
}
// ---Modeifying List
for (var index = 0; index < invited_realtives.length; index++) {
    if (invited_realtives[index] === unavailable_person) {
        invited_realtives[index] = 'Mohib';
    }
}
//Print a second set of invitation message
for (var _d = 0, invited_realtives_2 = invited_realtives; _d < invited_realtives_2.length; _d++) {
    var relative = invited_realtives_2[_d];
    console.log("Dear ".concat(relative, ", I warmly invite you to join me for a delightful dinner and cherished moments together."));
}
//Problem-16
var more_guest = __spreadArray([], invited_realtives, true);
//Add one new guest to the beginning of your array.
more_guest.unshift("saleem");
//Add one new guest to the middle of your array
var middleIndex = Math.floor(more_guest.length / 2);
more_guest.splice(middleIndex, 0, "Waseem");
//Add one new guest to the enf of your array
more_guest.push("Ammar");
console.log("name of List", more_guest);
var shrinkingGuestList = __spreadArray([], more_guest, true);
// Problem-17
console.log('I can invite only two people for dinner.');
var allShrinkingGuests = shrinkingGuestList.length - 2;
for (var index = 0; index < allShrinkingGuests; index++) {
    var shrinkingGuest = shrinkingGuestList.pop();
    console.log("I\u2019m sorry ".concat(shrinkingGuest, ", i can\u2019t invite you on dinner."));
}
for (var index = 0; index < shrinkingGuestList.length; index++) {
    console.log("Hey ".concat(shrinkingGuestList[index], ", Your\u2019re still invited \uD83D\uDE0A for the dinner!."));
}
for (var index = 0; index < shrinkingGuestList.length; index++) {
    shrinkingGuestList.pop();
}
for (var index = 0; index < shrinkingGuestList.length; index++) {
    console.log("I have empty list!");
}
//Problem 18
var favourite_Locations = [
    "Lahore",
    "Karachi",
    "Multan",
    "Islamabad",
    "Hunza",
];
//Print your array in its original order.
for (var index = 0; index < favourite_Locations.length; index++) {
    console.log("Favourite Locations ".concat(favourite_Locations[index]));
}
//  Print your array in alphabetical order without modifying the actual list.
var favourite_Locations_inorder = __spreadArray([], favourite_Locations, true).sort();
for (var index = 0; index < favourite_Locations_inorder.length; index++) {
    console.log("Favourite Locations alphabetical order ".concat(favourite_Locations_inorder[index]));
}
//Show that your array is still in its original order by printing it.
for (var index = 0; index < favourite_Locations.length; index++) {
    console.log("Favourite Locations ".concat(favourite_Locations[index]));
}
//Print your array in reverse alphabetical order without changing the order of the original list.
var favourite_Locations_inreverseorder = __spreadArray([], favourite_Locations, true).reverse();
for (var index = 0; index < favourite_Locations_inreverseorder.length; index++) {
    console.log("Favourite Locations in reverse alphabetical order ".concat(favourite_Locations_inreverseorder[index]));
}
//Show that your array is still in its original order by printing it again.
for (var index = 0; index < favourite_Locations.length; index++) {
    console.log("Favourite Locations ".concat(favourite_Locations[index]));
}
//Reverse the order of your list. Print the array to show that its order has changed.
favourite_Locations = favourite_Locations.reverse();
for (var index = 0; index < favourite_Locations.length; index++) {
    console.log("Favourite Locations ".concat(favourite_Locations[index]));
}
//Reverse the order of your list again. Print the list to show it’s back to its original order.
favourite_Locations = favourite_Locations.reverse();
for (var index = 0; index < favourite_Locations.length; index++) {
    console.log("Favourite Locations ".concat(favourite_Locations[index]));
}
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
favourite_Locations = favourite_Locations.sort();
for (var index = 0; index < favourite_Locations.length; index++) {
    console.log("Favourite Locations ".concat(favourite_Locations[index]));
}
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
favourite_Locations = favourite_Locations.reverse();
for (var index = 0; index < favourite_Locations.length; index++) {
    console.log("Favourite Locations ".concat(favourite_Locations[index]));
}
//Problem 19
shrinkingGuestList.push("Saleem Razzaq", "Taha Khan", "Haider Ali");
console.log("I am inviting ".concat(shrinkingGuestList.length, " for the dinner."));
//Problem 20
var famous_Mountains_List_Pakistan = [
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
for (var _e = 0, famous_Mountains_List_Pakistan_1 = famous_Mountains_List_Pakistan; _e < famous_Mountains_List_Pakistan_1.length; _e++) {
    var mountain = famous_Mountains_List_Pakistan_1[_e];
    console.log(mountain);
}
var personsList = [
    {
        firstName: 'Ali',
        lastName: 'Khan',
        age: 21
    },
];
for (var _f = 0, personsList_1 = personsList; _f < personsList_1.length; _f++) {
    var person = personsList_1[_f];
    var firstName = person.firstName, lastName = person.lastName, age = person.age;
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Age:", age);
    console.log("\n");
}
//Problem 22
var specialFruits = ['apple', 'banana', 'cherry'];
var fruitIndex = specialFruits[3];
console.log(specialFruits);
var accessibleFruitIndex = specialFruits[1];
console.log(accessibleFruitIndex);
//Problem 23
var friendsAge = 26;
console.log("Is friendsAge == 26 ? I predict True.");
console.log(friendsAge === 26);
console.log("\n");
var month = 'August';
console.log("Is month == 'August' ? I predict True.");
console.log(friendsAge === 26);
console.log("\n");
var favoriteFood = 'Biryani';
console.log("Is favoriteFood == 'Biryani' ? I predict True.");
console.log(favoriteFood === 'Biryani');
console.log("\n");
var XbelongsTo = 'Elon Musk';
console.log("Is XbelongsTo === 'Elon Musk' ? I predict True.");
console.log(XbelongsTo === 'Elon Musk');
console.log("\n");
var googleCEO = 'Sundar Pichai';
console.log("Is Google CEO === 'Sundar Pichai' ? I predict True.");
console.log(googleCEO === 'Sundar Pichai');
console.log("\n");
var oddNumber = 5;
console.log("oddNumber === 6 ? I predict  false.");
console.log(oddNumber === 6);
console.log("\n");
var intArray = [3, 2];
console.log("Is intArray length === 0 ? I predict false.");
console.log(intArray.length === 0);
console.log("\n");
var tsFileExtension = 'js';
console.log("Is tsFileExtension === ts ? I predict false.");
console.log(tsFileExtension === 'ts');
console.log("\n");
var capitalofPakistan = 'Islamabd';
console.log("Is capitalofPakistan === Karachi ? I predict false.");
console.log(capitalofPakistan === 'Karachi');
console.log("\n");
var capitalofPunjab = 'Lahore';
console.log("Is capitalofPunjab === Multan ? I predict false.");
console.log(capitalofPakistan === 'Multan');
console.log("\n");
//Problem 24
// equality and inequality
var testName1 = 'John';
var testName2 = 'Jane';
console.log(testName1 === testName2);
// lower case
var mixedCase = 'HeLLo';
console.log(mixedCase.toLowerCase() === 'hello');
console.log(mixedCase.toLowerCase() !== 'hello');
//numerical tests:
var num1 = 5;
var num2 = 10;
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
console.log(num1 === num2);
console.log(num1 !== num2);
//and" and "or" test:
var isRainy = true;
var hasUmbrella = false;
console.log(isRainy && hasUmbrella);
console.log(isRainy || hasUmbrella);
//check item in array test
var testNumbers = [1, 2, 3, 4, 5];
console.log(!(testNumbers.indexOf(3) === -1));
console.log(!(testNumbers.indexOf(6) === -1));
//check item nor in array test
var testFruits = ['apple', 'banana', 'cherry'];
console.log(testFruits.indexOf('orange') === -1);
console.log(testFruits.indexOf('banana') === -1);
//Problem 25
var alien_color_v1 = 'green';
if (alien_color_v1 === 'green') {
    console.log("Player just earned 5 points");
}
var alien_color_v2 = 'red';
if (alien_color_v2 === 'green') {
    console.log("Player just earned 5 points");
}
//Problem 26
var alien_color_25_v1 = 'yellow';
if (alien_color_25_v1 === 'yellow') {
    console.log('player just earned 5 points for shooting the alien.');
}
else {
    console.log('player just earned 10 points');
}
var alien_color_25_v2 = 'red';
if (alien_color_25_v1 === 'yellow') {
    console.log('player just earned 5 points for shooting the alien.');
}
else {
    console.log('player just earned 10 points');
}
//Problem 27
var alien_color_27 = 'yellow';
if (alien_color_27 === 'green') {
    console.log('Player earned 5 points.');
}
else if (alien_color_27 === ' yellow') {
    console.log('Player earned 10 points.');
}
else {
    console.log('Player earned 15 points.');
}
//Problem 28
var stagesOfLife = 25;
if (stagesOfLife < 2) {
    console.log("The person is a baby.");
}
else if (stagesOfLife < 4) {
    console.log("The person is a toddler.");
}
else if (stagesOfLife < 13) {
    console.log("The person is a kid.");
}
else if (stagesOfLife < 20) {
    console.log("The person is a teenager.");
}
else if (stagesOfLife < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
//Problem 29;
var favorite_fruits = ['Apple', 'Peach', 'Mangoe', 'Banana'];
var favorite_fruits_message = 'I really like';
for (var index = 0; index < favorite_fruits.length; index++) {
    if (favorite_fruits[index] === 'Apple') {
        console.log("".concat(favorite_fruits_message, " ").concat(favorite_fruits[index], "!"));
    }
    if (favorite_fruits[index] === 'Carrot') {
        console.log("".concat(favorite_fruits_message, " ").concat(favorite_fruits[index], "!"));
    }
    if (favorite_fruits[index] === 'Peach') {
        console.log("".concat(favorite_fruits_message, " ").concat(favorite_fruits[index], "!"));
    }
    if (favorite_fruits[index] === 'Mangoe') {
        console.log("".concat(favorite_fruits_message, " ").concat(favorite_fruits[index], "!"));
    }
    if (favorite_fruits[index] === 'NonAple') {
        console.log("".concat(favorite_fruits_message, " ").concat(favorite_fruits[index], "!"));
    }
}
//Problem 30
console.log("\n");
var usersList = ['salman', 'qasim', 'jabbar', 'bilal', 'admin'];
for (var index = 0; index < usersList.length; index++) {
    if (usersList[index] === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log("Hello ".concat(usersList[index], ", thank you for logging in again."));
    }
}
//problem 31
if (usersList.length < 1) {
    console.log('We need to find some users!');
}
else {
    usersList = [];
}
//Problem 32
console.log("\n");
var current_users = ['salman', 'qasim', 'jabbar', 'bilal', 'admin'];
var new_users = ['salman', 'qasim', 'abid', 'osama', 'basit'];
current_users = current_users.map(function (username) { return username.toLowerCase(); });
for (var user in new_users) {
    var new_user = new_users[user].toLowerCase();
    if (current_users.indexOf(new_user) === -1) {
        console.log("This ".concat(new_user, " username is available."));
    }
    else {
        console.log('Person will need to enter a new username');
    }
}
//problem 33
console.log("\n");
var ordinal_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _g = 0, ordinal_numbers_1 = ordinal_numbers; _g < ordinal_numbers_1.length; _g++) {
    var number = ordinal_numbers_1[_g];
    if (number === 1) {
        console.log("".concat(number, "st"));
    }
    else if (number === 2) {
        console.log("".concat(number, "nd"));
    }
    else if (number === 3) {
        console.log("".concat(number, "rd"));
    }
    else {
        console.log("".concat(number, "th"));
    }
}
//problem 34
console.log("\n");
var favoritePizzas = ['Pepperoni', 'Margherita', 'BBQ Chicken'];
console.log('My favorite pizzas:');
for (var _h = 0, favoritePizzas_1 = favoritePizzas; _h < favoritePizzas_1.length; _h++) {
    var pizza = favoritePizzas_1[_h];
    console.log(pizza);
}
console.log('\nStatements about my favorite pizzas:');
for (var _j = 0, favoritePizzas_2 = favoritePizzas; _j < favoritePizzas_2.length; _j++) {
    var pizza = favoritePizzas_2[_j];
    console.log("I like ".concat(pizza, " pizza."));
}
// Ending statement
console.log('\nI really love pizza!');
//problem 35
console.log("\n");
var animals = ['Dog', 'Cat', 'Rabbit'];
console.log('List of Animals:');
for (var _k = 0, animals_1 = animals; _k < animals_1.length; _k++) {
    var animal = animals_1[_k];
    console.log(animal);
}
for (var _l = 0, animals_2 = animals; _l < animals_2.length; _l++) {
    var animal = animals_2[_l];
    console.log("A ".concat(animal.toLowerCase(), " would make a great pet."));
}
console.log('Any of these animals would make a great pet!');
//problem 36
console.log("\n");
function make_shirt(size, message) {
    console.log("You have ordered a ".concat(size, " shirt with the message: \"").concat(message, "\"."));
}
make_shirt('Large', 'Hello, World!');
//problem 37
console.log("\n");
function make_shirt_size(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("You have ordered a ".concat(size, " shirt with the message: \"").concat(message, "\"."));
}
make_shirt_size();
make_shirt_size('Medium');
make_shirt_size('Small', 'JavaScript is fun!');
//problem 38
console.log("\n");
function describe_city(city, country) {
    if (country === void 0) { country = 'Unknown'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city('Karachi', 'Pakistan');
describe_city('Paris', 'France');
describe_city('Sydney');
//problem 39
console.log("\n");
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
var location1 = city_country('Lahore', 'Pakistan');
var location2 = city_country('New York', 'USA');
var location3 = city_country('Tokyo', 'Japan');
console.log(location1);
console.log(location2);
console.log(location3);
//problem 40
console.log("\n");
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album('Ed Sheeran', 'Divide', 12);
var album2 = make_album('Taylor Swift', 'Lover');
var album3 = make_album('Adele', '25', 11);
console.log(album1);
console.log(album2);
console.log(album3);
//problem 41
console.log("\n");
function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var magicians = ['David Copperfield', 'Houdini', 'Penn Jillette', 'Teller'];
showMagicians(magicians);
//problem 42
console.log("\n");
var modifyingMagicians = [];
function makeGreatMagicians(magicians) {
    for (var index = 0; index < magicians.length; index++) {
        modifyingMagicians[index] = "Great  ".concat(magicians[index]);
    }
}
makeGreatMagicians(magicians);
//probelm 43
console.log("\n");
var unchangedMagicians = __spreadArray([], magicians, true);
showMagicians(unchangedMagicians);
makeGreatMagicians(modifyingMagicians);
//probelm 44
console.log("\n");
function makeSandwich() {
    var sandwitchItems = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sandwitchItems[_i] = arguments[_i];
    }
    console.log("You ordered a sandwich with the following items:");
    for (var _a = 0, sandwitchItems_1 = sandwitchItems; _a < sandwitchItems_1.length; _a++) {
        var item = sandwitchItems_1[_a];
        console.log("- ".concat(item));
    }
    console.log("Enjoy your sandwich!\n");
}
makeSandwich('Ham', 'Cheese', 'Lettuce', 'Tomato');
makeSandwich('Turkey', 'Swiss', 'Mayo');
makeSandwich('Peanut Butter', 'Jelly');
function makeCar(car) {
    console.log("Car:", car);
}
makeCar({ manufacturer: 'Suzuki', modelName: '2012', cololr: 'green' });
