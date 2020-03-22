// import foodCategories from './food'

// Dictionary for testing purposes
// every amount of kcal is per 100 pounds
const foodDict = {
    Fruits: {
        Apple: 52,
        Banana: 88,
        Peach: 41,
        Mango: 57,
        Raspberry: 34,
        Strawberry: 32,
        Watermelon: 38,
        Pear: 55,
        Tangerine: 46,
        Kiwi: 51,
    },
    Vegetables: {
        Peas: 82,
        Potato: 86,
        Corn: 108,
        Paprika: 21,
        Zucchini: 20,
        Cucumber: 15,
        Mushroom: 22,
        Bean: 25,
        Broccoli: 35,
        Avocado: 165,
    },
    Grain: {
        Spelt: 332,
        BarleyFlour: 340,
        Oatmeal: 366,
        MilletPorridge: 120,
        Linseed: 514,
        BrownRice: 352,
        Came: 478,
        Couscous: 345,
        Amaranth: 393,
        SemolinaDumplings: 357,
        SteamedNoodles: 212,
        Maccaroni: 168,
        PenneRigate: 358,
        Ravioli: 73,
        Spaghetti: 350,
        Tortellini: 187,
    },
    Milk: {
        Gouda: 326,
        LowfatQuark: 67,
        Cream: 204,
        Babybel: 302,
        CremeFraiche: 292,
        LowfatYogurt: 44,
        HighfatYogurt: 61,
        Edamer: 251,
        MountainCheese: 401,
        Mozzarella: 300,
    },
    MeatFishEggs: {
        Trout: 50,
        Pike: 50,
        Bratwurst: 375,
        Duck: 375,
        FilletOfBeef: 115,
        PorkMeat: 171,
        Egg: 155,
        Salmon: 137,
        Lamb: 178,
        Bacon: 645,
    },
    Sweets: {
        Hanuta: 2216,
        Cookies: 1806,
        KinderCountry: 2326,
        MAndMs: 2031,
        Milchschnitte: 1750,
        KitKat: 520,
        Merci: 564,
        Milkyway: 449,
        Oreo: 471,
        Snickers: 506,
        Toffifee: 514,
    },
};

// Driver function that loops through the user-input and accumulates the results
function computeCalories(gender, age, foodTable) {
    console.log("Start")
    const caloryAmount = findCaloryAmount(gender, age);
    const total = Object.values(foodTable).reduce((a,b) => a + b, 0);

    var result = {};
    for (const key in foodTable) {
        result[key] = getCalories(key, foodTable[key], total, caloryAmount);
        console.log(result)
    }

    return result
}


// finds the correct amount of calories corresponding to the user's age and gender
function findCaloryAmount(gender, age) {
    var caloryAmount;
    switch (gender) {
        case gender === "male" && age > 15 && age < 25:
            caloryAmount = 2500;
            break;
        case gender === "male" && age >= 25 && age < 51:
            caloryAmount = 2400;
            break;
        case gender === "male" && age >= 51 && age < 65:
            caloryAmount = 2200;
            break;
        case gender === "male" && age >= 65:
            caloryAmount = 2000;
            break;
        case gender === "female" && age > 15 && age < 19:
            caloryAmount = 2000;
            break;
        case gender === "female" && age >= 19 && age < 51:
            caloryAmount = 1900;
            break;
        case gender === "female" && age >= 51 && age < 65:
            caloryAmount = 1800;
            break;
        case gender === "female" && age >= 65:
            caloryAmount = 1600;
            break;
        default:
            caloryAmount = 2000

    }

    return caloryAmount

}


// computes the necessary amount of calories for each category
function getCalories(category, amount, total, caloryAmount) {
    const percentage = (amount / total);
    const caloriesInCategory = (percentage * caloryAmount) * 14; // Amount of kcal we need to find food for in this category for up to two weeks (hence the 14)
    var calories = 0;
    var result = {};
    while (calories < caloriesInCategory)  {
            const keys = Object.keys(foodDict[category]);
            const subDict = Object.entries(foodDict[category]);
            console.log(subDict)
            const randomElement = subDict[keys[ [keys.length * Math.random() << 0] ]];
            console.log(keys)
            calories += randomElement[1]; // BUG: keys sind die strings und es müssten zahlen sein damits funktioniert ( da subDict arrays sind ex. : [ 'Apple', 52 ] und der key 'Apple' wär )

            if (result.hasOwnProperty(randomElement[0])) { // find a better way to do this in javascript to avoid doing the if-check in every iteration
                result[randomElement[0]] += 1
            } else {
                result[randomElement[0]] = 1
            }
    }
    return result
}

const dict = {"Fruits": 10, "Vegetables": 100, "Grain": 100, "Milk": 100, "MeatFishEggs": 100, "Sweets": 100}
computeCalories("female", 38, dict)
