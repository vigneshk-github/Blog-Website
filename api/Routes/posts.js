const router = require('express').Router();
const Post = require("../Models/Post")

//Create
router.post('/',async (req,res)=>{
    try{
        const newPost = new Post(req.body);
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }catch(err){
        res.status(500).json(err);
    }
})

router.put('/:id',async (req,res)=>{
    try{
        const yourPost = await Post.findById(req.params.id);
        if(yourPost.username===req.body.username){
            const post = await Post.findByIdAndUpdate(req.params.id,{
                $set:req.body,
            },{new:true});
            res.status(200).json(post);
        }else{
            res.status(400).json("Cant Update other Post");
        }
    }catch(err){
        res.status(500).json(err);
    }
})

router.delete('/:id', async (req,res)=>{
    const yourPost = await Post.findById(req.params.id);
    try{
        if(yourPost.username===req.body.username){
            await Post.findByIdAndDelete(req.params.id);
            res.status(200).json("Post has Deleted");
        }else{
            res.status(400).json("Entered Wrong details");
        }
        
    }catch(err){
        res.status(500).json(err);
    }
})

//Get Specifc post
router.get('/:id', async (req,res)=>{
    try{
        const yourPost = await Post.findById(req.params.id);
        res.status(200).json(yourPost);
    }catch(err){
        res.status(500).json(err);
    }
})

//Get with queries or all posts

router.get('/', async (req,res)=>{
    const user = req.query.user;
    const catNam = req.query.cat;
    try{
        let posts;
        if(user){
            posts = await Post.find({username :user})
        }else if(catNam){
            posts = await Post.find({categories:{
                $in:[catNam], //Checks in the categories array there is any catName
            }})
        }else{
            posts = await Post.find();
        }
        res.status(200).json(posts);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;