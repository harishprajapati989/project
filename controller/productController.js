const productModel = require('../model/productModel')
const categoryModel = require('../model/categoryModel')
      

module.exports = {
    addProduct: async (req, res) => {
        let getCategory = await categoryModel.findOne({ _id: req.body.categoryId, isDeleted:false})
        if (getCategory) {
            let getProduct = await productModel.findOne({ productName: req.body.productName })
            if (getProduct) {
                return res.send({ responseCode: 404, responseMessage: "product already exits" })
            }
            else {
                let saveProduct = await new productModel(req.body).save()     
                if (saveProduct) {
                    return res.send({ responseCode: 200, responseMessage: "product saved successfully", saveProduct })
                }
                else {
                    return res.send({ responseCode: 500, responseMessage: "internal server error" })
                }
            }
        }
        else{
            return res.send({ responseCode: 404, responseMessage: "category not found" }) 
        }

    }
}