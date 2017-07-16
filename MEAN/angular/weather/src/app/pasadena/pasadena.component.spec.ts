import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasadenaComponent } from './pasadena.component';

describe('PasadenaComponent', () => {
  let component: PasadenaComponent;
  let fixture: ComponentFixture<PasadenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasadenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasadenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
