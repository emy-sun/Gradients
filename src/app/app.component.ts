import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  moveFirstElement = false;
  moveSecondElement = false;
  zIndex = 2;
    
  onTransitionFirst() {
    this.moveFirstElement = true;

    setTimeout(() => {
      this.zIndex = this.zIndex === 2 ? 0 : 2;
      this.moveFirstElement = false;
    }, 500);
  }

  onTransitionSecond() {
    this.moveSecondElement = true;
    
    setTimeout(() => {
      this.zIndex = this.zIndex === 2 ? 0 : 2;
      this.moveSecondElement = false;
    }, 500);
  }
}
