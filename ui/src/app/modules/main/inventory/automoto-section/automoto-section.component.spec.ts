import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomotoSectionComponent } from './automoto-section.component';

describe('AutomotoSectionComponent', () => {
  let component: AutomotoSectionComponent;
  let fixture: ComponentFixture<AutomotoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomotoSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomotoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
