// Strings used to generate the sentences, all saved inside an array
const olimpicAthlete = ["Mariana Pajón", "Michael Phelps", "Paavo Nurmi", "Saul Craviotto"];
const olimpicResult = ["two times olympic gold in BMX Racing", "the athlete with the most olympic medals, 28", "olympic running legend with 12 medals", "spanish athlete with the most medals"];
const olimpicEvent = ["200m freestyle (swimming)", "BMX Freestyle", "triple jump", "table tennis", "park skating"];
const thought = ["I think he/she", "I am sure", "That would be awesome if", "I don't see"];
const result = ["will do great", "will be a great show", "could be good with some practice"];

// The function that generates random numbers
const generateJokes = arr => {

    return `Can you imagine ${olimpicAthlete}, ${olimpicResult}, participating in ${olimpicEvent} in Paris 2024? ${thought} ${result}`;
}

// Printing the results to the console
console.log(generateJokes());