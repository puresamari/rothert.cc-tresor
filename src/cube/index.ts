import { combineLatest, fromEvent, merge, of } from "rxjs";
import {
  distinctUntilChanged,
  map,
  scan,
  startWith,
  switchMap,
} from "rxjs/operators";
import {
  Clock,
  Mesh,
  MeshNormalMaterial,
  Object3D,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";

import { SceneController } from "./../scene-controller";
import { Anim } from "./cube";

export class Cube {
  scene = new Scene();
  cube: Anim;
  cubeMat: Anim;
  renderer: WebGLRenderer;
  camera: PerspectiveCamera;
  cameraAnchor = new Object3D();
  autoRotateSpeed = 0;
  clock = new Clock();
  // orbit: OrbitControls;

  size = [window.innerHeight / 2, window.innerHeight];

  constructor(
    public readonly canvas: HTMLCanvasElement,
    sceneCTL: SceneController,
    variant: number
  ) {
    const [width, height] = this.size;

    this.camera = new PerspectiveCamera(75, width / height, 0.1, 1000);

    // this.orbit = new OrbitControls(this.camera, this.canvas);
    // this.orbit.enableZoom = false;
    // this.orbit.enablePan = false;
    // this.orbit.enableDamping = true;
    // this.orbit.enableRotate = false;
    // this.orbit.enabled = false;
    // this.orbit.autoRotate = true;
    // this.orbit.target = new Vector3(0);

    this.renderer = new WebGLRenderer({
      canvas,
      alpha: true,
      antialias: window.innerWidth >= 768,
    });
    this.renderer.setSize(width, height);

    this.cube = new Anim(sceneCTL, variant);
    const cube = new Mesh(this.cube, new MeshNormalMaterial({}));
    this.scene.add(cube);
    this.scene.add(this.cameraAnchor);
    this.cameraAnchor.add(this.camera);
    this.camera.position.z = 10;
    this.camera.position.x = 5;
    this.camera.position.y = 5;
    this.camera.lookAt(0, 0, 0);
    this.update();
    canvas.addEventListener("contextmenu", (e) => e.preventDefault());
    combineLatest([
      fromEvent(canvas, "contextmenu").pipe(
        scan((v) => !v, false),
        startWith(false)
      ),
      merge(
        fromEvent(canvas, "mouseenter").pipe(map(() => 0.5)),
        fromEvent(canvas, "mousedown").pipe(map(() => 1)),
        fromEvent(canvas, "mouseup").pipe(map(() => 0.5)),
        fromEvent(canvas, "mouseleave").pipe(map(() => -1))
      ).pipe(startWith(0)),
    ])
      .pipe(
        switchMap(([toggled, value]) => {
          if (toggled) {
            return of(1);
          }
          return sceneCTL.$scene.pipe(
            map((scene) =>
              scene > 0.75 && (scene < 4 || scene > 8) ? value : 0
            )
          );
        })
      )
      .subscribe((v) => {
        (sceneCTL as any)[`amplified${variant + 1}Subject`].next(v);
        canvas.style.transform = `translateY(-50%) scale(${
          v < 0 ? 1 : 1 + v * 0.2
        })`;
        this.cube.amplification = v;
      });

    if (variant === 1) {
      sceneCTL.$scene
        .pipe(
          map((v) => v < 7),
          distinctUntilChanged((a, b) => a === b)
        )
        .subscribe((v) => {
          // console.log(v);
          canvas.style.display = v ? "none" : "block";
        });
    }

    sceneCTL.$scene
      .pipe(
        map((v) => window.scrollY / window.innerHeight),
        map((v) => {
          if (v >= 7.5) {
            const val = Math.max(0, 8 - v) - Math.min(1, Math.max(v - 18, 0));
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
        switchMap((v) =>
          fromEvent(window, "resize").pipe(
            map(() => v),
            startWith(v)
          )
        ),
        map((v) => {
          const container = Math.min(window.innerWidth, 1280);
          return (
            (window.innerWidth - container) / 2 + container * v - width * v
          );
        }),
        distinctUntilChanged((a, b) => a === b)
      )
      .subscribe((v) => (this.canvas.style.left = `${v}px`));

    sceneCTL.$scene
      .pipe(distinctUntilChanged((a, b) => a === b))
      .subscribe((v) => {
        console.log(v, Math.max(-v, Math.min(0, 9 - v) * 18));
        this.autoRotateSpeed =
          (v + Math.max(-v + 1, Math.min(0, 9 - v) * 18)) * 10;
        this.cube.mode = v;
      });
  }

  update() {
    let d = this.clock.getDelta();
    let t = this.clock.getElapsedTime();
    // this.orbit.update();
    // console.log(d);
    this.cameraAnchor.rotateY(d * 0.05 * this.autoRotateSpeed);
    this.renderer.render(this.scene, this.camera);
    this.cube.update(t);
    requestAnimationFrame(() => this.update());
  }
}
