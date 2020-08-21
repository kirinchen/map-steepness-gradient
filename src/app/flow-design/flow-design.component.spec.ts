import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowDesignComponent } from './flow-design.component';

describe('FlowDesignComponent', () => {
  let component: FlowDesignComponent;
  let fixture: ComponentFixture<FlowDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
