const express = require('express')
const got = require('got')
// const network = require('../network/index')
const Product = require('../models/Product')
const router = express.Router()

router.get('/', (req, res) => {
	res.send({
		author: 'The Good Bois',
		api: 'Food Sience Service',
		version: '0.0.1'
	})
})

router.post('/barcode', async (req, res) => {
	console.log('here1')

	const { barcode } = req.body
	try {
		const response = await got(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)

		const body = JSON.parse(response.body)
		console.log('here2')

		const { nutriments, product_name, ingredients, image_front_thumb_url } = body.product

		console.log(nutriments)

		const { sugars, carbohydrates, fat, fiber, proteins } = nutriments

		console.log('here4')

		// const result = network.run({ carbs: nutriments.carbohydrates, fiber: nutriments.fiber })

		product = new Product({
			product_name,
			barcode,
			nutriments: {
				sugars,
				carbohydrates,
				fat,
				fiber,
				proteins
			},
			ingredients,
			image_front_thumb_url,
			rating: 6,
			date: new Date()
		})
		console.log('here5')

		await product.save()

		res.json(product)
	} catch (error) {
		res.status(400).send({ msg: 'Looks like something went wrong', error })
	}
})

module.exports = router
