import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelRepoMenuComponent } from './model-repo-menu.component';

describe('ModelRepoMenuComponent', () => {
  let component: ModelRepoMenuComponent;
  let fixture: ComponentFixture<ModelRepoMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelRepoMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelRepoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
