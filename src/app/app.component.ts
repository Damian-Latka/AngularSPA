import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { faCoffee, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-app';
  faCoffee = faCoffee;
  faBars = faBars;
  faTimes = faTimes;

  navToggled: boolean = false;

  public toggleNav(){
    this.navToggled === true ? this.navToggled = false : this.navToggled = true;
  }
}
