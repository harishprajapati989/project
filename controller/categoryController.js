const categoryModel = require('../model/categoryModel')
const productModel = require('../model/productModel')


module.exports = {
    addCategory: async (req,res)=>{
        let getCategory = await categoryModel.findOne({categoryName:req.body.categoryName, isDeleted:false})
        if(getCategory){
            return res.send({ responseCode: 404, responseMessage: "category already exits" })
        }
        else{
            let saveCategory = await new categoryModel(req.body).save()
            if(saveCategory){
               return res.send({ responseCode: 200, responseMessage: "category saved successfully", saveCategory })   
            }
            else{
                return res.send({ responseCode: 500, responseMessage: "internal server error" }) 
            }
        }
    },

    deleteCategory:async (req,res)=>{
      var getCategory = await categoryModel.findOneAndUpdate({_id:req.body.categoryId,isDeleted:false},{$set:{isDeleted:true}},{new:true})
      if(getCategory){
          var deleteProduct = await productModel.updateMany({categoryId:getCategory._id, isDeleted:false},{$set:{isDeleted:true}},{multi:true})
          if(deleteProduct){
            return res.send({ responseCode: 200, responseMessage: "product delete successfully", deleteProduct }) 
          }
      }  
      else{
        return res.send({ responseCode: 500, responseMessage: "category deleted", getCategory }) 
      }
    }

}