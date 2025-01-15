/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
let tongueTwister= s1.concat(" ",s2," ",s5," ",s3," ",s4)

// Print out the concatenated string

console.log (tongueTwister)


/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
let part1Var = `${part1.substring(0, 3)}${part1[3].toUpperCase()}`
let part2Var = `${part2.substring(0, 5)}${part2[5].toUpperCase()}`

let result= `${part1Var}${part2Var}`

// Print the cameLtaiL-formatted string
console.log (result);

/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
let tip = billTotal * 0.15;

// Print out the tipAmount
console.log(tip)

/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
let random= Math.random()*10;
let randomRounded = Math.round(random)

// Print the generated random number
console.log(randomRounded)


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:

const expression1 = a && b; //false

const expression2 = a || b; //true

const expression3 = !a && b; //false

const expression4 = !(a && b); //true

const expression5 = !a || !b; //true

const expression6 = !(a || b); //false

const expression7 = a && a; //true
