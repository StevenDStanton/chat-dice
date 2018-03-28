"use strict"



function rollDice (message) {
	var min = 1;
	var mod = 0;
	var rollString = " rolled: ";
    var dice = message.match(/^\d+|\d+\b|\d+(?=\w)/g);
    var flags = message.match(/-+[a-z]{1}\s?\d+\s?/g);
    for(var item in flags){
    	if(flags[item].indexOf('-l') == 0){
    		min = flags[item].match(/^\d+|\d+\b|\d+(?=\w)/g)[0]
    	}

    	if(flags[item].indexOf('-m') == 0){
    		mod = flags[item].match(/^\d+|\d+\b|\d+(?=\w)/g)[0]
    	}

    }
    for (var i = 0; i < dice[0]; i++) {
        rollString += (getRandomInt(parseInt(min), dice[1]) + parseInt(mod)) + " ";
    }
    rollString += flags != null ? "(" : ""
    rollString += mod ? "+" + mod + " Roll Modifier" : "";
    rollString += flags != null ? " | " : ""
    rollString += min != 1 ? "+" + min + " Lower Limit" : "";
    rollString += flags != null ? ")" : ""
    return rollString;
}


function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


module.exports = {
  rollDice: rollDice,
  getRandomInt: getRandomInt,

};