import { Board } from './board.ts';
import { Ship } from './ship.ts';

export class Player {
  name: string;
  board: Board;
  ships: Ship[];

  constructor(name: string, boardSize: number = 10) {
    this.name = name;
    this.board = new Board(boardSize);
    this.ships = [];
  }

  addShip(ship: Ship): void {
    this.ships.push(ship);
  }
}