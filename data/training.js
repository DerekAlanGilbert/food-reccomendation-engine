module.exports = [
	{ input: { carbs: 20, fiber: 10 }, output: { shouldEat: 1, shoudntEat: 0 } },
	{ input: { carbs: 20, fiber: 9 }, output: { shouldEat: 1, shoudntEat: 0 } },
	{ input: { carbs: 20, fiber: 8 }, output: { shouldEat: 1, shoudntEat: 0 } },
	{ input: { carbs: 20, fiber: 7 }, output: { shouldEat: 1, shoudntEat: 0 } },
	{ input: { carbs: 20, fiber: 6 }, output: { shouldEat: 1, shoudntEat: 0 } },
	{ input: { carbs: 20, fiber: 5 }, output: { shouldEat: 1, shoudntEat: 0 } },
	{ input: { carbs: 20, fiber: 4 }, output: { shouldEat: 0, shoudntEat: 1 } },
	{ input: { carbs: 20, fiber: 3 }, output: { shouldEat: 0, shoudntEat: 1 } },
	{ input: { carbs: 20, fiber: 2 }, output: { shouldEat: 0, shoudntEat: 1 } },
	{ input: { carbs: 20, fiber: 1 }, output: { shouldEat: 0, shoudntEat: 1 } },
	{ input: { carbs: 20, fiber: 0 }, output: { shouldEat: 0, shoudntEat: 1 } }
]
