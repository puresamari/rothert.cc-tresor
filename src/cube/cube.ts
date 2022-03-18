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
  amplification = 0;

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
    const scene1 = Math.min(
      1,
      math.nthRoot(5 - Math.min(this.mode, 10), 3) as number
    );
    const scene2 = Math.max(0, this.mode - 9);
    const beatOrig = this.sceneCTL.Beat;
    const beat = this.sceneCTL.Beat * (0.5 + this.amplification * 0.5);
    const end = Math.min(1, Math.max(this.mode - 18, 0));
    const running = 1 - end;
    for (let i = 0; i < this.pos.count; i++) {
      this.vUv.fromBufferAttribute(this.uv, i).multiplyScalar(this.mode);
      const ty = this.posOrig.getY(i);
      const tx = this.posOrig.getX(i);
      const tz = this.posOrig.getZ(i);
      this.pos.setY(
        i,
        ty *
          Math.min(3, 1 + Math.abs((((tx - x) / (2.3 - this.mode)) * 2) / 10)) *
          scene1 -
          scene2 * Math.sin(this.mode)
      );
      this.pos.setX(
        i,
        (tx * (1 + Math.abs(ty - y) / (1 + this.mode) / 5) +
          (Math.sin(ty * 4 + (beatOrig * 0.75 + beat * 0.25) * 12) / 8) *
            Math.min(1, scene2)) *
          running +
          tx * end
      );
      this.pos.setZ(
        i,
        tz * (1 + Math.pow(beat, 2) * Math.max(0, scene1 / 2 - 0.25))
      );
    }
    this.pos.needsUpdate = true;
  }
}
