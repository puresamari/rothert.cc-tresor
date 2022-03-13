import { Observable } from "rxjs";
import { map, distinctUntilChanged } from "rxjs/operators";
import * as Tone from "tone";
import { Filter, Player } from "tone";

import ease from "rx-ease";

export class FilterLoopedSound {
  player: Player;
  effect: Filter;
  constructor(
    url: string,
    $effect: Observable<number>,
    type: "lowpass" | "highpass" = "lowpass",
    duration = 4
  ) {
    this.player = new Player({
      url,
      loop: true,
      fadeIn: "0.25",
      // autostart: false,
      // loopStart: 0,
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
    this.player.sync().start(0);
  }

  get IsLoaded() {
    return this.player.loaded;
  }
}
