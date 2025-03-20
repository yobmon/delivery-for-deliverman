const Webtoken =require('./jwt');
const Deliver = require("../usedelivdb");
const bcrypt = require ("bcrypt")

const Deliverlog = async(req,res)=>{
    const{email,password}= req.body;
    try{

    const isuser = await Deliver.findOne({email})
    if (!isuser){
        return res.status(400).json({
            response:'incorrect email'
        })
       }
      
   const ispassword = await bcrypt.compare(password,isuser.password)
   if (!ispassword){
    return res.status(400).json({
        "response":'incorrect  password'
    })
   }
   

   await Webtoken(isuser._id,res)

   res.status(200).json({response:'login scucess'})

    }
    catch(err){
        console.log('err here login deilver')
        return res.status(500).json({ response: "Internal server error" });
    }

}

module.exports = Deliverlog;


//{"name":"tomato red","email":"sosa@gmail.cosmmno","password" : "12733645"
