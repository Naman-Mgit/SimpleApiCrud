import Product from "../models/mongoose.model.js";

const getProducts = async (req, res) => {
    try {
        const data = await Product.find({})
        return res.status(200).json(data);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
const getProduct=async (req,res)=>{
       try {
         
          const data=await Product.findById(req.params.id);
          if(!data){
              return res.status(404).send("Product does not exist");
          }
          res.status(200).json(data);
       } catch (error) {
             res.status(404).json({message:error.message});
       }
}

const createProduct=async (req,res)=>{
     try {
         const product=await Product.create(req.body)
         res.status(200).json(product);
       
     } catch (error) {
        res.status(404).json({message:error.message});
     }
}

const updateProduct=async (req,res)=>{
    try {
        const data=await Product.findByIdAndUpdate(req.params.id,req.body);
        if(!data){
            return res.status(404).send("Product does not exist");
        }
        res.status(200).json(data);
    } catch (error) {
            res.status(404).json({message:error.message});
    }
}

const deleteProduct=async (req,res)=>{
     try {
         const pro=await Product.findByIdAndDelete(req.params.id);
         if(!pro){
             return res.status(404).send("Product does not exist");
         }
         res.status(200).send("Product has been deleted")
     } catch (error) {
        res.status(404).json({message:error.message})
     }
}

export {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}