import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BelfastComponent } from './belfast.component';

describe('BelfastComponent', () => {
  let component: BelfastComponent;
  let fixture: ComponentFixture<BelfastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BelfastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BelfastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
