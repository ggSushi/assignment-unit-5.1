console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  // TODO - add properties here
  firstName: 'Glonel',
  lastName: 'Dimapilis',
  hasSiblings: true,
  shoeCount: 6,
  favThreeFoods: ['baked ziti', 'steak', 'rice'],
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
//* backticks `` need to be used when using 
//* template literals when concatenating two variables.
//* It's cleaner, in my opinion, than using var + ' ' + var
let fullName = `${me.firstName} ${me.lastName}`;
console.log(`Hi, my name is`, fullName);


/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/

console.log(`first fave food is`, me.favThreeFoods[0]);
//? I've found that in order to get the .length to work, 
//? I need to make sure I mention the object it's in 
//? as well as the arrayName within it.
console.log(`Last fave food is`, me.favThreeFoods[me.favThreeFoods.length - 1]);

/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/

console.log(`I have this many shoes:`, me.shoeCount);
me.shoeCount += 1;
console.log(`Got new shoes! Now I have ${me.shoeCount} shoes!` );

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/

me.favoriteColor = 'purple';
console.log(`About me:`, me); 

//! End assignment
