const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT,function () {
    console.log("Server is running...");
});
// config to connect
const configDB = {
    host: "139.180.186.20",
    port: 3306,
    database: "t2207e",
    user: "t2207e",
    password:"t2207e123", // mamp"root"
    multipleStatements: true // cho phep su dung nhieu cau SQL 1 lan gui
    // npm install mysql

};
const mysql = require("mysql");
const conn = mysql.createConnection(configDB);
// api list all class
app.get("/get-class",function (req,res){
    const sql = "select * from classes "
    conn.query(sql,function (err,data){
        if(err)
        {
            res.send("404 not found");
        }else{
            res.send(data);
        }
    })
})


// api list all students
app.get("/get-students",function (req,res){
    const sql = "select * from students "
    conn.query(sql,function (err,data){
        if(err)
        {
            res.send("404 not found");
        }else{
            res.send(data);
        }
        //http://localhost:5000/get-students
    })
})
// api list all students theo class
app.get("/get-students-class",function (req,res){
    const cid = req.query.cid;
    const sql = "select * from students where cid = "+cid;
    conn.query(sql,function (err,data){
        if(err)
        {
            res.send("404 not found");
        }else{
            res.send(data);
        }
        //http://localhost:5000/get-students-class?cid=1
    })
})
// api list students theo ten
app.get("/get-students-name",function (req,res){
    const emal = req.query.emal;
    const name = req.query.name;
    const sql = `select * from students where name like '%${name}%' or emal like '%${emal}%'`;
    conn.query(sql,function (err,data){
        if(err)
        {
            res.send("404 not found");
        }else{
            res.send(data);
        }
        //http://localhost:5000/get-students-name?name=thanh&emal=dxdung2002
    })
})
// api list students theo ten class
app.get("/get-students-classname",function (req,res){
    const emal = req.query.emal;
    const name = req.query.name;
    const cid = req.query.cid;
    const sql = `select * from students where cid in(select cid from classes where name like '%${q}]%')`;
    conn.query(sql,function (err,data){
        if(err)
        {
            res.send("404 not found");
        }else{
            res.send(data);
        }
        //http://localhost:5000/get-students-name?name=thanh&emal=dxdung2002
    })
})
// api get 1 student by sid
app.get("/get-students-detail",function (req,res){

    const sid = req.query.sid;
    const sql = `select * from students where sid= ${sid})`;
    conn.query(sql,function (err,data){
        if(err)
        {
            res.send("404 not found");
        }else if(data.length > 0){
            res.send(data[0]);
        }else{
            res.send("404 not found");
        }
        //http://localhost:5000/get-students-name?name=thanh&emal=dxdung2002
    })
})
//them file Procfile ( node index.js )






// var ls = [
//     {
//         id: 1,
//         name:"Nguyễn Hoàng Nam",
//         age: 18
//     },
//     {
//         id:2,
//         name: "Thái Sơn",
//         age: 16
//     }
// ];
//
// app.get("/demo",function (req,res) {
//     res.send("Hello world!");
// });
//
// app.get("/get-data",function (req,res) {
//     res.send(ls);
// });
// app.get("/detail",function (req,res) {
//     var paramId = req.query.id;
//     var data;
//     for(var i=0;i<ls.length;i++){
//         if(ls[i].id == paramId){
//             data = ls[i];
//             break;
//         }
//     }
//     res.send(data);
// })
// app.get("/edit",function (req,res) {
//     var paramId = req.query.id;
//     var paramName = req.query.name;
//     var paramAge = req.query.age;
//     for(var i=0;i<ls.length;i++){
//         if(ls[i].id == paramId){
//             ls[i].name = paramName;
//             ls[i].age = paramAge;
//             break;
//         }
//     }
//     res.send("done");
// })
//
// app.get("/create",function (req,res) {
//     var paramId = req.query.id;
//     var paramName = req.query.name;
//     var paramAge = req.query.age;
//     var check = false;
//     for(var i=0;i<ls.length;i++){
//         if(ls[i].id == paramId){
//             check= true;
//             break;
//         }
//     }
//     if(check == false){
//         ls.push({
//             id: paramId,
//             name: paramName,
//             age: paramAge
//         })
//     }
//     res.send("done");
// })
// app.get("/delete",function (req,res) {
//     var paramId = req.query.id;
//     var p=-1;
//     for(var i=0;i<ls.length;i++){
//         if(ls[i].id == paramId){
//             p = i;
//         }
//     }
//     if(p != -1){
//         ls.splice(p,1);
//     }
//     res.send("done");
// })



