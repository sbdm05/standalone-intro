import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgbNav, NgbNavContent, NgbNavItem, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterLink, RouterOutlet],
})
export class AppComponent {
  title = 'standalone-intro';
}
