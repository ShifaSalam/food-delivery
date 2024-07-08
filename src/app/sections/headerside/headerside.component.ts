import { Component,Output, EventEmitter } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
@Component({
  selector: 'app-headerside',
  templateUrl: './headerside.component.html',
  styleUrls: ['./headerside.component.css']
})
export class HeadersideComponent {
  @Output() toggleSidenav = new EventEmitter<void>();

}
