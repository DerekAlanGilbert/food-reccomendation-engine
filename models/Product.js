const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
	product_name: String,
	barcode: String,
	nutriments: {
		sugar: Number,
		carbohydrates: Number,
		fat: Number,
		saturated_fat_value: Number,
		trans_fat_value: Number,
		fiber: Number,
		proteins: Number
	},
	ingredients: Array,
	image_front_thumb_url: String,
	rating: Number,
	date: { type: String, default: Date.now }
})

module.exports = mongoose.model('Product', productSchema)
