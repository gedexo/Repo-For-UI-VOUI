import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewBeautyComponent } from './preview-beauty.component';

describe('PreviewBeautyComponent', () => {
  let component: PreviewBeautyComponent;
  let fixture: ComponentFixture<PreviewBeautyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewBeautyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewBeautyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
