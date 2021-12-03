import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewElectronicsComponent } from './preview-electronics.component';

describe('PreviewElectronicsComponent', () => {
  let component: PreviewElectronicsComponent;
  let fixture: ComponentFixture<PreviewElectronicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewElectronicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewElectronicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
