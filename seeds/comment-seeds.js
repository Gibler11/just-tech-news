const { Comment } = require("../models");

const CommentsData = [
  {
    comment_text:
      "What are my thoughts and opinions today",
    user_id: 5,
    post_id: 2,
  },
  {
    comment_text: "Foxes live in my woods",
    user_id: 2,
    post_id: 3,
  },
  {
    comment_text: "Pink clouds",
    user_id: 1,
    post_id: 3,
  },
  {
    comment_text: "Lizzo ",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "The moon is biggest right now ",
    user_id: 4,
    post_id: 4,
  },
];
const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;
