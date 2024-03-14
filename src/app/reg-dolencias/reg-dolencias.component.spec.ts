import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegDolenciasComponent } from './reg-dolencias.component';

describe('RegDolenciasComponent', () => {
  let component: RegDolenciasComponent;
  let fixture: ComponentFixture<RegDolenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegDolenciasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegDolenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
