const User= requure("./User");
const Post= require("./Post");
const Comment = require("./Comment");

User.hasMany(Post,{
    foreignkey: "user_id",
});

Post.belongsTo(User,{
    foreignkey: "user_id",
});