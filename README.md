# Conway's game of life in P5
In the context of a generative art school project I wanted to become familiar with the javascript library P5. P5 is a javascript library, that has the concept in mind to make code accessible for artists, designers and educators. It is fortunately free or donation based and can be accessed [here](https://p5js.org/).
As an easy and yet fascinating example in automation theory I implemented Conway's game of life. 


![Conways game of life](https://i.imgur.com/74rkACf.gif)

## About Conways game
Conways game of life is not an actual game, it is rather a simulation with four simple rules that describe how a cell population lives or dies. From these few rules exciting shapes and patterns emerge.

### The Rules

**For cells that are 'alive':**

- Each cell with less than 2 neighbors dies, as if by solitude.

- Each cell with 4 or more neighbors dies, as if by overpopulation.

- Each cell with 2 or 3 neighbors survives.

**For cells that are 'dead'**

- Each cell with 3 neighbors becomes populated.

With these four simple rules, a variety of complex structures emerge from certain initial patterns in the course of the game. Some remain unchanged, others oscillate, grow or fade. Some structures, so called gliders, move on the playing field. Furthermore for logical functions like AND and OR you can find initial patterns.  Even complex functions of the circuit logic and digital computer technology can be reconstructed.
