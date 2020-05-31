import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtmsgsentComponent } from './ptmsgsent.component';

describe('PtmsgsentComponent', () => {
  let component: PtmsgsentComponent;
  let fixture: ComponentFixture<PtmsgsentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtmsgsentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtmsgsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
