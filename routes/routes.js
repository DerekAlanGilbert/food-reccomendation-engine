const express = require('express')
const got = require('got')
const network = require('../network/index')
const router = express.Router()

router.get('/', (req, res) => {
	res.send({
		author: 'The Good Bois',
		api: 'Food Sience Service',
		version: '0.0.1'
	})
})

router.post('/barcode', async (req, res) => {
	const { barcode } = req.body
	try {
		const response = await got(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)

		const body = JSON.parse(response.body)

		const { nutriments, product_name } = body.product

		const result = network.run({ carbs: nutriments.carbohydrates, fiber: nutriments.fiber })

		return res.status(200).send({
			product_name,
			barcode,
			result,
			nutriments
		})
	} catch (error) {
		res.status(400).send({ msg: 'Looks like something went wrong', error })
	}
})

module.exports = router
