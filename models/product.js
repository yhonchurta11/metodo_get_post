/*imports*/
const mongoose = require('mongoose')
const Schema = mongoose.Schema

/*esquema del modelo*/
const ProductShema = Schema({
    name: String, 
    price: { type: Number, default: 0},
    category: {type: String, enum: ['foods', 'tech', 'home']},
    image: String

})

/*exportación del modelo*/
module.exports = mongoose.model('Product', ProductShema )