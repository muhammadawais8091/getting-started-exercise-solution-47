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
//Problem 7
console.log("");
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
