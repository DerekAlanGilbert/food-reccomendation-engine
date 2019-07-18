const brain = require('brain.js')
// bring in training data
const trainingData = require('../data/training.js')
// initialize NeuralNetwork
const network = new brain.NeuralNetwork()
// train NeuralNetwork on what a good carb/fiber ratio is 5/1
network.train(trainingData)
// export network
module.exports = network
