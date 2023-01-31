import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesaccordionComponent } from './rolesaccordion.component';

describe('RolesaccordionComponent', () => {
  let component: RolesaccordionComponent;
  let fixture: ComponentFixture<RolesaccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolesaccordionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolesaccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
