const {User} = require('../models')

const signup = async(req,res) =>{
    console.log(req.body,'회원가입')
    const {id,password,name,residence,phone} = req.body
    const result = await User.create({LoginID: id,
        Password: password,
        Name: name,
        Address: residence,
        phone: phone,
        Point: 0,
        JoinDate: new Date(),})
        res.json({result:true})
}
const login = async(req,res) =>{
    const{userid,pw} = req.body;
    const result= await User.findOne({LoginID:userid,Password:pw})
    res.json({result:true, data: result})
}
module.exports = {signup,login}