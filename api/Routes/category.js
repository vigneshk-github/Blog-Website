const router = require('express').Router();
const Category = require("../Models/Category")

router.post('/',async (req,res)=>{
    const newCat = new Category(req.body);
    try{
        const saveCat = await newCat.save();
        res.status(200).json(saveCat);
    }catch(err){
        res.status(500).json(err);
    }
})

router.get('/',async (req,res)=>{
    try{
        const allCat = await Category.find();
        res.status(200).json(allCat);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;