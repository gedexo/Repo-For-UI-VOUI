import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPetsupplyComponent } from './list-petsupply.component';

describe('ListPetsupplyComponent', () => {
  let component: ListPetsupplyComponent;
  let fixture: ComponentFixture<ListPetsupplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPetsupplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPetsupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
