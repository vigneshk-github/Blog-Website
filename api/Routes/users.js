const router = require('express').Router();
const user = require('../Models/User')
const post = require('../Models/Post')
const bcrypt = require('bcrypt');

//Update
//Means we send the data in postman body and based that we need to update
router.put('/:id',async (req,res)=>{
    const User = await user.findById(req.params.id);
    if(req.body.userId === req.params.id){
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
            try{
                const updateUser = await user.findByIdAndUpdate(req.params.id,{
                    $set:req.body,//All the entered in the postman will be updated
                },{new:true});
                res.status(200).json(updateUser);
            }catch(err){
            res.status(400).json(err);
            }
        }else{
        res.status(401).json("Wrong Password");
        }
    }else{
        res.status(401).json("No User Found");
    }
    })


router.delete('/:id', async (req,res)=>{
    if(req.body.userId === req.params.id){
            try{
                const User = await user.findById(req.body.userId);
                try{
                await post.deleteMany({username : User.username});
                await user.findByIdAndDelete(req.body.userId);
                res.status(200).json("User deleted");
                }catch(err){
                    res.status(400).json(err);
                }
            }catch(err){
            res.status(400).json(err);
            }
    }else{
        res.status(401).json("No User Found");
    }
})


router.get('/:id',async (req,res)=>{
    try{
        if(req.params.id === req.body.userId){
            const User = await user.findById(req.params.id);
            const {password,...other}= User._doc; //What we get from the database
            res.status(200).json(other);
        }else{
            res.status(500).json("No user found");
        }
    }catch(err){
        res.status(401).json(err);
    }
})

module.exports = router;