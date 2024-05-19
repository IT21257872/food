const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Driver = require('../Models/DriverModel')


router.post("/reg", async(req, res) => {
    try{
        
        const driver = {
            name : req.body.name, 
            email : req.body.email,
            mobile : req.body.mobile,
            vehicle:req.body.vehicle,
            password : req.body.password,
            confirmPass:req.body.confirmPass
        }
        
        // const alredyReg = await User.findOne(user.email)
        // if(alredyReg){
        //     res.send ("User already exists" );
        //     return 0;
        // }
       
        if(driver.password != driver.confirmPass){
            res.send("password not matched")
            return -1;
        }
        
        const hashPass = await  bcrypt.hash(driver.password, 10)
        const userDb = {
            name : req.body.name, 
            email : req.body.email,
            mobile : req.body.mobile,
            vehicle:req.body.vehicle,
            password : hashPass,
            
        }
        const newDriver = new Driver(userDb);
        await newDriver.save()
        res.send(newDriver);
        
    }catch(err){
        res.send(err)
    }
})

router.post("/login", async(req, res) => {
    try{
        
        const mobile =req.body.mobile
        const password = req.body.password
        
        const result = await Driver.findOne({mobile:mobile})
        if(!result){
            res.send("no user found")
            success:false
        }else{
        const valid = await bcrypt.compare(password,result.password);
        if(!valid){
            res.send("worng pass")
            success:false
        } else {
            const token = jwt.sign({userId:result.id,name:result.name,mobile: result.mobile, email: result.email }, "perera_cluster")
          
            res.send({token:token,  success:true})

        }
    }
        
    }catch(err){
        res.send(err)
    }

   

 })

// router.post("/view", async(req, res) =>{
//     try{
//         const token = req.body.token
//         const payload = await jwt.verify(token, "perera_cluster")
//         res.send(payload)
       
//     }catch(err){
//         res.send(err)
//     }
// })

// router.get("/all-user", async (req,res)=>{
//     User.find().exec((err,users)=>{
//         if (err){
//             return res.status(400).json({
//                 error:err
//             });
//         }
//         return res.status(200).json({
//             success:true,
//             users
//         });
//     });
    
// })


// router.delete('/delete/:id',(req,res)=>{
//     User.findByIdAndRemove(req.params.id).exec((err,deletedUser)=>{
//         if(err) return res.status(400).json({
//           message:" Delete unsuccesful",err
//         });
//         return res.json({
//             message:" Delete succesful",deletedUser
//         });
//     });
// });

// router.put("/update", async(req, res) =>{
//     try{
//         const id = req.body.id
       
//         const hashPas1= await  bcrypt.hash(req.body.password, 10)
       
//         const updateUser = {
//             name : req.body.name, 
//             email : req.body.email,
//             mobile : req.body.mobile,
//             password : hashPas1,
            
//         }
       
//         const UpdateUser1 = await User.findByIdAndUpdate(id, updateUser)
//         res.send(UpdateUser1)

//     }catch(err){
//         res.send(err)
//     }
// })
module.exports = router;