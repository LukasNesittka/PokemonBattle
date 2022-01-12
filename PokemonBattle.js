class pokemon {
    constructor(name,animal,hp,speed,defense,attack,specialAttack){
        this.name = name;
        this.animal = animal;
        this.hp = hp;
        this.speed = speed;
        this.defense = defense;
        this.attack = attack;
        this.specialAttack = specialAttack;
    }
    pokemonCry(){
        let vowels = ['a','e','i','o','u']
        let cry = this.name.split('')
        let soundArray = [];

        let startInd = 0;

        for(let j = 0;j < cry.length;j++){
            if(vowels.includes(cry[j].toLowerCase())){
                soundArray.push(cry.slice(startInd, j + 1).join(''))

                startInd = j + 1
            }
        }
        let pokemonShout = soundArray.splice(0,2).join('')
        let pokemonCry = `${pokemonShout} ${pokemonShout.toLowerCase()} ${this.name}`
        return pokemonCry
}
}
let theBattleBegins = false;
let bulbasaur = new pokemon('Bulbasaur','Bulb',130,20,30,15,60)
let pikachu = new pokemon('Pikachu','Mouse',100,40,20,20,45)
let charmander = new pokemon('Charmander','Salamander',115,25,25,30,30)
let squirtle = new pokemon('Squirtle','Turtle',140,10,35,15,40)
let availablePokemon = [bulbasaur.name,pikachu.name,charmander.name,squirtle.name]
function whosThatPokemon(name){
    if(name.toLowerCase() === bulbasaur.name.toLowerCase()){
        return bulbasaur;
    } else if(name.toLowerCase() === pikachu.name.toLowerCase()){
        return pikachu;
    } else if(name.toLowerCase() === charmander.name.toLowerCase()){
        return charmander;
    } else if(name.toLowerCase() === squirtle.name.toLowerCase()){
        return squirtle;
    } else {
        console.log("That's no Pokemon.")
    }
}
// console.log(pikachu.pokemonCry())
// console.log(bulbasaur.pokemonCry())
// console.log(pikachu)
// console.log(bulbasaur)
console.log("Welcome to the world of Pokemon!\nYour adventure awaits, choose your Pokemon!")

const { read } = require('fs');
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.question(`Your roster is: \nBulbasaur\nPikachu\nSquirtle\nCharmander\n`, function theIntro(input){ 
    
    for(i = 0;i < availablePokemon.length; i++){
        if(input === availablePokemon[i]){
            let chosenPokemon = whosThatPokemon(availablePokemon[i]);
            console.log(`You chose ${chosenPokemon.name}, the ${chosenPokemon.animal} Pokemon\nIts stats are:\n
HP: ${chosenPokemon.hp}\n
Speed: ${chosenPokemon.speed}\n
Defense: ${chosenPokemon.defense}\n
Attack: ${chosenPokemon.attack}\n
Special Attack: ${chosenPokemon.specialAttack}`)
            reader.question(`Are you sure you want to pick ${chosenPokemon.name}?\nY? N?`, function(input){
                
                if(input === "Y"){
                    console.log("Let the battle begin!")
                    reader.close(theBattleBegins == true)                   
                } else if(input === "N"){
                    console.log("Thanks for playing!")
                    reader.close()
                } else {
                    console.log("Thanks for playing!")
                    reader.close()
                }
        });
    }    
    }
});
if(theBattleBegins == true){
    console.log("You did it!")
}