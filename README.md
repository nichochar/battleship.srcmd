<!-- srcbook:{"language":"typescript"} -->

# Battleship Game Engine

###### package.json

[package.json](./package.json)

## Introduction

In this srcbook, we'll build the basic scaffolding for a Battleship game engine using TypeScript. We'll create classes for the game loop, the board, the players, and their ships. This will set the foundation for future enhancements, such as integrating AI to generate moves.

## Game Board

The game board will be a grid where players place their ships and make their moves.

###### board.ts

[board.ts](./src/board.ts)

## Ship

A ship will have a size, a starting position, and a direction (horizontal or vertical).

###### ship.ts

[ship.ts](./src/ship.ts)

## Player

A player will have a board and a set of ships.

###### player.ts

[player.ts](./src/player.ts)

## Game Loop

The game loop will manage the turns and check for win conditions.

###### game.ts

[game.ts](./src/game.ts)

## Example Usage

Let's create an example to demonstrate how to use these classes, including setting up the game with a 6x6 grid and placing ships of lengths 1, 2, 3, and 4.

## Randomly Generated Boards

### Board 1
```
S ~ ~ ~ ~ ~
S S ~ ~ ~ ~
S S S ~ ~ ~
S S S S ~ ~
~ ~ ~ ~ ~ ~
~ ~ ~ ~ ~ ~
```

### Board 2
```
~ ~ ~ ~ ~ ~
~ ~ ~ ~ ~ ~
~ ~ ~ ~ ~ ~
S S S S ~ ~
S S S ~ ~ ~
S S ~ ~ ~ ~
S ~ ~ ~ ~ ~
```

###### example.ts

[example.ts](./src/example.ts)
