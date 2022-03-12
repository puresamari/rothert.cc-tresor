import { SceneController } from "./../scene-controller";
import { Anim } from "./cube";
import {
  BoxBufferGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshNormalMaterial,
  MeshPhongMaterial,
  PerspectiveCamera,
  Scene,
  Vector3,
  WebGLRenderer,
} from "three";

import { fromEvent, merge } from "rxjs";
import { map, distinctUntilChanged, tap } from "rxjs/operators";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export class Cube {
  scene = new Scene();
  cube: Anim;
  cubeMat: Anim;
  renderer: WebGLRenderer;
  camera: PerspectiveCamera;
  orbit: OrbitControls;

  size = [window.innerHeight / 2, window.innerHeight];

  constructor(
    public readonly canvas: HTMLCanvasElement,
    sceneCTL: SceneController,
    variant: number
  ) {
    const [width, height] = this.size;

    this.camera = new PerspectiveCamera(75, width / height, 0.1, 1000);

    this.orbit = new OrbitControls(this.camera, this.canvas);
    this.orbit.enableZoom = false;
    this.orbit.enablePan = false;
    this.orbit.enableDamping = true;
    this.orbit.enableRotate = false;
    this.orbit.autoRotate = true;
    this.orbit.target = new Vector3(0);

    this.renderer = new WebGLRenderer({ canvas, alpha: true });
    this.renderer.setSize(width, height);

    this.cube = new Anim();
    const cube = new Mesh(this.cube, new MeshNormalMaterial({}));
    this.scene.add(cube);
    this.camera.position.z = 10;
    this.camera.position.x = 5;
    this.camera.position.y = 5;
    this.camera.lookAt(0, 0, 0);
    this.update();

    merge(
      fromEvent(canvas, "mouseenter").pipe(map(() => 0.5)),
      fromEvent(canvas, "mousedown").pipe(map(() => 1)),
      fromEvent(canvas, "mouseup").pipe(map(() => 0.5)),
      fromEvent(canvas, "mouseleave").pipe(map(() => -1))
    ).subscribe((v) => {
      sceneCTL.amplifiedSubject.next(v);
      canvas.style.transform = `translateY(-50%) scale(${
        v < 0 ? 1 : 1 + v * 0.2
      })`;
    });

    sceneCTL.$scene
      .pipe(
        map((v) => window.scrollY / window.innerHeight),
        map((v) => {
          if (v >= 7.5) {
            const val = Math.max(0, 8 - v);
            return variant ? val : 1 - val;
          }
          if (v < 0.75 || v >= 4) {
            return 0.5;
          }
          const multi = Math.min(1, 4 - v);
          return (
            ((-Math.sin((v - 0.75) * 3) + 1) / 2) * multi + (1 - multi) * 0.5
          );
        }),
        distinctUntilChanged((a, b) => a === b),
        map((v) => {
          const container = Math.min(window.innerWidth, 1280);
          return (
            (window.innerWidth - container) / 2 + container * v - width * v
          );
        })
      )
      .subscribe((v) => (this.canvas.style.left = `${v}px`));

    sceneCTL.$scene
      .pipe(distinctUntilChanged((a, b) => a === b))
      .subscribe((v) => {
        this.orbit.autoRotateSpeed = v * 10;
        this.cube.mode = v;
      });
  }

  update() {
    this.orbit.update();
    this.renderer.render(this.scene, this.camera);
    this.cube.update();
    requestAnimationFrame(() => this.update());
  }
}
