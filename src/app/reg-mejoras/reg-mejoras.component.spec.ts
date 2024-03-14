import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegMejorasComponent } from './reg-mejoras.component';

describe('RegMejorasComponent', () => {
  let component: RegMejorasComponent;
  let fixture: ComponentFixture<RegMejorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegMejorasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegMejorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
