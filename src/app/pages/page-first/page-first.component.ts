import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from 'src/app/components/btn/btn.component';

@Component({
  selector: 'app-page-first',
  standalone: true,
  imports: [CommonModule, BtnComponent],
  templateUrl: './page-first.component.html',
  styleUrls: ['./page-first.component.css']
})
export class PageFirstComponent {

  

}
