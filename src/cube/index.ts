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

import { distinctUntilChanged, fromEvent, map, tap } from "rxjs";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export class Cube {
  scene = new Scene();
  cube: Anim;
  cubeMat: Anim;
  renderer: WebGLRenderer;
  camera: PerspectiveCamera;
  orbit: OrbitControls;

  size = [window.innerHeight / 2, window.innerHeight];

  constructor(public readonly canvas = document.createElement("canvas")) {
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

    fromEvent(window, "scroll")
      .pipe(
        map((v) => window.scrollY / window.innerHeight),
        map((v) => {
          if (v < 0.75) {
            return 0.5;
          }
          return (-Math.sin((v - 0.75) * 3) + 1) / 2;
        }),
        distinctUntilChanged((a, b) => a === b),
        map((v) => window.innerWidth * v - width * v)
      )
      .subscribe((v) => (this.canvas.style.left = `${v}px`));

    fromEvent(window, "scroll")
      .pipe(
        map((v) => Math.max(0, window.scrollY / window.innerHeight - 1)),
        map((v) => Math.min(2, v)),
        distinctUntilChanged((a, b) => a === b)
      )
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
