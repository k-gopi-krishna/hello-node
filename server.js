const express=require('express')
const app=express();
const {PORT=3000}=process.env

app.get('/',(req ,res)=>{
    res.send( "!hello world")
})
app.listen(PORT,()=>{
    console.log(`example app listening on port ${PORT}`)
}

)
