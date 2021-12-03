import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBeautyComponent } from './list-beauty.component';

describe('ListBeautyComponent', () => {
  let component: ListBeautyComponent;
  let fixture: ComponentFixture<ListBeautyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBeautyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBeautyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
