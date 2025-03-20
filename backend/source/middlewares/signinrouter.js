const User = require('../mongos.js')
const Webtoken = require('./jwt.js')
const bcrypt = require('bcrypt');
const Signup =  async(req,res)=>{
    try{
    const {name,email,password}= req.body;
if (!name||!email||!password){
return res.status(400).json({required:'all fields are required'})

}
 const isuser = await User.findOne({email});
if (isuser){
    return res.status(404).json({
    response:'email already found'
    })
}
const salt = await bcrypt.genSalt(7);
const hashpassword = await bcrypt.hash(password,salt);
const newUser = await new User({
    name:name,
    email:email,
    password:hashpassword
})

        await newUser.save()

        try {
            await Webtoken(newUser._id, res);
            res.status(200).json({
                name: newUser.name,
                response: 'User created successfully'
            });
        } catch (error) {
            console.error('Error in token creation:', error);
            res.status(500).json({ error: 'Error in token creation' });
        }
  
 }
    catch(error){
        res.status(500).json({
            response:'server error  her'})
        console.log('errorere')
    }
    }
    module.exports=Signup;