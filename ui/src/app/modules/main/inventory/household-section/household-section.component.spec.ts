import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdSectionComponent } from './household-section.component';

describe('HouseholdSectionComponent', () => {
  let component: HouseholdSectionComponent;
  let fixture: ComponentFixture<HouseholdSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseholdSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseholdSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
