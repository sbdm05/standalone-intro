import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFirstComponent } from './page-first.component';

describe('PageFirstComponent', () => {
  let component: PageFirstComponent;
  let fixture: ComponentFixture<PageFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PageFirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
