const mysql = require('mysql')

const mysqlConnection = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"",
    database: "pruebaaviatur"
})

mysqlConnection.connect((err) =>{
    if(err){
        console.log(err);
        return
    }else{
        console.log("base de datos conectada satisfactoriamente")
    }
})

module.exports = mysqlConnection