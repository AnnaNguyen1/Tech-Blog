const User = require("./User");
const Blog = require("./Blog");
const Comment = require("./Comment");

User.hasMany(Blog, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Blog.belongsTo(User, {
  foreignKey: "userId",
});

Blog.hasMany(Comment, {
  foreignKey: "blogId",
});

Comment.belongsTo(Blog, {
  foreignKey: "blogId",
});

module.exports = { User, Blog, Comment };
