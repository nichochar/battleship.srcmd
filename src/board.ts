export class Board {
  size: number;
  grid: string[][];

  constructor(size: number = 10) {
    this.size = size;
    this.grid = Array.from({ length: size }, () => Array(size).fill('~'));
  }

  printBoard(): void {
    console.log(this.grid.map(row => row.join(' ')).join('\n'));
  }
}