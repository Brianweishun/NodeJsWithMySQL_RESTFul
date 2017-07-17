var mysql=require('mysql');
 var connection=mysql.createPool({
 
host:'localhost',
 user:'Brian',
 password:'Iamyp=gjp4',
 database:'nodejs test'
 
});
 module.exports=connection;
