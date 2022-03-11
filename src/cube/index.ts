import {
  BoxBufferGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshPhongMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";

export class Cube {
  scene = new Scene();
  cube: Mesh;
  renderer: WebGLRenderer;
  camera: PerspectiveCamera;

  constructor(public readonly canvas = document.createElement("canvas")) {
    const { width, height } = canvas.getBoundingClientRect();

    this.camera = new PerspectiveCamera(75, width / height, 0.1, 1000);

    this.renderer = new WebGLRenderer({ canvas });
    this.renderer.setSize(width, height);

    this.cube = new Mesh(
      new BoxBufferGeometry(1, 1, 1),
      new MeshBasicMaterial({ color: 0x0000ff })
    );
    this.scene.add(this.cube);
    this.camera.position.z = 5;

    this.update();
  }

  update() {
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(() => this.update());
  }
}
