import { log } from "console";
import foodModel from "../models/foodModels.js";
import fs from "fs";


// adicionando o food item

const addFood = async (req,res) => {
  
  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name:req.body.name,
    description:req.body.description,
    price:req.body.price,
    category:req.body.category,
    image:image_filename
  })
  try {
    await food.save()
    res.json({
      success: true,
      message: "Prato adicionado com sucesso!"
    });
  } catch (error) {
    console.log(error)
    res.json({sucess:false,message:"Erro"})
  }

}

// lista de pratos

const listfood = async (req,res) => {
try {
    const foods = await foodModel.find({});
    res.json({success:true,data:foods})
} catch (error) {
    console.log(error);
    res.json({success:false,message:"Erro"})
}
}


// remover prato

const removeFood = async (req,res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, ()=>{})
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Prato removido"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Erro"})
        
    }
}


export {addFood,listfood,removeFood}