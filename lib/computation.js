import foodCategories from './food';

// Driver function that loops through the user-input and accumulates the results
function computeCalories({ gender, age }, food) {
	console.log('Start');
	const caloryAmount = findCaloryAmount(gender, age);
	const total = Object.values(food).reduce((a, b) => a + b, 0);

	var result = {};
	for (const key in food) {
		result[key] = getCalories(key, food[key], total, caloryAmount);
	}

	console.log(result);

	return result;
}

// Finds the correct amount of calories corresponding to the user's age and gender
function findCaloryAmount(gender, age) {
	var caloryAmount;
	switch (gender) {
		case gender === 'male' && age > 15 && age < 25:
			caloryAmount = 2500;
			break;
		case gender === 'male' && age >= 25 && age < 51:
			caloryAmount = 2400;
			break;
		case gender === 'male' && age >= 51 && age < 65:
			caloryAmount = 2200;
			break;
		case gender === 'male' && age >= 65:
			caloryAmount = 2000;
			break;
		case gender === 'female' && age > 15 && age < 19:
			caloryAmount = 2000;
			break;
		case gender === 'female' && age >= 19 && age < 51:
			caloryAmount = 1900;
			break;
		case gender === 'female' && age >= 51 && age < 65:
			caloryAmount = 1800;
			break;
		case gender === 'female' && age >= 65:
			caloryAmount = 1600;
			break;
		default:
			caloryAmount = 2000;
	}

	return caloryAmount;
}

// Computes the necessary amount of calories for each category
function getCalories(category, amount, total, caloryAmount) {
	if (!amount) {
		return;
	}

	const percentage = amount / total;
	const caloriesInCategory = percentage * caloryAmount * 14; // Amount of kcal we need to find food for in this category for up to two weeks (hence the daily dose of kcal// * 14)
	var calories = 0;
	var result = {};
	while (calories < caloriesInCategory) {
		const keys = Object.keys(foodCategories[category].items);
		const subDict = Object.entries(foodCategories[category].items);
		console.log("Subdict", subDict);
		const randomElement = keys[[(keys.length * Math.random()) << 0]];
		const indexOfElement = keys.indexOf(randomElement)
		console.log(indexOfElement)
		console.log("Keys", keys);
		console.log("Random Element", randomElement)
		calories += subDict[indexOfElement][1]; // BUG: keys sind die strings und es müssten zahlen sein damits funktioniert ( da subDict arrays sind ex. : [ 'Apple', 52 ] und der key 'Apple' wär )

		if (result.hasOwnProperty(subDict[indexOfElement][0])) {
			// Find a better way to do this in javascript to avoid doing the if-check in every iteration
			result[subDict[indexOfElement][0]] += 100;
		} else {
			result[subDict[indexOfElement][0]] = 100;
		}
	}

	return result;
}

export default computeCalories;
