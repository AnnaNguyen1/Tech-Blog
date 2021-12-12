const { Blog } = require("../models");

const blogData = [
  {
    dateCreated: "2021-11-29",
    title: "Why MVC is so important",
    description:
      "MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.",
    userId: "2",
  },
  {
    dateCreated: "2021-12-01",
    title: "NEWS!",
    description:
      "This website is live! Please add comments and blog posts as you please!",
    userId: "1",
  },
];

const blogSeed = () => Blog.bulkCreate(blogData);

module.exports = blogSeed;
