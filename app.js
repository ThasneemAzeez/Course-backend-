const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const { coursemodel } = require("./model/course")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://thasneemazeez:thasneem38@cluster0.uk9okno.mongodb.net/coursedb?retryWrites=true&w=majority&appName=Cluster0")

app.get("/",(req,res)=>{
    res.send("hello")
})

app.post("/add",(req,res)=>{
    let input=req.body
    let course=new coursemodel(input)
    course.save()
    res.json({"status":"success"})
    
})

app.post("/search",(req,res)=>{
    let input=req.body
    coursemodel.find(input).then(
        (data)=>{
            res.json(data)
        }
    ).catch((error)=>{
        res.json(error)
    })
})

app.get("/view",(req,res)=>{
    
    coursemodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch((error)=>{
        res.json(error)
    })
})


app.listen(8081,()=>{
    console.log("server started")
})