# Conway's game of life in P5
In the context of a generative art project I wanted to become familiar with the javascript library P5. P5 itself is based on the concept of making code accessible for artists, designers and educators. It is fortunately free or donation based and can be accessed [here](https://p5js.org/).
As an easy and yet fascinating example in automation theory I implemented Conway's game of life. 

A live demo can be seen here: https://mekiii.github.io/P5_conwayGame/


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

## Implementation

Sofar the implementation is quite simple. The first step of this algorithm is to generate a grid, that is filled randomly with 'living' cells. Afterwards the cell population evolves according to the above-mentioned rules.  

## Future ideas

There are several ideas I have in mind, to improve this application

[ ] Implementing a restart button 

[ ] Implementing genetic algorithms to optimize the random spread at the beginning

[ ] Classifying certain typical patterns

