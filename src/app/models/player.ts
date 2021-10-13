import { Tile } from "./tile";

export class Player {

  name: string = '';
  current: number = 0;
  color!: string;
  turn!: boolean;
  currentTile!: Tile;

  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
    this.turn = false;
  }

  turnOn() {
    this.turn = true;
  }

  turnOff() {
    this.turn = false;
  }

  setCurrent(current: number, currentTile: Tile) {
    this.current = current;
    this.currentTile = currentTile;
  }

  reset(){
    this.current = 0;
    this.turn = false;
  }
}