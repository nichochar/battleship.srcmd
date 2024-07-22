export class Ship {
  size: number;
  positions: { x: number, y: number }[];

  constructor(size: number) {
    this.size = size;
    this.positions = [];
  }

  place(x: number, y: number, direction: 'horizontal' | 'vertical', boardSize: number = 10): void {
    this.positions = [];
    for (let i = 0; i < this.size; i++) {
      const newX = direction === 'horizontal' ? x + i : x;
      const newY = direction === 'vertical' ? y + i : y;

      if (newX >= boardSize || newY >= boardSize) {
        throw new Error('Ship placement is out of bounds');
      }

      this.positions.push({ x: newX, y: newY });
    }
  }
}