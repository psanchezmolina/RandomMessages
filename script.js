const athletes = [
    {name: "Mariana Pajón", result: "two times olympic gold in BMX Racing"},
    {name: "Michael Phelps", result: "the athlete with the most olympic medals, 28"},
    {name: "Paavo Nurmi", result: "olympic running legend with 12 medals"},
    {name: "Saul Craviotto", result: "spanish athlete with the most medals"},
]

// Strings used to generate the sentences, all saved inside an array
const olimpicEvents = ["200m freestyle (swimming)", "BMX Freestyle", "triple jump", "table tennis", "park skating"];
const thoughts = ["I think he/she", "I am sure", "That would be awesome if", "I don't see"];
const results = ["will do great", "will be a great show", "could be good with some practice"];

// The function that generates random numbers
const getRandom = arr => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

// This function grabs one of the elements out of each array and generates the message
const generateScenario = arr => {
    const athlete = getRandom(athletes);
    let olimpicEvent = getRandom(olimpicEvents);
    let thought = getRandom(thoughts);
    let result = getRandom(results);
    return `Can you imagine ${athlete.name}, ${athlete.result}, participating in ${olimpicEvent} in Paris 2024? ${thought} ${result}`;
}

// Printing the results to the console
console.log(generateScenario());