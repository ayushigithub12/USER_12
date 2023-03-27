const express=require('express');
const router=express.Router();
const User=require('../model/user');

router.post('/access',async(req,res)=>{
 try{
   const password=req.body.password;
   const cpassword=req.body.cpassword;
   if(password===cpassword){
    const userApi=new User(req.body);
    const result=await userApi.save();
    console.log(result);
    res.status(201).send(result);
   }else {
    res.status(400).send('Password not matching');
   }
 } catch(err){
  res.status(404).send(err);
  console.log(err);
 }
})

// router.get('/access',async(req,res)=>{
//     try{
//         const getUser=await User.find({});
//         res.status(200).send(getUser);
//     }catch(err){
//         res.status(404).send(err);
//     }
//     })
    
    // router.get('/access/:id',async(req,res)=>{
    //     try{
    //         const id=req.params.id;
    //         const getUser=await User.findById(id);
    //         res.status(200).send(getUser);
    //     }catch(err){
    //         res.status(404).send(err);
    //     }
    //     })
    
    // router.patch('/access/:id',async(req,res)=>{
    //     try{
    //         const id=req.params.id;
    //         const updateUser=await User.findByIdAndUpdate(id)
    //         res.status(201).send(updateUser);
    //     }catch(err){
    //         res.status(404).send(err);
    //     }
    // })
    
    // router.delete('/access/:id',async(req,res)=>{
    //     try{
    //         const id=req.params.id;
    //         const updateUser=await User.findByIdAndDelete(id)
    //         res.status(201).send(updateUser);
    //     }catch(err){
    //         res.status(404).send(err);
    //     }
    // })
    
    module.exports=router;
    
    