module.exports = [
	{
		input: { carbs: 40, sugar: 5, fiber: 0, toatlFat: 4, transFat: 3.5, transFat: 0, protien: 7 },
		output: { shouldEat: 0, shoudntEat: 1 }
	},
	{
		input: { carbs: 20, sugar: 5, fiber: 5, toatlFat: 5, satFat: 3.5, transFat: 0, protien: 10 },
		output: { shouldEat: 1, shoudntEat: 0 }
	},
	{
		input: { carbs: 10, sugar: 0, fiber: 5, toatlFat: 5, satFat: 3.5, transFat: 0, protien: 14 },
		output: { shouldEat: 1, shoudntEat: 0 }
	},
	{
		input: { carbs: 24, sugar: 6, fiber: 5, toatlFat: 5, satFat: 3.5, transFat: 0, protien: 8 },
		output: { shouldEat: 1, shoudntEat: 0 }
	},
	{
		input: { carbs: 52, sugar: 5, fiber: 4, toatlFat: 4, transFat: 3.5, transFat: 0, protien: 7 },
		output: { shouldEat: 0, shoudntEat: 1 }
	},
	{
		input: { carbs: 32, sugar: 14, fiber: 3, toatlFat: 4, transFat: 3.5, transFat: 0, protien: 7 },
		output: { shouldEat: 0, shoudntEat: 1 }
	},
	{
		input: { carbs: 32, sugar: 9, fiber: 15, toatlFat: 4, transFat: 3.5, transFat: 0, protien: 10 },
		output: { shouldEat: 1, shoudntEat: 0 }
	}
]
