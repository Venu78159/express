const express=require("express")
const app=express()
const cors=require("cors")
const port=4000;
const students=require("./data.js")
const emp={id:1,name:"dhanu",age:"18"}
app.use(cors())

app.get("/",(req,res)=>{
	res.send("hi i am dhanu")
})
app.get("/user",(req,res)=>{
	res.send("hi dhanu")
})

app.get("/emp",(req,res)=>{
	res.json(emp)
})
	app.get("/students",(req,res)=>{
	res.json(students)
})
	
app.listen(port,()=>console.log("server is in port 4000"))