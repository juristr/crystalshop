import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxButtonsComponent } from './ngx-buttons.component';

describe('NgxButtonsComponent', () => {
  let component: NgxButtonsComponent;
  let fixture: ComponentFixture<NgxButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxButtonsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
