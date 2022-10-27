import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatEasyComponent } from './ngx-mat-easy.component';

describe('NgxMatEasyComponent', () => {
  let component: NgxMatEasyComponent;
  let fixture: ComponentFixture<NgxMatEasyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMatEasyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxMatEasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
