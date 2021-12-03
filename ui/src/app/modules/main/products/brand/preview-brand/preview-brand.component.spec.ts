import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewBrandComponent } from './preview-brand.component';

describe('PreviewBrandComponent', () => {
  let component: PreviewBrandComponent;
  let fixture: ComponentFixture<PreviewBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewBrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
