import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationBottomComponent } from './pagination-bottom.component';

describe('PaginationBottomComponent', () => {
  let component: PaginationBottomComponent;
  let fixture: ComponentFixture<PaginationBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationBottomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
