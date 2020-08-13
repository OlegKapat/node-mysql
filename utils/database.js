const Sequilize=require("sequelize");
const SHEMA_NAME="node-todo";
const USER_NAME="root";
const PASSWORD="1q2q3q4q";

const sequilize=new Sequilize(SHEMA_NAME,USER_NAME,PASSWORD,{
    host:"localhost",
    dialect:"mysql"
})

module.exports=sequilize;