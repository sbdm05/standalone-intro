import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css'],
})
export class BtnComponent {
  @Input() label!: string;
  @Input() route!: string;
}
