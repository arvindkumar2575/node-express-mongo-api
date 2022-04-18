const User = require('../models/User')

// get all users 
exports.user_get = async (req,res)=>{
    try{
        const user = await User.find();
        res.send(user)
    }catch(err){
        res.status(500).json(err);
    }
}

// get user by id 
exports.user_get_by_id = async (req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        res.send(user)
    }catch(err){
        res.status(500).json(err);
    }
}

// post user 
exports.user_post = async (req,res)=>{
    try{
        const exit_user = await User.find({email:req.body.email});
        if(exit_user.length>0){
            res.json({message:"User Email already existed!"})
            return true;
        }else{
            const new_user = new User(req.body)
            const user = await new_user.save();
            res.json(user)
        }
    }catch (err) {
        res.status(500).json(err);
    }
}

// update user by id 
exports.user_update_by_id = async (req,res)=>{
    try{
        const exit_user = await User.findById(req.params.id);
        if(!exit_user){
            res.json({message:"User id not existed!"})
            return true;
        }else{
            const user = await User.findByIdAndUpdate(req.params.id,req.body)
            await user.save();
            res.json(user)
        }
    }catch (err) {
        res.status(500).json(err);
    }
}

// delete all user
exports.user_delete = async (req,res)=>{
    try{
        const exit_user = await User.dele(req.params.id);
        console.log(exit_user)
        if(!exit_user){
            res.json({message:"User id not existed!"})
            return true;
        }else{
            const user = await User.findByIdAndDelete(req.params.id)
            res.json(user)
        }
    }catch(err){
        res.status(500).json(err);
    }
}

// delete user by id 
exports.user_delete_by_id = async (req,res)=>{
    try{
        const exit_user = await User.findById(req.params.id);
        console.log(exit_user)
        if(!exit_user){
            res.json({message:"User id not existed!"})
            return true;
        }else{
            const user = await User.findByIdAndDelete(req.params.id)
            res.json(user)
        }
    }catch(err){
        res.status(500).json(err);
    }
}