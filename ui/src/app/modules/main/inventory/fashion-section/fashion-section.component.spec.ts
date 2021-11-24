import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionSectionComponent } from './fashion-section.component';

describe('FashionSectionComponent', () => {
  let component: FashionSectionComponent;
  let fixture: ComponentFixture<FashionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashionSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
