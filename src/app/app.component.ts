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
    btnText: 'Theme of the day!',
    source: 'theme-of-the-day'
  }, {
    btnText: 'You never been clutch',
    source: 'never-clutch'
  }];
}
