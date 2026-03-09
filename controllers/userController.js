const User=require("../models/user");


//Create User

exports.createUser=async(req,res)=>{
    try{
        const user=new User(req.body);
        const savedUser=await user.save();
        res.status(201).json(savedUser);
        console.log("User created");

    }
    catch(err){
        res.status(500).json({error:err.message});

    }
};

// GET ALL USERS
exports.getUsers = async (req,res)=>{

try{

const users = await User.find();

res.json(users);

}catch(err){

res.status(500).json({error:err.message});

}

};

// GET SINGLE USER
exports.getUser = async (req,res)=>{

try{

const user = await User.findById(req.params.id);

res.json(user);

}catch(err){

res.status(500).json({error:err.message});

}

};


// UPDATE USER
exports.updateUser = async (req,res)=>{

try{

const user = await User.findByIdAndUpdate(

req.params.id,
req.body,
{new:true}

);

res.json(user);

}catch(err){

res.status(500).json({error:err.message});

}

};


// DELETE USER
exports.deleteUser = async (req,res)=>{

try{

await User.findByIdAndDelete(req.params.id);

res.json({message:"User deleted"});

}catch(err){

res.status(500).json({error:err.message});

}

};