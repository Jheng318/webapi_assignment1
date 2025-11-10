# Assignment 1

## Related Files

Chan_Jia_Hong_EGL301L2.js is the node module file for this project. It is inspired from Reddit
app.js is used to test the fuctions form the module
database.js is a dummy database with arrays as the tables

---

There are 5 functions from the node module
**searchPostsByTitle**: a function to search through the list of posts from the database.

**createPost**: a function to create a new post passing in the title, description and comments as the parameters.

**addCommentsToPost**: a function to push a comment into the comments of a selected post

**signUp**: a function to create a account by passing in the username, email and password into the parameters

**upvotedownvote**: a function that will prompt 3 questions to upvote or downvote the selected post

---

Remember to import the file using require(./file-name) E.g.

```
const server = require("./Chan_Jia_Hong_EGL301L2");
const database = require("./database");
```

# References

**Reddit**: https://www.reddit.com/
