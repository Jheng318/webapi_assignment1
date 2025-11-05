const database = require("./database");
module.exports = {
  filterPostsByTitle(title) {
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
    // filter the post by the title and make sure the extra whitespace is removed and convert it into lower case for the title that is being compared
    const filteredPost = posts.filter(
      (post) => post.title.trim().toLowerCase() == title.trim().toLowerCase()
    );
    // hanling the exception that no posts is found in the database
    if (filteredPost.length == 0) {
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
    console.log(filteredPost);
  },
  createPosts(title, description, comments) {
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
    posts.push({
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
};
