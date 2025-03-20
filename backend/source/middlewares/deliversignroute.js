const Deliver = require("../usedelivdb")
const bcrypt = require('bcrypt')
const Webtoken = require("./jwt")
const Delisign = async(req,res)=>{
    try{
const {name,email,password}= req.body;
if (!name||!email||!password){
  return  res.status(400).json({required:'please insert the required field'})
}
const deliv =await Deliver.findOne({email})
if (deliv){
    return res.status(400).json({
        required:'email already found'
    })
    
}
const salt = await bcrypt.genSalt(8);
const hashpassword = await bcrypt.hash(password,salt)
const Deliverman = await new Deliver({
name:name,
email:email,
password:hashpassword

}
)
await Deliverman.save()
try {
    await Webtoken(Deliverman._id, res);
    res.status(200).json({
        _id: Deliverman._id,
        response: 'User created successfully'
    });
} catch (error) {
    console.error('Error in token creation:', error);
    res.status(500).json({ error: 'Error in token creation' });
}
}
catch(err){
    return res.status(500).json({response:"error on the server"})
}







}
module.exports= Delisign;