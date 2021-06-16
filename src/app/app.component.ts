import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Explorer';

  buttonTitle = 'Dark mode on'

  darkMode = false

  changeMode() {
    this.darkMode = !this.darkMode
    console.log(this.darkMode)
    this.darkMode ? this.buttonTitle = 'Dark mode off' : this.buttonTitle = 'Dark mode on'
  }

}
