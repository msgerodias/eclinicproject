import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtmsgcreateComponent } from './ptmsgcreate.component';

describe('PtmsgcreateComponent', () => {
  let component: PtmsgcreateComponent;
  let fixture: ComponentFixture<PtmsgcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtmsgcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtmsgcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
