// Mixed both athletes and their result under the same object to be able to fix their name and result when generating a random comment
const athletes = [
    {name: "Mariana Pajón", achievement: "two times olympic gold in BMX Racing"},
    {name: "Michael Phelps", achievement: "the athlete with the most olympic medals, 28"},
    {name: "Paavo Nurmi", achievement: "olympic running legend with 12 medals"},
    {name: "Saul Craviotto", achievement: "spanish athlete with the most medals"},
    {name: "Usain Bolt", achievement: "fastest man in the world with 8 olympic gold medals in sprinting"},
    {name: "Simone Biles", achievement: "most decorated gymnast, with 19 Olympic and World Championship medals"},
    {name: "Lindsey Vonn", achievement: "one of the best female skiers with a gold and a bronze medal in Olympics"},
    {name: "Roger Federer", achievement: "tennis legend with an Olympic gold in doubles and a silver in singles"},
    {name: "Lionel Messi", achievement: "renowned football player with an Olympic gold medal in 2008"}
]

// Strings used to generate the sentences, all saved inside an array
const olimpicEvents = ["200m freestyle (swimming)", "BMX Freestyle", "triple jump", "table tennis", "park skating","400m hurdles (track and field)", "weightlifting (105 kg category)", "rhythmic gymnastics (individual)", "beach volleyball", "canoe sprint (K-4 1000m)"];
const thoughts = ["I think he/she", "I am sure", "That would be awesome if", "I don't see", "It'd be a wonder if", "I'd pay to see how", "I wouldn't bet on it, but", "I wonder if", "It'd be a sight to see if"];
const results = ["will do great", "will be a great show", "could be good with some practice", "would surprise us all", "could really shake things up", "would definitely draw a crowd", "might just set a new record", "could inspire a new generation of athletes"];

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
    return `Can you imagine ${athlete.name}, ${athlete.achievement}, participating in ${olimpicEvent} in Paris 2024? ${thought} ${result}`;
}

// Printing the results to the console
console.log(generateScenario());