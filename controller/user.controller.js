const mongoose = require('mongoose')
const User = require('../models/User')

// get all users 
exports.user_get = async (req,res)=>{
    try{
        const user = await User.find();
        if(user){
            res.json({data:user,status:200})
        }else{
            res.json({message:"Users not exist!",status:404})
        }
    }catch(err){
        res.status(500).json(err);
    }
}

// get user by id 
exports.user_get_by_id = async (req,res)=>{
    try{
        var isValid = mongoose.Types.ObjectId.isValid(req.params.id)
        if(isValid){
            const user = await User.findById(req.params.id);
            if(user){
                res.json({data:user,status:200})
            }else{
                res.json({message:"User Id not exist!",status:404})
            }
        }else{
            res.json({message:"User Id not valid!",status:400})
        }
    }catch(err){
        res.status(500).json(err);
    }
}

// post user 
exports.user_post = async (req,res)=>{
    try{
        const exit_user = await User.find({email:req.body.email});
        if(exit_user.length>0){
            res.json({message:"User already exist!",status:400})
        }else{
            const new_user = new User(req.body)
            const user = await new_user.save();
            res.json({data:user,status:200})
        }
    }catch (err) {
        res.status(500).json(err);
    }
}

// update user by id 
exports.user_update_by_id = async (req,res)=>{
    try{
        var isValid = mongoose.Types.ObjectId.isValid(req.params.id)
        if(isValid){
            const exit_user = await User.findById(req.params.id);
            if(!exit_user){
                res.json({message:"User id not exist!",status:404})
            }else{
                const user = await User.findByIdAndUpdate(req.params.id,req.body)
                let suser = await user.save();
                res.json({data:suser,status:200})
            }
        }else{
            res.json({message:"User Id not valid!",status:400})
        }
    }catch (err) {
        res.status(500).json(err);
    }
}

// update user by email
exports.user_update_by_params = async (req,res)=>{
    try{
        const exit_user = await User.find({email:req.body.email});
        if(exit_user.length<1){
            res.json({message:"User id not existed!",status:404})
        }else{
            const user = await User.findOneAndUpdate(req.body.email,req.body)
            const suser = await user.save();
            res.json({data:suser,status:200})
        }
    }catch (err) {
        res.status(500).json(err);
    }
}

// delete all user
exports.user_delete = async (req,res)=>{
    try{
        if(req.body.all=="allUsers"){
            const user = await User.deleteMany()
            res.json({data:user,status:200})
        }else{
            res.json({message:"Missing params!",status:400})
        }
    }catch(err){
        res.status(500).json(err);
    }
}

// delete user by id 
exports.user_delete_by_id = async (req,res)=>{
    try{
        var isValid = mongoose.Types.ObjectId.isValid(req.params.id)
        if(isValid){
            const exit_user = await User.findById(req.params.id);
            if(!exit_user){
                res.json({message:"User id not exist!",status:404})
            }else{
                const user = await User.findByIdAndDelete(req.params.id)
                res.json({data:user,status:200})
            }
        }else{
            res.json({message:"User Id not valid!",status:400})
        }
    }catch(err){
        res.status(500).json(err);
    }
}