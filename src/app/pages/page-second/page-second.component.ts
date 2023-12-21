import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatasService } from 'src/services/datas.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-second',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-second.component.html',
  styleUrls: ['./page-second.component.css'],
})
export class PageSecondComponent {
  private datasService = inject(DatasService);
  public datas$: Observable<any>;
  constructor() {
    // this.datasService.getDatas().subscribe({
    //   next:(data)=>{console.log(data)}
    // })
    this.datas$ = this.datasService.getDatas()
  }
}
