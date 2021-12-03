import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewSportComponent } from './preview-sport.component';

describe('PreviewSportComponent', () => {
  let component: PreviewSportComponent;
  let fixture: ComponentFixture<PreviewSportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewSportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
