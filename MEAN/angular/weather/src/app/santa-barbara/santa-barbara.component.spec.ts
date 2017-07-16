import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SantaBarbaraComponent } from './santa-barbara.component';

describe('SantaBarbaraComponent', () => {
  let component: SantaBarbaraComponent;
  let fixture: ComponentFixture<SantaBarbaraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SantaBarbaraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SantaBarbaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
