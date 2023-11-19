const router = require("express").Router()
const User = require('../Models/User')
const bcrypt = require('bcrypt');

router.post("/register",async (req,res)=>{
    try{
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
        username : req.body.username,
        email:req.body.email,
        password : hash,
    });
    const user = await newUser.save();
    res.status(200).json(user);
}catch(err){
    res.status(500).json(err)
}
})

router.get('/login',async (req,res)=>{
    try{
        const user = await User.findOne({email:req.body.email});
        !user && res.status(400).json("Email not found")

        const validate = await bcrypt.compare(req.body.password, user.password);
        !validate && res.status(400).json("Password not correct")

        const {password,...others} = user._doc;

        res.status(200).json(others);

    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;