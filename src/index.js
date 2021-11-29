const names = [
    "Jinx",
    "Jayce",
    "Vi", 
    "Caitlyn",
    "Silco",
    "Ekko",
    "Vander",
    "Viktor"
];

const randomName = () => {
    const name = names[Math.floor(Math.random() * names.length)];
    console.log(name);
}

module.exports = { randomName };