/// <reference path="global.d.ts" />
import { SceneController } from "./scene-controller";
import * as tone from "tone";

import "./styles.css";
import { Cube } from "./cube/index";
import { Hero } from "./hero/index";
import { SoundController } from "./sound/controller";

const scene = new SceneController();

//attach a click listener to a play button

document.querySelector("button#start").addEventListener(
  "click",
  async () => {
    await tone.start();
    console.log("audio afafa ready");
    launchSound();
  },
  { once: true }
);

tone.loaded().then(async () => {
  await tone.start();
  console.log("audio is ready");
  launchSound();
});

let running = false;
function launchSound() {
  if (running || !document.querySelector("button#start")) {
    return;
  }
  document.body.style.overflow = null;
  running = true;
  document.querySelector("button#start").remove();
  requestAnimationFrame(() => {
    const sound = new SoundController(scene);
  });
}

const cube = new Cube(document.querySelector("canvas#cube"), scene, 0);
const cube2 = new Cube(document.querySelector("canvas#cube-2"), scene, 1);
const hero = new Hero(document.querySelector("canvas#hero"), scene);

// @ts-ignore
if (!IS_PROD) {
  const debuggerElle = document.createElement("div");
  const debuggerBeatIndicator = document.createElement("div");
  debuggerBeatIndicator.className = "h-8 flex bg-red-500";
  debuggerElle.appendChild(debuggerBeatIndicator);
  const debuggerBeatScene = document.createElement("p");
  debuggerElle.appendChild(debuggerBeatScene);

  debuggerElle.className = "fixed top-0 left-0 z-50 w-52 truncate";
  document.body.appendChild(debuggerElle);
  scene.$scene.subscribe((v) => (debuggerBeatScene.innerText = `${v}`));
  scene.$beat.subscribe(
    (v) => (debuggerBeatIndicator.style.width = `${Math.floor(v * 100)}%`)
  );
}
