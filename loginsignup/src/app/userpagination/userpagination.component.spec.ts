import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpaginationComponent } from './userpagination.component';

describe('UserpaginationComponent', () => {
  let component: UserpaginationComponent;
  let fixture: ComponentFixture<UserpaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserpaginationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserpaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
