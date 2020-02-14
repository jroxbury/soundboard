import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public audioClips = [{
    text: 'Theme of the day!',
    source: 'theme-of-the-day',
    color: 'primary'
  }, {
    text: 'You never been clutch',
    source: 'never-clutch',
    color: 'primary'
  }];
}
