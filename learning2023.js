const cl = console.log;

cl(Math.round(5) * 10);

let d = new Date 
cl(new Date("1/1/2023"));

cl(new Date("2/8/2007"));

function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
}  
cl( randomNumber(1, 1000) );

let myGames = ['Arma', 'Insurgency'];
let games = myGames[Math.floor(Math.random() * myGames.length)];
cl(games);
