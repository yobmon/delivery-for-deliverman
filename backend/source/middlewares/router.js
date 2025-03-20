
const User = require('../mongos.js')
const Webtoken = require('./jwt.js')
const bcrypt = require('bcrypt');
const deliversign = require('./deliversignroute.js')
const signup =require('./signinrouter.js')
const Delivlog = require('./logindeliver.js')
const Delivetake =require('../deliverstake.js')
const express = require('express')
const router= express.Router();


router.post('/deliversign',deliversign)
router.post('/signin',signup)
router.post('/deliverlog',Delivlog)
router.get('/deliverstake',Delivetake)
router.post('/login',async(req,res)=>{
    const{email,password}=req.body;
    try{
const isuser = await User.findOne({email});
const ismatch = await bcrypt.compare(password,isuser.password)
if(!ismatch){
    return res.status(400).json({response:'password not matched'})

}
await Webtoken(isuser._id,res)
res.status(200).json({response:'login scucess',
    name:isuser.name,
    email:isuser.email
    

})

    }

    catch(err){

        console.log('err in login')
        res.status(500).json({response:'server error'})
    }
})


router.post('/logout',(req,res)=>{
try{
res.cookie('cookie','',{maxAge:0})
res.status(200).json({message:'logout scucess'})

}
catch(err){
    console.log('error in the log out')
    res.status(500).json({message:'error in the logout'})
}






})

module.exports = router;


