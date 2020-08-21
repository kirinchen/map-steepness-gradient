import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelRepoComponent } from './model-repo.component';

describe('ModelRepoComponent', () => {
  let component: ModelRepoComponent;
  let fixture: ComponentFixture<ModelRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
