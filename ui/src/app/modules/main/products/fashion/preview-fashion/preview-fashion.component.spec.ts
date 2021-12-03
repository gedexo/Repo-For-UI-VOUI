import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewFashionComponent } from './preview-fashion.component';

describe('PreviewFashionComponent', () => {
  let component: PreviewFashionComponent;
  let fixture: ComponentFixture<PreviewFashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewFashionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
