import userModel from "../models/userModel.js"

// add items

const addCart = async (req,res) => {
  try {
      let userData = await userModel.findById(req.body.userId);
      let cartData = await userData.cartData;
      if (!cartData[req.body.itemId]) {
        cartData[req.body.itemId] = 1
      } else {
        cartData[req.body.itemId] += 1;
      }
      await userModel.findByIdAndUpdate(req.body.userId,{cartData})
      res.json({success:true,message:"Adicionado ao carrinho"})
  } catch (error) {
    console.log(error);
    res.json({success:false,message:"deu b.o"})
  }
}

// removendo items

const removeFromCart = async (req,res) => {
  try {
    let userData = await userModel.findById(req.body.userId)
    let cartData = await userData.cartData;
    if (cartData[req.body.itemId]>0) {
        cartData[req.body.itemId] -= 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId,{cartData});
    res.json({success:true,message:"Removendo do carrinho"})
  } catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
    
  }
}

// fetch cart data

const getCart = async (req,res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    res.json({succes:true,cartData})
  } catch (error) {
    console.log(error);
    res.json({succes:false,message:"Error"})
        
  }
}

export {addCart,removeFromCart,getCart}