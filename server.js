// library imports
const express=require('express');
const MongoClient=require('mongodb').MongoClient;
const mysql = require('mysql');
const sqlite3 = require('sqlite3').verbose();
const bodyParser=require('body-parser');
const cors=require('cors')

// internal module imports
const defaultQueries=require('./app/db/defaultQueries')



// setup
const app= express();

const port = 8000;

var con = mysql.createConnection({
  host: "localhost",
  user: "taimtom",
  password: "temi100.",
  database: "taimtom"
});

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json());
app.use(cors())

// connect to database 
con.connect(function(err) {
  if (err) return console.log(err.stack);
  console.log("Connected!");
  
  
  // create the tables that will be needed for the application to run well
  defaultQueries.map((sql)=>{
    let db_state=0
    const check_table_exists_sql=`SELECT EXISTS (
      SELECT *
      FROM information_schema.tables
      WHERE table_name = '${sql.table_name}' );`
      // check if the table exists in the database
      con.query(check_table_exists_sql, function (err, result) {
        if (err) return console.log(err.stack);
        const response=Object.values(JSON.parse(JSON.stringify(result)))[0]
        const extractValue=Object.values(response)[0]       
        console.log(extractValue)
        if (extractValue===0){
          con.query(sql.query, function (err, result) {
            // if (err) return console(err);
            
            console.log(sql.desc);
          });
        }else{
          console.log(sql.table_name + " Already exits in the databse");
        }
        
      });
    
  })
  
  require('./app/routes')(app,con)
  app.listen(port, ()=>{
    console.log("Server live on " + port)
})

});





