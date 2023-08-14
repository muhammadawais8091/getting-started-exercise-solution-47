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

//Problem 7
console.log("");


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






 




