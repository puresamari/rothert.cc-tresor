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
import { SceneController } from "../scene-controller";

let clock = new Clock();

export class Anim extends SphereBufferGeometry {
  mode = 0;
  perlin = new ImprovedNoise();
  vUv = new Vector2();
  pos: BufferAttribute;
  posOrig: BufferAttribute;
  uv: BufferAttribute;

  constructor(private sceneCTL: SceneController) {
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
    const beat = this.sceneCTL.Beat;
    console.log(scene1);
    for (let i = 0; i < this.pos.count; i++) {
      this.vUv.fromBufferAttribute(this.uv, i).multiplyScalar(this.mode);
      const ty = this.posOrig.getY(i);
      const tx = this.posOrig.getX(i);
      const tz = this.posOrig.getZ(i);
      this.pos.setY(
        i,
        ty *
          Math.min(3, 1 + Math.abs((((tx - x) / (2.3 - this.mode)) * 2) / 10)) *
          scene1
      );
      this.pos.setX(i, tx * (1 + Math.abs(ty - y) / (1 + this.mode) / 5));
      this.pos.setZ(
        i,
        tz * (1 + Math.pow(beat, 2) * Math.max(0, scene1 / 2 - 0.25))
      );
    }
    this.pos.needsUpdate = true;
  }
}
