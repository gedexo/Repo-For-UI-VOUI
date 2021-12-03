import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListElectronicsComponent } from './list-electronics.component';

describe('ListElectronicsComponent', () => {
  let component: ListElectronicsComponent;
  let fixture: ComponentFixture<ListElectronicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListElectronicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListElectronicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
