import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KmlLoadComponent } from './kml-load.component';

describe('KmlLoadComponent', () => {
  let component: KmlLoadComponent;
  let fixture: ComponentFixture<KmlLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KmlLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KmlLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
