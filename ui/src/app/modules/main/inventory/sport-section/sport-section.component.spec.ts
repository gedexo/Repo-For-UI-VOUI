import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportSectionComponent } from './sport-section.component';

describe('SportSectionComponent', () => {
  let component: SportSectionComponent;
  let fixture: ComponentFixture<SportSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
