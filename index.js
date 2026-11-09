const express = require('express');
const app = express()
const port = 3000
const idata =require('./model/dataModel')
const mongoose = require('mongoose');

app.use(express.json())

  mongoose.connect('mongodb+srv://iamkawsermia_db_user:y5BubgWN64vevx28@cluster0.jiyx2fq.mongodb.net/information')
  .then(() => console.log('DataBase Connected 🫡'));



app.post('/data', async(req, res) => {
  let{name,number,city}=req.body

  
 let dBase =new idata({
    name:name,
    number:number,
    city:city
 })

 await dBase.save(),
 res.send('database Add data')

})


function gard (req,res,next){
  if(req.headers.authorization == "123"){
      next()
  }else{
    res.send("pass deo")
  }

}

app.get('/data/alldata',gard,async(req,res)=>{
let data = await idata.find({ })
res.send(data)

})

app.delete('/data/alldata/delete/:id',async(req,res)=>{
let{id}=req.params
let data = await idata.findByIdAndDelete({id })
res.send("delete data")

})




app.post('/data/alldata/update/:id',async (req,res)=>{
let{id}=req.params
let data = await idata.findByIdAndUpdate(id)
    data.name = req.body.name;
    data.number = req.body.number;
    data.city = req.body.city;
    await data.save()
res.send("update data")

})


app.listen(port, () => {
  console.log(`hit koro ${port}`)
})