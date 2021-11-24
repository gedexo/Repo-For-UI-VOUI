import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsupplySectionComponent } from './petsupply-section.component';

describe('PetsupplySectionComponent', () => {
  let component: PetsupplySectionComponent;
  let fixture: ComponentFixture<PetsupplySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetsupplySectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsupplySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
