import foodCategories from './food'

// Dictionary for testing purposes
// every amount of kcal is per 100 pounds
const foodDict = {
    Fruits: {
        Apple: ["Apple", 52],
        Banana: ["Banana", 88],
        Peach: ["Peach", 41],
        Mango: ["Mango", 57],
        Raspberry: ["Raspberry", 34],
        Strawberry: ["Strawberry", 32],
        Watermelon: ["Watermelon", 38],
        Pear: ["Pear", 55],
        Tangerine: ["Tangerine", 46],
        Kiwi: ["Kiwi", 51],
    },
    Vegetables: {
        Peas: ["Peas", 82],
        Potato: ["Potato", 86],
        Corn: ["Corn", 108],
        Paprika: ["Paprika", 21],
        Zucchini: ["Zucchini", 20],
        Cucumber: ["Cucumber", 15],
        Mushroom: ["Mushroom", 22],
        Bean: ["Bean", 25],
        Broccoli: ["Broccoli", 35],
        Avocado: ["Avocado", 165],
    },
    Grain: {
        Spelt: ["Spelt", 332],
        BarleyFlour: ["BarleyFlour", 340],
        Oatmeal: ["Oatmeal", 366],
        MilletPorridge: ["MilletPorridge", 120],
        Linseed: ["Linsseed", 514],
        BrownRice: ["BrownRice", 352],
        Came: ["Came", 478],
        Couscous: ["Couscous", 345],
        Amaranth: ["Amaranth", 393],
        SemolinaDumplings: ["SemolinaDumplings", 357],
        SteamedNoodles: ["SteamedNoodles", 212],
        Maccaroni: ["Maccaroni", 168],
        PenneRigate: ["PenneRigate", 358],
        Ravioli: ["Ravioli", 73],
        Spaghetti: ["Spaghetti", 350],
        Tortellini: ["Tortellini", 187],
    },
    Milk: {
        Gouda: ["Gouda", 326],
        LowfatQuark: ["LowfatQuark", 67],
        Cream: ["Cream",204],
        Babybel: ["Babybel",302],
        CremeFraiche: ["CremeFraiche", 292],
        LowfatYogurt: ["LowfatYogurt", 44],
        HighfatYogurt: ["HighfatYogurt", 61],
        Edamer: ["Edamer", 251],
        MountainCheese: ["MountainCheese", 401],
        Mozzarella: ["Mozzarella", 300],
    },
    MeatFishEggs: {
        Trout: ["Trout", 50],
        Pike: ["Pike", 50],
        Bratwurst: ["Bratwurst", 375],
        Duck: ["Duck", 375],
        FilletOfBeef: ["FilletOfBeef", 115],
        PorkMeat: ["PorkMeat", 171],
        Egg: ["Egg", 155],
        Salmon: ["Salmon", 137],
        Lamb: ["Lamb", 178],
        Bacon: ["Bacon", 645],
    },
    Sweets: {
        Hanuta: ["Hanuta", 2216],
        Cookies: ["Cookies", 1806],
        KinderCountry: ["KinderCountry", 2326],
        MAndMs: ["MAndMs", 2031],
        Milchschnitte: ["Milchschnitte", 1750],
        KitKat: ["KitKat", 520],
        Merci: ["Merci", 564],
        Milkyway: ["Milkyway", 449],
        Oreo: ["Oreo", 471],
        Snickers: ["Snickers", 506],
        Toffifee: ["Toffifee", 514],
    },
};

// Driver function that loops through the user-input and accumulates the results
export default function computeCalories(gender, age, foodTable) {
    console.log("Start")
    const caloryAmount = findCaloryAmount(gender, age);

    var total = 0;
    for (const key in foodTable) {
        if (foodTable.hasOwnProperty(key)) {
            total += foodTable[key]
        }
    }
    var result = {};
    for (const key in foodTable) {
        if (foodTable.hasOwnProperty(key)) {
            result[key] = getCalories(key, foodTable[key], total, caloryAmount);
            console.log(result)
        }
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
    const percentage = Math.floor(total / amount);
    const caloriesInCategory = (percentage * caloryAmount) * 14; // Amount of kcal we need to find food for in this category for up to two weeks
    var calories = 0;
    var result = {};
    while (true) {
        if (calories < caloriesInCategory)  {
            const keys = Object.keys(foodDict[category]);
            const subDict = foodDict[category];
            const randomElement = subDict[keys[ [keys.length * Math.random() << 0] ]]
            calories += randomElement[1];

            if (result.hasOwnProperty(randomElement[0])) { // find a better way to do this in javascript to avoid doing the if-check in every iteration
                result[randomElement[0]] += 1
            } else {
                result[randomElement[0]] = 1
            }
        } else {
            break
        }
    }
    return result
}

const dict = {"Fruits": 10, "Vegetables": 100, "Grain": 100, "Milk": 100, "MeatFishEggs": 100, "Sweets": 100}
computeCalories("female", 38, dict)
