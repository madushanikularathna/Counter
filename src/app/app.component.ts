import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Click me !';
  public count = 1;

  /**  function */
  public counter()  {
    this.count += 1;
  }
}
