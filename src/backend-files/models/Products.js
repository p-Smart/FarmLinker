const mongoose = require('mongoose')
const Schema = mongoose.Schema

const generalConfig = {
    type: String,
    required: true
}

const ProductsModel = new Schema({
    productName: generalConfig,
    description: generalConfig,
    category: generalConfig,
    price: generalConfig,
    availQuantity: generalConfig,
    images: {
        type: Array,
        required: true
    },
    farmer_id: generalConfig,
  })

const Products = mongoose.models.Products ||  mongoose.model('Products', ProductsModel)

export default Products