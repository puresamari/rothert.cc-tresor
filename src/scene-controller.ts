import { BehaviorSubject, fromEvent, interval, Observable, timer } from "rxjs";
import { map, distinctUntilChanged, tap } from "rxjs/operators";

export class SceneController {
  start: number = -1;

  get TimeSinceStart() {
    return this.start < 0 ? 0 : Date.now() - this.start;
  }

  private sceneSubject = new BehaviorSubject<number>(
    window.scrollY / window.innerHeight
  );
  $scene: Observable<number> = this.sceneSubject.asObservable();
  get Scene(): number {
    return this.sceneSubject.getValue();
  }

  public amplified1Subject = new BehaviorSubject(-1);
  public $isAmplified1 = this.amplified1Subject.pipe(
    distinctUntilChanged((a, b) => a === b)
  );

  public amplified2Subject = new BehaviorSubject(-1);
  public $isAmplified2 = this.amplified2Subject.pipe(
    distinctUntilChanged((a, b) => a === b)
  );

  private beatFraction = (1000 * 60) / 140;
  public $beat = timer(0, 1000 / 60).pipe(map(() => this.Beat));

  getBeatAtTime(t: number) {
    return (
      Math.sin(
        (((this.TimeSinceStart / 60 / 1000) * 140) / 4) * 4 * Math.PI * 2
      ) /
        2 +
      0.5
    );
  }
  get Beat(): number {
    return this.getBeatAtTime(this.TimeSinceStart);
    // return this.getBeatAtTime(Date.now());
  }
  startBeat() {
    this.start = Date.now();
  }

  constructor() {
    fromEvent(window, "scroll")
      .pipe(map((v) => window.scrollY / window.innerHeight))
      .subscribe((v) => this.sceneSubject.next(v));
  }
}
