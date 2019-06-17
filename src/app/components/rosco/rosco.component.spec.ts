import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoscoComponent } from './rosco.component';

describe('RoscoComponent', () => {
  let component: RoscoComponent;
  let fixture: ComponentFixture<RoscoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoscoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
