import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioModalidadComponent } from './horario-modalidad.component';

describe('HorarioModalidadComponent', () => {
  let component: HorarioModalidadComponent;
  let fixture: ComponentFixture<HorarioModalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorarioModalidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorarioModalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
