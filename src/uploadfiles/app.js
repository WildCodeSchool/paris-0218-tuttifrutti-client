const express = require('express')
const app = express()
const http = require('http').Server(app).listen(3000)
const upload = require('express-fileupload')

app.use(upload())
console.log('Server Started!')

app.get("/", (req, res)=> {
  res.sendFile(__dirname+"/index.html")
})

app.post("/",(req,res)=>{
  if(req.files){
    const file = req.files.filename,
          filename =file.name
          file.mv("./upload"+filename, (err)=> {
            if(err){
              console.log(err)
              res.send("error occured")
            }
            else{
              res.send("Done!")
            }
          }
        )}

})