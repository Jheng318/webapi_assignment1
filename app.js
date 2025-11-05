const server = require("./Chan_Jia_Hong_EGL301L2");

// 1 function (filter the posts by a given title)
// server.filterPostsByTitle("What is the cosmere?"); // test filter function that will return a valid posts
// console.log("\n");
// server.filterPostsByTitle(); //  test exception to handle no title being found
// console.log("\n");
// server.filterPostsByTitle("nani"); // test exception that handles a posts that is not found with the provided title in the database

// 2 function (to create a new posts)

server.createPosts(
  "Stephan King is the best!",
  "I love Stephan Kings novels!!!",
  ""
);
