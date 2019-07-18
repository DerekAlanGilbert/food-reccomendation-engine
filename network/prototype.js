const boxen = require('boxen')
const brain = require('brain.js')
const log = require('../lib/logger')
const protoTrainingData = require('../data/prototype-data.js')
const network = new brain.NeuralNetwork()

network.train(protoTrainingData)

const result = network.run({
	carbs: 70,
	sugar: 3,
	fiber: 29,
	toatlFat: 4,
	satFat: 3.5,
	transFat: 0,
	protien: 15
})

const { shouldEat, shoudntEat } = result

log(
	boxen(
		`
    should: ${shouldEat.toFixed(2) * 100}%,
    shouldnt: ${shoudntEat.toFixed(2) * 100}%`,
		{
			padding: 1,
			borderColor: '#58dbc2',
			borderStyle: 'double'
		}
	)
)
