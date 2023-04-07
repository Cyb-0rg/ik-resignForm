const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const port = 5678;

app.use(cors());
app.use(express.json());

 const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "gsi",
}); 

  app.post("/create", (req, res) => {

  const values = req.body.values;
  const query = `INSERT INTO iscikisformu2 (${Object.keys(values).join(',')}) VALUES (${Object.values(values).map(value => `'${value}'`).join(',')})`;
 
  db.query(query, (error, results, fields) => {
      if (error) throw error;
      res.send('values saved to database!');

      const object = values;
      Object.keys(object).map(key => {
        console.log(`${key}: ${object[key]}`);
      });

    });  

    //const object = values;
    //console.log(values.total_gain_package_checked)
    

});  


app.listen(port, () => {
  console.log(`your server is running on port ${port}`);
});

 