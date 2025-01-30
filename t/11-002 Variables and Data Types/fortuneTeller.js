Reference: https://www.w3schools.com/JS/js_const.asp
Reference: https://javascript.info/ JavaScript Input with Prompt   
Reference: YouTube video-JavaScript Data Types & Variables(let, var, const) | JavaScript for Beginners Course

//The user’s mother’s first name.
const name = prompt("what is you mother first name");

//The name of the street where the user grew up. 
const streetName = prompt("name of street you grew up on"); 

//The user's favourite colour as a child.
let colour = prompt("what was your favourite colour as a child");

//User current age. 
Let age = prompt("what is your current age");

//User selecting a number.
Let number = prompt("select a number between 1 and 10");

//number of years in which they will meet their best friend.
console.log(number)

//The best friend’s name.
console.log(`${name} ${streetName}.`);

//The number of years for marriage. 
console.log("age / number = " + age/number);

//The amount of children 
console.log("age % number = " + age%number);

//The amount of years till the hair is dyed.
 console.log("age - number = " + age-number)  

//The colour of the hair dyed.
console.log(colour)

//Output Result 
console.log("In '${number} years you are going to meet your best friend named ${name} ${streetName}`.
 You will get married in `${"age / number = " + age/number}` years and have `${"age % number = " + age%number}` children. In `${"age - number = " + age-number}` years you are going to dye your hair `${colour}`.) 
