const User= requure("./User");
const Post= require("./Post");
const Comment = require("./Comment");

// create associations
User.hasMany(Post,{
    foreignkey: "user_id",
});

Post.belongsTo(User,{
    foreignkey: "user_id",
    onDelete: "SET NULL"
});

Comment.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "SET NULL",
});

Comment.belongsTo(Post, {
    foreignKey: "user_id",
    onDelete: "SET NULL"
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });

  Post.hasMany(Comment, {
    foreignKey: 'post_id'
  });
  
  
module.exports = { User, Post, Comment };