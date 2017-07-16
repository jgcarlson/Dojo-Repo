import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MafraqComponent } from './mafraq.component';

describe('MafraqComponent', () => {
  let component: MafraqComponent;
  let fixture: ComponentFixture<MafraqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MafraqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MafraqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
