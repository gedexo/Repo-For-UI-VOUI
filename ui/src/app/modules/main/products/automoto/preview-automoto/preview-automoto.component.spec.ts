import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewAutomotoComponent } from './preview-automoto.component';

describe('PreviewAutomotoComponent', () => {
  let component: PreviewAutomotoComponent;
  let fixture: ComponentFixture<PreviewAutomotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewAutomotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewAutomotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
