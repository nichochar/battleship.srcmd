import { Player } from './player.ts';
import { Ship } from './ship.ts';
import * as fs from 'fs';

export enum GameState {
  Initializing = 'initializing',
  Playing = 'playing',
  Finished = 'finished'
}

export class Game {
  players: Player[];
  currentPlayerIndex: number;
  saveFile: string;
  state: GameState;

  constructor(playerNames: string[], boardSize: number = 10, saveFile: string = 'gameState.json') {
    this.players = playerNames.map(name => new Player(name, boardSize));
    this.currentPlayerIndex = 0;
    this.saveFile = saveFile;
    this.state = GameState.Initializing;
  }

  start(): void {
    console.log("Game started!");
    this.printBoards();
    this.saveState();
  }

  nextTurn(x: number, y: number): 'hit' | 'miss' {
    if (this.state === GameState.Initializing) {
      console.log("Cannot proceed to next turn. Ships are still being placed.");
      return 'miss';
    }

    const opponentIndex = (this.currentPlayerIndex + 1) % this.players.length;
    const opponent = this.players[opponentIndex];
    const hit = opponent.ships.some(ship => 
      ship.positions.some(pos => pos.x === x && pos.y === y)
    );

    if (hit) {
      opponent.board.grid[y][x] = 'X';
      console.log(`Hit at (${x}, ${y})!`);
    } else {
      opponent.board.grid[y][x] = 'O';
      console.log(`Miss at (${x}, ${y}).`);
    }

    this.currentPlayerIndex = opponentIndex;
    console.log(`It's ${this.players[this.currentPlayerIndex].name}'s turn.`);
    this.printBoards();
    this.saveState();

    return hit ? 'hit' : 'miss';
  }

  checkWin(): boolean {
    // Placeholder for win condition logic
    return false;
  }

  saveState(): void {
    const state = {
      players: this.players.map(player => ({
        name: player.name,
        board: player.board.grid,
        ships: player.ships.map(ship => ({
          size: ship.size,
          positions: ship.positions
        }))
      })),
      currentPlayerIndex: this.currentPlayerIndex,
      state: this.state
    };
    fs.writeFileSync(this.saveFile, JSON.stringify(state, null, 2));
  }

  loadState(): void {
    if (fs.existsSync(this.saveFile)) {
      const state = JSON.parse(fs.readFileSync(this.saveFile, 'utf-8'));
      this.players = state.players.map((playerState: any) => {
        const player = new Player(playerState.name, playerState.board.length);
        player.board.grid = playerState.board;
        player.ships = playerState.ships.map((shipState: any) => {
          const ship = new Ship(shipState.size);
          ship.positions = shipState.positions;
          return ship;
        });
        return player;
      });
      this.currentPlayerIndex = state.currentPlayerIndex;
      this.state = state.state;
    }
  }

  allShipsPlaced(): boolean {
    return this.players.every(player => player.ships.length > 0);
  }

  updateGameState(): void {
    if (this.state === GameState.Initializing && this.allShipsPlaced()) {
      this.state = GameState.Playing;
    } else if (this.state === GameState.Playing && this.checkWin()) {
      this.state = GameState.Finished;
    }
    this.saveState();
  }

  printBoards(): void {
    this.players.forEach(player => {
      console.log(`${player.name}'s board:`);
      player.board.printBoard();
    });
  }
}