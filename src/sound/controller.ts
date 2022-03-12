import { combineLatest, Observable } from "rxjs";
import { map, distinctUntilChanged, tap } from "rxjs/operators";
import * as Tone from "tone";
import { Filter, Part, Time, start, Player } from "tone";
import { SceneController } from "../scene-controller";
import kickSound from "./sounds/KickNew.wav";
import perc1Sound from "./sounds/Drums1.wav";
import perc2Sound from "./sounds/Drums1.wav";
import fillSound from "./sounds/Fill.wav";
import rimSound from "./sounds/Rim.wav";
import subSimpleSound from "./sounds/SubSimple.wav";
import subLLongSound from "./sounds/SubLong.wav";
import choir1Sound from "./sounds/Choir1.wav";

import ease from "rx-ease";

class FilterLoopedSound {
  player: Player;
  effect: Filter;
  constructor(
    url: string,
    $effect: Observable<number>,
    type: "lowpass" | "highpass" = "lowpass"
  ) {
    this.player = new Player({
      url,
      loop: true,
      autostart: true,
    });
    this.effect = new Tone.Filter(10, type).toDestination();
    this.player.connect(this.effect);
    $effect
      .pipe(
        ease(120, 18),
        map((v) => {
          if (v < 0) {
            return -1;
          }
          switch (type) {
            case "highpass":
              return v >= 1 ? 100 : 100 + 20000 * (1 - v);
            case "lowpass":
              return v >= 1
                ? 9999999999
                : 100 + Math.pow(Math.min(1, Math.max(0, v)), 4) * 18000;
          }
        }),
        distinctUntilChanged((a, b) => a === b)
      )
      .subscribe((v) => {
        if (v < 0) {
          this.player.mute = true;
        } else {
          this.player.mute = false;
          this.effect.frequency.value = v;
        }
      });
    // this.player.chain(Tone.Destination);
    this.player.seek(Date.now() % 140);
    // this.player.
    // setTimeout(() => this.player.start(0), 1000);
  }
}

export class SoundController {
  kick: FilterLoopedSound;
  constructor(scene: SceneController) {
    this.kick = new FilterLoopedSound(
      kickSound,
      scene.$scene.pipe(
        map((scene) => {
          if (scene < 4) {
            return scene;
          }
          if (scene < 5.3) {
            return 5 - scene;
          }
          if (scene > 9) {
            return 1;
          }
          return -1;
        })
      )
    );
    // perc1.player.seek(Time.now)
    const perc1 = new FilterLoopedSound(
      perc2Sound,
      scene.$scene.pipe(
        map((scene) => {
          if (scene < 4) {
            return scene - 1;
          }
          if (scene < 5.3) {
            return 4.5 - scene;
          }
          return -1;
        })
      )
    );
    const perc2 = new FilterLoopedSound(
      perc1Sound,
      scene.$scene.pipe(
        map((scene) => {
          if (scene < 4) {
            return scene - 2;
          }
          if (scene < 5.3) {
            return 5 - scene;
          }
          return -1;
        })
      )
    );
    const rim = new FilterLoopedSound(
      rimSound,
      scene.$scene.pipe(
        map((scene) => {
          if (scene < 4) {
            return (scene - 2.5) * 1.5;
          }
          if (scene < 5.3) {
            return 5.4 - scene;
          }
          return -1;
        })
      )
    );
    const subSimple = new FilterLoopedSound(
      subSimpleSound,
      scene.$scene.pipe(map((scene) => scene - 3.5))
    );
    const subLLong = new FilterLoopedSound(
      subLLongSound,
      scene.$scene.pipe(map((scene) => scene - 5.2))
    );
    const choir1 = new FilterLoopedSound(
      choir1Sound,
      scene.$scene.pipe(map((scene) => scene - 6.5)),
      "highpass"
    );
    const fill = new FilterLoopedSound(
      fillSound,
      combineLatest([scene.$isAmplified, scene.$scene]).pipe(
        map(([amp, scene]) => (scene >= 4 && scene <= 5 ? -1 : amp))
      )
      // map((v) => v),
    );
    // console.log(kick, perc1, perc2);
  }
}
