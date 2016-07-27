var sports = new Array('soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby',
    'tennis', 'badminton');
var someSports = sports.slice(1, 3);

// console.log(sports);
// console.log(someSports);

var sports = new Array('soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby', 'tennis', 'badminton');
var splicedItems = sports.splice(1, 3, 'golf', 'curling', 'darts');

//  console.log(sports);
//  console.log(splicedItems);

var sports = new Array();
sports.push('soccer', 'basketball', 'hockey');
sports.push('football');
//console.log(sports);

var nextSport = sports.pop();
//console.log(sports);
//console.log(nextSport);

var sports = new Array();
sports.unshift('soccer', 'basketball', 'hockey');
sports.unshift('football');
//console.log(sports);
var nextSport = sports.shift();
//console.log(sports);
//console.log(nextSport);

var evenNumbers = new Array(0, 2, 4, 6, 8, 24, 10, 12);
var allEven = evenNumbers.every(evenNumberCheck, this);
if (allEven) {
    //console.log(true);
} 
else {
    //console.log(false);
}
function evenNumberCheck(value, index, array) {
        return (value % 2) == 0;
}

evenNumbers = new Array(25,33,43,27,13,12);
allEven = evenNumbers.some(evenNumberCheck, evenNumbers);
if (allEven) {
    //console.log(true);
} 
else {
    //console.log(false);
}

//forEach
// var sportsArray = ['soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby'];
// sportsArray.forEach(offerSport);
// function offerSport(value, index, array) {
//     var sportsList = document.getElementById("sportsList");
//     var bullet = document.createElement("li");
//     bullet.innerText = value;
//     sportsList.appendChild(bullet);
// }

//Filter
var evenNumbers = new Array(0, 3, 4, 6, 8, 9, 10, 13);
var allEven = evenNumbers.filter(evenNumberCheck, evenNumbers);
//console.log(evenNumbers);
//console.log(allEven);
function evenNumberCheck(value, index, array) {
    return (value % 2) == 0;
}

//Map
var money = [12.8, 15.9, 21.7, 35.2];
var roundedMoney = money.map(roundOff, money);
// console.log(money);
// console.log(roundedMoney);
function roundOff(value, position, array) {
    return Math.round(value);
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var squares = numbers.map(squareNumber, numbers);
// console.log(numbers);
// console.log(squares);
function squareNumber(value, position, array) {
    return value * value;
}


//Using the reduce and reduceRight methods
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var factorials = numbers.reduce(factorial);
function factorial(previous, current) {
    return previous * current;
}