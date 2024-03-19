import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxFormControlsComponent } from './ngx-form-controls.component';

describe('NgxFormControlsComponent', () => {
  let component: NgxFormControlsComponent;
  let fixture: ComponentFixture<NgxFormControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxFormControlsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxFormControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
