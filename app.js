const server = require("./Chan_Jia_Hong_EGL301L2");
const database = require("./database");

// 1 function (filter the posts by a given title)
server.filterPostsByTitle("What is the cosmere?"); // test filter function that will return a valid posts
console.log("\n");
server.filterPostsByTitle(); //  test exception to handle no title being found
console.log("\n");
server.filterPostsByTitle("nani"); // test exception that handles a posts that is not found with the provided title in the database

// 2 function (to create a new posts)

server.createPost(
  "Stephan King is the best!",
  "I love Stephan Kings novels!!!",
  ""
);

// 3 function (add a comment to a pre-exising post)
console.log("Find the post Id to add the comment to.");
// console.log(database.posts);
console.log("\n\n");

server.addCommentsToPost(1, "I love Brandon Sanderson's Cosmere");
console.log(database.posts);

// 4 function (Add new users into the "database")

server.signUp("Bob21", "bobe@mail.com", "BOBpassword");
console.log(database.users);

// 5 function (Upvote or Downvote a user's post)
server.upvotedownvote();
