import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  HeartSelect = false;

  toggleHeart() {
    this.HeartSelect = !this.HeartSelect;
  }
}
