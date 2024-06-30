const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/vue-mongodb',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
    email: { type: String, required:true,unique:true},
    password:{ type: String,required:true,unique:true},
    coins:{ type:Number,default:0},
    progress:{type:Number,default:0},
});

const User = mongoose.model('User',userSchema);


app.post('/register',async (req,res)=>{
    const {email,password}=req.body;
    try{
        const newUser = new User({email,password});
        await newUser.save();
        res.status(201).json(newUser);
    }catch(error){
        res.status(400).json({error : error.message});
    }
});

app.post('/login',async (req,res)=> {
    const {email,password} = req.body;
    try{
        const user = await User.findOne({email,password});
        if(user){
            res.status(200).json(user);
        }else{
            res.status(400).json({error : 'Invalid credentials'});
        }
    }catch(error){
        res.status(400).json({error: error.message})
    }
});

app.get('/user/:id', async (req,res)=> {
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    }catch(error){
        res.status(400).json({error : error.message})
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });