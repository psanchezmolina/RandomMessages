// Strings used to generate the sentences, all saved inside an array
const olimpicAthletes = ["Mariana Pajón", "Michael Phelps", "Paavo Nurmi", "Saul Craviotto"];
const olimpicResults = ["two times olympic gold in BMX Racing", "the athlete with the most olympic medals, 28", "olympic running legend with 12 medals", "spanish athlete with the most medals"];
const olimpicEvents = ["200m freestyle (swimming)", "BMX Freestyle", "triple jump", "table tennis", "park skating"];
const thoughts = ["I think he/she", "I am sure", "That would be awesome if", "I don't see"];
const results = ["will do great", "will be a great show", "could be good with some practice"];

// The function that generates random numbers
const getRandom = arr => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

// This function grabs one of the elements out of each array and generates the message
const generateJokes = arr => {
    const olimpicAthlete = getRandom(olimpicAthletes);
    let olimpicResult = getRandom(olimpicResults);
    let olimpicEvent = getRandom(olimpicEvents);
    let thought = getRandom(thoughts);
    let result = getRandom(results);
    return `Can you imagine ${olimpicAthlete}, ${olimpicResult}, participating in ${olimpicEvent} in Paris 2024? ${thought} ${result}`;
}

// Printing the results to the console
console.log(generateJokes());