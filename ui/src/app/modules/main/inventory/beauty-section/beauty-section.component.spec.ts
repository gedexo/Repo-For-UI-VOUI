import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautySectionComponent } from './beauty-section.component';

describe('BeautySectionComponent', () => {
  let component: BeautySectionComponent;
  let fixture: ComponentFixture<BeautySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeautySectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeautySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
