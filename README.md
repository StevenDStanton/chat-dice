#Chat Dice
A small and simple random number generator with flags to change the lowest possible number and add a modifier to rolls.

##Installation
`npm i chat-dice`

##Usage
`/* Import the library */
var dice = require('chat-dice');`

`/* Roll dice standard */
dice.rollDice('2d20') //Will roll 2d20 with a possible outcome between 1 and 20`

`/* Roll dice with a lower limit */
dice.rollDice('2d20 -l 5') //Will roll 2d20 with a possible outcome between 5 and 20`

`/* Roll dice with a modifier */
dice.rollDice('2d20 -m 5') //Will roll 2d20 and add +5 to all dice`


##Tests
Coming Soon

##License
Copyright 2018 Steven D Stanton

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.