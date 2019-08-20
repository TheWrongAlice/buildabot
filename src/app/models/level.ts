import { Coordinates } from 'app/models/coordinates';
import { Instruction } from 'app/models/instruction';
import { Robot, Player } from 'app/models/robot';
import { Program } from 'app/models/program';

export class Level {
  id: number;
  title: string;
  description: string[]; // Each string is rendered as a <p>paragraph</p>
  boardSize: number;
  startPos: Coordinates;
  winPos: Coordinates;
  player: Player;
  enemies: Robot[];
  objects: any[];
  instructionSet: Instruction[];

  constructor(opts) {
    this.id = opts.id;
    this.title = opts.title || '';
    this.description = opts.description || [];
    this.boardSize = opts.boardSize;
    this.startPos = new Coordinates({x: opts.startPos.x, y: opts.startPos.y});
    this.winPos = new Coordinates({x: opts.winPos.x, y: opts.winPos.y});
    this.player = new Player({
      position: new Coordinates({x: opts.startPos.x, y: opts.startPos.y}),
      rotation: 0,
      program: new Program({}),
    });
    this.enemies = opts.enemies || [];
    this.objects = opts.objects || [];
    this.instructionSet = opts.instructionSet || [];
  }

  copy() {
    return new Level(this);
  }
}
