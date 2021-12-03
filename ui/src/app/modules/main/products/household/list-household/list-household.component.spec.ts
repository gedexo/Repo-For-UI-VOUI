import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHouseholdComponent } from './list-household.component';

describe('ListHouseholdComponent', () => {
  let component: ListHouseholdComponent;
  let fixture: ComponentFixture<ListHouseholdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHouseholdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHouseholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
