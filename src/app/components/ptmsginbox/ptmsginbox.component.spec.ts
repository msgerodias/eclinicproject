import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtmsginboxComponent } from './ptmsginbox.component';

describe('PtmsginboxComponent', () => {
  let component: PtmsginboxComponent;
  let fixture: ComponentFixture<PtmsginboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtmsginboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtmsginboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
