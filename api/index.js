const express = require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authRoute = require('./Routes/auth')
const userRoute = require('./Routes/users')
const postRoute = require('./Routes/posts')
const catRoute = require('./Routes/category')
const multer = require('multer')

dotenv.config()
app.use(express.json())

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("DB Connected")).catch(err=>console.log(err));

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"imagesApi");
    },
    filename:(req,file,cb)=>{
        // cb(null,req.body.name);
        cb(null,"hello.jpg");//The name which you wanna give to the uploaded image
    }
});

const upload = multer({storage:storage});

app.post('/api/upload',upload.single("file"),(req,res)=>{
    res.status(200).json("File is Uploaded");
})

app.use('/api/auth',authRoute);

app.use('/api/user',userRoute);

app.use('/api/post',postRoute);

app.use('/api/category',catRoute);

app.listen("3000",()=>{
    console.log("Backend is Running");
})