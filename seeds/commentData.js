const { Comment } = require("../models");

const commentData = [
  {
    blogId: 1,
    userUd: 1,
    dateCreated: "2021-12-1",
    comments: "I love using MVC!",
  },
  {
    blogId: 1,
    userUd: 2,
    dateCreated: "2021-12-2",
    comments: "Great~!",
  },
];

const commentSeed = () => Comment.bulkCreate(commentData);

module.exports = commentSeed;
