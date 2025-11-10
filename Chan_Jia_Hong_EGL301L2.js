const database = require("./database");
const readLine = require("readline");

// configs for the readline module
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});
module.exports = {
  // variables needed for the UpvoteOrDownvote function
  selectedPost: null,
  selectedDownorUpvote: null,
  num: null,

  searchPostsByTitle(title) {
    const { posts } = database; // get the array of posts that is in the "database"
    if (posts.length < 0 || posts.length == 0) {
      // handle exception that there is no posts in the database
      console.log("Error: There is no posts in the database");
      return;
    }
    // handle exception that no title is being provided when the function is called
    if (title == null || title == undefined || title == " ") {
      console.log(
        "Error: There is no title provided when calling the function"
      );
      return;
    }
    // search the post by the title and make sure the extra whitespace is removed and convert it into lower case for the title that is being compared
    const searchedPost = posts.filter(
      (post) => post.title.trim().toLowerCase() == title.trim().toLowerCase()
    );
    // hanling the exception that no posts is found in the database
    if (searchedPost.length == 0) {
      console.log("Error: No posts found matching the title in the database");
      return;
    }
    // printing message to show the difference betweeen the unfiltered posts and filtered post
    console.log("List of posts that is not filtered");
    console.log("=".repeat(100));
    console.log(posts);

    // printing message to show the difference betweeen the unfiltered posts and filtered post
    console.log("Filtered by title");
    console.log("=".repeat(100));
    console.log(searchedPost);
  },
  createPost(title, description, comments) {
    const { posts } = database; // get the array of posts that is in the "database"
    if (posts.length < 0 || posts.length == 0) {
      // handle exception that there is no posts in the database
      console.log("Error: There is no posts in the database");
      return;
    }
    // handle exception that no title is being provided when the function is called
    if (title == null || title == undefined || title == " ") {
      console.log(
        "Error: There is no title provided when calling the function"
      );
      return;
    }

    // printing message to show the pre-existing posts in the database
    console.log("List of posts");
    console.log("=".repeat(100));
    console.log(posts);
    // find the largest id among the posts
    const maxId = posts.reduce((max, post) => {
      return Math.max(max, post.id);
    }, 0);
    posts.push({
      id: maxId + 1,
      title,
      description,
      // if there is no comments, add the message after the question mark. else add the comments provided to the posts
      comments:
        comments.length < 1 || comments == null || comments == ""
          ? []
          : comments,
    });
    // printing the message to show the added posts
    console.log("List of posts with the added posts");
    console.log("=".repeat(100));
    console.log(posts);
  },
  addCommentsToPost(postId, comment) {
    const { posts } = database; // get the array of posts that is in the "database"
    // get the post based on the post's Id
    const currPost = posts.find((post) => post.id == postId);
    // append the comments into the comments
    if (comment == undefined || comment == "" || comment.length < 1) {
      console.log("Please provide a comment.");
      return;
    }

    currPost.comments.push(comment);
  },
  signUp(username, email, password) {
    const { users } = database; // get the current users in the "database"
    if (username.length < 1 || email.length < 1 || password.length < 1) {
      console.log("Please enter a username/email/password.");
      return;
    }
    // Test whether the email is valid or not
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (emailRegex.test(email) == false) {
      console.log("Please provide a valid email");
      return;
    }
    // Test whether the password is strong password
    const passwordRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (passwordRegex.test(password) == false) {
      console.log(
        "Password must have a minimum 8 characters in length.\nAt least one uppercase English letter.\nAt least one lowercase English letter.\nAt least one digit. At least one special character."
      );
      return;
    }
    // find the maximum UserId in the users from the "database"
    const maxId = users.reduce((max, user) => Math.max(max, user.id), 0);
    // add new user
    users.push({
      id: maxId + 1,
      username, // same as username: username
      email, // same as email: email
      password, // same as passwrod: password
    });
  },

  async upvotedownvote() {
    const { posts } = database; // get the posts from the database
    // converts the rl.question method to new promise
    const questionFunc = (question) =>
      new Promise((res) => rl.question(question, res));
    console.log(posts);

    // get the user input on which post they want to upvote or downvote
    try {
      // get the user input in the terminal like Python's Input function
      this.selectedPost = await questionFunc(
        "Which Posts do you want to upvote/downvote. (provide the ID): "
      );
      this.selectedDownorUpvote = await questionFunc(
        "Do you want to upvote or downvote a post. (+ for upvote, - for downvote): "
      );
      const tempNum = await questionFunc(
        "How much do you want to upvote/downvote by? (Must be Number): "
      );
      this.num = parseInt(tempNum); // convert the number to a integer
      const selPost = posts.find((post) => post.id == this.selectedPost);

      // conditional statement to check whether the selected sign is supposed to add or subtract form the this.num
      if (this.selectedDownorUpvote == "+") {
        selPost.vote += this.num;
      } else if (this.selectedDownorUpvote == "-") {
        selPost.vote -= this.num;
      }
    } catch (e) {
      return `Error: ${e.message}`;
    }

    console.log(posts.find((post) => post.id == this.selectedPost));
    rl.close();
  },
};
