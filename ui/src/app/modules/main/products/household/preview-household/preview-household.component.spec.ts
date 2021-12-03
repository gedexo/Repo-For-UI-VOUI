import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewHouseholdComponent } from './preview-household.component';

describe('PreviewHouseholdComponent', () => {
  let component: PreviewHouseholdComponent;
  let fixture: ComponentFixture<PreviewHouseholdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewHouseholdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewHouseholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
