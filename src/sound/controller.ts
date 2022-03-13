import { FilterLoopedSound } from "./filter-loop-sound";
import { combineLatest } from "rxjs";
import { map } from "rxjs/operators";
import * as Tone from "tone";
import { SceneController } from "../scene-controller";
import kickSound from "./sounds/KickNew.wav";
import perc1Sound from "./sounds/Drums1.wav";
import perc2Sound from "./sounds/Drums1.wav";
import fillSound from "./sounds/Fill.wav";
import rimSound from "./sounds/Rim.wav";

import subSimpleSound from "./sounds/SubSimple.wav";
import subLLongSound from "./sounds/SubLong.wav";
import choir1Sound from "./sounds/Choir1.wav";
import vocalHarmonySound from "./sounds/VocalHarmony.wav";
import perc21Sound from "./sounds/Perc21.wav";
import perc22Sound from "./sounds/Perc22.wav";
import fillLSound from "./sounds/FillL.wav";
import fillRSound from "./sounds/FillR.wav";
import kick2Sound from "./sounds/Kick2.wav";
import arpeggioSound from "./sounds/Arpeggio.wav";

Tone.Transport.bpm.value = 144;

export class SoundController {
  kick: FilterLoopedSound;
  constructor(scene: SceneController) {
    //#region Initial sound
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
          return -1;
        })
      ),
      "lowpass",
      4
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
      ),
      "lowpass",
      1
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
      ),
      "lowpass",
      1
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
      ),
      "lowpass",
      4
    );
    const fill = new FilterLoopedSound(
      fillSound,
      combineLatest([scene.$isAmplified1, scene.$scene]).pipe(
        map(([amp, scene]) => (scene >= 4 ? -1 : amp))
      ),
      "lowpass",
      2
      // map((v) => v),
    );
    //#endregion Initial sound

    const kick2 = new FilterLoopedSound(
      kick2Sound,
      scene.$scene.pipe(map((scene) => scene - 10.5)),
      "lowpass",
      8
    );
    const subSimple = new FilterLoopedSound(
      subSimpleSound,
      scene.$scene.pipe(map((scene) => scene - 3.5)),
      "lowpass",
      8
    );
    const subLLong = new FilterLoopedSound(
      subLLongSound,
      scene.$scene.pipe(map((scene) => scene - 5.2)),
      "lowpass",
      8
    );
    const choir1 = new FilterLoopedSound(
      choir1Sound,
      scene.$scene.pipe(map((scene) => scene - 6.5)),
      "highpass",
      8
    );
    const arpeggio = new FilterLoopedSound(
      arpeggioSound,
      scene.$scene.pipe(map((scene) => scene - 12)),
      "lowpass",
      8
    );
    const vocalHarmony = new FilterLoopedSound(
      vocalHarmonySound,
      scene.$scene.pipe(map((scene) => scene - 8)),
      "lowpass",
      8
    );
    const perc21 = new FilterLoopedSound(
      perc21Sound,
      scene.$scene.pipe(map((scene) => scene - 10)),
      "lowpass",
      8
    );
    const perc22 = new FilterLoopedSound(
      perc22Sound,
      scene.$scene.pipe(map((scene) => scene - 9)),
      "lowpass",
      8
    );
    const fillL = new FilterLoopedSound(
      fillLSound,
      combineLatest([scene.$isAmplified2, scene.$scene]).pipe(
        map(([amp, scene]) => (scene < 6 ? -1 : amp))
      ),
      "highpass",
      8
    );
    const fillR = new FilterLoopedSound(
      fillRSound,
      combineLatest([scene.$isAmplified1, scene.$scene]).pipe(
        map(([amp, scene]) => (scene < 6 ? -1 : amp))
      ),
      "highpass",
      8
    );

    let interval = setInterval(() => {
      if (
        ![
          this.kick,
          perc1,
          perc2,
          rim,
          subSimple,
          subLLong,
          choir1,
          fill,
          vocalHarmony,
          arpeggio,
          perc21,
          perc22,
          fillL,
          fillR,
          kick2,
        ].reduce((all, v) => all && v.IsLoaded, true)
      ) {
        return;
      }
      Tone.Transport.start();
      scene.startBeat();
      clearInterval(interval);
    }, 100);
    // console.log(kick, perc1, perc2);
  }
}
