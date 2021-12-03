import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewPetsupplyComponent } from './preview-petsupply.component';

describe('PreviewPetsupplyComponent', () => {
  let component: PreviewPetsupplyComponent;
  let fixture: ComponentFixture<PreviewPetsupplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewPetsupplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewPetsupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
