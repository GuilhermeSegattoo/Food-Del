import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"

// login user

const loginUser = async (req,res) => {
  const {email,password} = req.body;
  try{
    const user = await userModel.findOne({email});

    if(!user){
      return res.json({success:false,message:"usuário não cadastrado"})
    }
    const isMatch = await bcrypt.compare(password,user.password);

    if (!isMatch) {
      return res.json({success:false,message:"Credenciais invalidas"})
    }
    const token = createToken(user._id)
    res.json({success:true,token})
  } catch (error) {
     console.log(error)
     res.json({success:false,message:"tente novamente, esse erro até dar certo"})
  }
}

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

// registro user

const registerUser = async (req,res)=> {
  const {name,password,email} = req.body;
  try{
    // checando se o user existe
   const exists = await userModel.findOne({email});
   if(exists) {
    return res.json({success:false,message:"Usúario já existente!"})
   }
    // validando o email e o password
    if (!validator.isEmail(email)){
        return res.json({success:false,message:"Entre com um Email valido"})
    }
    if(password.length<8){
       return res.json({success:false,message:"Senha menor que 8 Caracteres"})
    }
    // hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    const newUser = new userModel({
        name:name,
        email:email,
        password:hashedPassword
    })

    const user = await newUser.save();
    const token = createToken(user._id)
    res.json({success:true,token})


  } catch(error){
    res.json({success:false,message:"Error"})
  }
}

export {loginUser,registerUser}