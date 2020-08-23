import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocsComponent } from './locs.component';

describe('LocsComponent', () => {
  let component: LocsComponent;
  let fixture: ComponentFixture<LocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
