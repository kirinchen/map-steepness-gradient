import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KmlLoaderComponent } from './kml-loader.component';

describe('KmlLoaderComponent', () => {
  let component: KmlLoaderComponent;
  let fixture: ComponentFixture<KmlLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KmlLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KmlLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
