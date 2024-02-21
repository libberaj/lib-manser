const express = require("express");
const app=express();
const mysql = require('mysql');
const cors= require('cors');

app.use(cors());
app.use(express.json());



const db =mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'libbe',
    database:'employee_system',
});

app.post('/create',(req,res)=>{
    const name= req.body.name;
    const age= req.body.age;
    const country= req.body.country;
    const position= req.body.position;
    const wage= req.body.wage;
    const gender = req.body.gender;
    db.query(
        "INSERT INTO employ (name,age,country,position,wage,gender) VALUES(?,?,?,?,?)",
        [name,age,country,position,wage,gender],(err,result)=>{
            if(err){
                console.log(err);
            }
            res.send("inserted");
        }
    )
})

app.get('/employees',(req,res)=>{

db.query("SELECT * FROM employ", (err,result)=>{
    if(err){
        console.log(err)
        
    }
    res.send(result)
})

})
app.listen(3001,()=>{
    console.log("happy happy happy!");
})