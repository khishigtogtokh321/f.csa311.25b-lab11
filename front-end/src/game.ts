interface GameState {
  cells: Cell[];
  winner: string | null;
  turn: string | null;
  draw: boolean;
  winningLine: number[] | null;
}

interface Cell {
  text: string;
  playable: boolean;
  x: number;
  y: number;
}

export type { GameState, Cell }