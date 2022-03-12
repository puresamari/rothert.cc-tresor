import { BehaviorSubject, fromEvent, Observable } from "rxjs";
import { map, distinctUntilChanged, tap } from "rxjs/operators";

export class SceneController {
  private sceneSubject = new BehaviorSubject<number>(
    window.scrollY / window.innerHeight
  );
  $scene: Observable<number> = this.sceneSubject.asObservable();
  get Scene(): number {
    return this.sceneSubject.getValue();
  }

  public amplifiedSubject = new BehaviorSubject(-1);
  public $isAmplified = this.amplifiedSubject.pipe(
    distinctUntilChanged((a, b) => a === b)
  );

  constructor() {
    fromEvent(window, "scroll")
      .pipe(map((v) => window.scrollY / window.innerHeight))
      .subscribe((v) => this.sceneSubject.next(v));
  }
}
