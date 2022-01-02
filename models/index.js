const User = require("./User");
const Blog = require("./Blog");
const Comment = require("./Comment");

User.hasMany(Blog, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

User.hasMany(Comment, {
  foreignKey: "userId",
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

Comment.belongsTo(User, {
  foreignKey: "userId",
});

module.exports = { User, Blog, Comment };
