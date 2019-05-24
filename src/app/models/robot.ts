import { Coordinates } from 'app/models/coordinates';
import { Program } from 'app/models/program';

export class Robot {
  position: Coordinates;
  rotation: number;
  program: Program;
  type: string;

  constructor(opts) {
    this.position = new Coordinates({x: opts.position.x, y: opts.position.y});
    this.rotation = opts.rotation;
    this.program = opts.program || new Program({});
    this.type = opts.type;
  }

  /*
   * Functions for moving the robot token
   */
  move(distance) {
    const r = this.rotation % 360;
    if (r === 0) {
      this.position.y -= distance;
    }
    else if (r === 90) {
      this.position.x += distance;
    }
    else if (Math.abs(r) === 180) {
      this.position.y += distance;
    }
    else {
      this.position.x -= distance;
    }
  }
  moveForward() {
    this.move(1);
  }
  moveSprint() {
    this.move(2);
  }
  moveBackward() {
    this.move(-1);
  }

  /*
   * Functions for turning the robot token
   */
  turnLeft() {
    this.rotation -= 90;
  }
  turnRight() {
    this.rotation += 90;
  }
  turnAround() {
    this.rotation -= 180;
  }

  /*
   * Miscellaneous
   */
  sleep() {
    // do nothing
  }
}
