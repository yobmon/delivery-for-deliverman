const express = require ('express');
const http = require('http')
const router = require('./middlewares/router.js');
const Connect = require ('./connectdb.js')
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const db2 = require('./dbfordeliver.js');
const  {Server} = require ('socket.io')
const Foodsdb = require('./foodsdb')
const orderdb=require('./exportcondb')
const Food = require('./usefoodsdb');
const checkandsend =require('./foodexport')
const order=require('./orderedtodeliver')

const Fooddeli = require('./usefoodsdb');

dotenv.config();
const app = express();

const server = http.createServer(app);
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/',router)

const io = new Server(server,{
cors:{
origin: "http://localhost:3000", // Change this to match your frontend
methods: ["GET", "POST"]

}
})

 io.on ('connection',(socket)=>{
console.log('a user connected')
socket.on('message',async(data)=>{
    
    console.log('message',data)
let many = 1;
  for(let item of data){

  
    const newfoods =await new Fooddeli({
     foodname:item.name,
     price:item.price

    })
    
    await newfoods.save();
}


  const feedback = await checkandsend
feedback()  

 
  
console.log(many)
})

})

const port =9095;



        server.listen(port, () => {
            console.log('Server is running on port 3060');
            Connect();
        db2();
        Foodsdb();
        orderdb();
    })
        




