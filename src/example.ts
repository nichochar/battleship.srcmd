import { Game } from './game.ts';
import { Ship } from './ship.ts';

const game = new Game(['Alice', 'Bob'], 6);
game.start();

// Alice's ships
const aliceShip1 = new Ship(1);
aliceShip1.place(0, 0, 'vertical');
game.players[0].addShip(aliceShip1);

const aliceShip2 = new Ship(2);
aliceShip2.place(0, 1, 'vertical');
game.players[0].addShip(aliceShip2);

const aliceShip3 = new Ship(3);
aliceShip3.place(0, 2, 'vertical');
game.players[0].addShip(aliceShip3);

const aliceShip4 = new Ship(4);
aliceShip4.place(0, 3, 'vertical');
game.players[0].addShip(aliceShip4);

// Bob's ships
const bobShip1 = new Ship(1);
bobShip1.place(3, 3, 'horizontal');
game.players[1].addShip(bobShip1);

const bobShip2 = new Ship(2);
bobShip2.place(2, 3, 'horizontal');
game.players[1].addShip(bobShip2);

const bobShip3 = new Ship(3);
bobShip3.place(1, 3, 'horizontal');
game.players[1].addShip(bobShip3);

const bobShip4 = new Ship(4);
bobShip4.place(0, 3, 'horizontal');
game.players[1].addShip(bobShip4);

game.updateGameState();

// Alice's turn - hit
game.nextTurn(0, 0);

// Bob's turn - miss
game.nextTurn(5, 5);