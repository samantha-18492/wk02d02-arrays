//check
console.log("Hello world!");

//create an array
const blogPosts = [
  "My first blog post",
  "My second blog post",
  "My third blog post",
];

// log the array
console.log(blogPosts);

//log the blog called "My second blog post" using the appropriate index number (starting from 0)
console.log(blogPosts[1]);

//add an item to an array at index 3 (last)
blogPosts[3] = "My fourth blog post";

//log the array to check it's been added
console.log(blogPosts);

//log the new array on it's own
console.log(blogPosts[3]);

//add an item to an array to the end of the array
blogPosts.push("My fifth blog post");
// log the array to check it's been added
console.log(blogPosts);

//create a new array based on favourite foods
const favouriteFoods = ["Pasta", "Pineapple", "Broccoli"];
console.log(favouriteFoods);

//create a new array based on colours
const favouriteColors = ["Blue", "Green", "Brown"];
console.log(favouriteColors);

//create a new array based on numbers
const favouriteNumbers = [1, 2, 3];
console.log(favouriteNumbers);

//create a new array of months
const months = ["Jan", "Feb", "April"];
console.log(months);

//add a month to the beginning of the array
months.unshift("Dec");
console.log(months);

//at index point 3 add a month and do not overwrite. we use index point 3, as Dec = 0, Jan = 1, Feb = 2 therefore March needs to be 3
months.splice(3, 0, "March");
console.log(months);

//add a month at the end of the array
months.push("May");
console.log(months);

//how many items are in my array?
console.log(months.length); //6

//get the last element of the array
months[months - 1];

//remove an element from the beginning of the array
months.shift();
console.log(months); // removes Dec

// change an item e.g. change May to  June. we use index point 4 as that is the index value of May
months[4] = "June";
console.log(months);

//remove the last item in the array
months.pop();
console.log(months);

//to access the first element
console.log(months[0]); // Jan

//arrays can be made up of different data types and can sit within other arrays e.g.
const films = ["Pulp Fiction", "2006", ["Action", "Drama"]];
// to access the Drama element we use 2 to choose the [Genre] field (as Pulp Fiction = 0, 2006 = 1, [Genre] = 2), and then 1 to choose Drama (as Action = 0, Drama = 1)
console.log(films[2][1]); // Drama
