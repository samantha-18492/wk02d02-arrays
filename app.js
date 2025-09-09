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
