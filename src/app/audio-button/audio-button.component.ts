import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-audio-button',
  template: `
    <audio #audio src="./assets/{{source}}.m4a" type="audio/mp4"></audio>
    <div>
      <button (click)="play()">{{btnText}}</button>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AudioButtonComponent {
  @Input() source: string;
  @Input() btnText: string;

  @ViewChild('audio') audioSource;

  public play(): void {
    this.audioSource.nativeElement.pause();
    this.audioSource.nativeElement.currentTime = 0;
    this.audioSource.nativeElement.play();
  }


}
