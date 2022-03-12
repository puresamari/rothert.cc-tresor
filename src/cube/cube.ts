import {
  BufferAttribute,
  BufferGeometry,
  Clock,
  InterleavedBufferAttribute,
  SphereBufferGeometry,
  TorusBufferGeometry,
  Vector2,
  Vector3,
} from "three";
import { ImprovedNoise } from "three/examples/jsm/math/ImprovedNoise.js";
import * as math from "mathjs";

let clock = new Clock();

export class Anim extends SphereBufferGeometry {
  mode = 0;
  perlin = new ImprovedNoise();
  vUv = new Vector2();
  pos: BufferAttribute;
  posOrig: BufferAttribute;
  uv: BufferAttribute;

  constructor() {
    super(3, 50, 50);
    this.pos = this.attributes.position as BufferAttribute;
    this.posOrig = this.pos.clone();
    this.uv = this.attributes.uv as BufferAttribute;
  }

  update() {
    let t = clock.getElapsedTime();
    const y = Math.sin(t);
    const x = Math.cos(t);
    const scene1 = Math.min(1, math.nthRoot(5 - this.mode, 3) as number);
    for (let i = 0; i < this.pos.count; i++) {
      this.vUv.fromBufferAttribute(this.uv, i).multiplyScalar(this.mode);
      const ty = this.posOrig.getY(i);
      const tx = this.posOrig.getX(i);
      this.pos.setY(
        i,
        ty *
          Math.min(3, 1 + Math.abs((((tx - x) / (2.3 - this.mode)) * 2) / 10)) *
          scene1
      );
      this.pos.setX(i, tx * (1 + Math.abs(ty - y) / (1 + this.mode) / 5));
    }
    this.pos.needsUpdate = true;
  }
}
