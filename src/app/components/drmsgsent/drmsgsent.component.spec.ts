/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DrmsgsentComponent } from './drmsgsent.component';

describe('DrmsgsentComponent', () => {
  let component: DrmsgsentComponent;
  let fixture: ComponentFixture<DrmsgsentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrmsgsentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrmsgsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
