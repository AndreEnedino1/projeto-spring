import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessoresCadastrarEditarComponent } from './professores-cadastrar-editar.component';

describe('ProfessoresCadastrarEditarComponent', () => {
  let component: ProfessoresCadastrarEditarComponent;
  let fixture: ComponentFixture<ProfessoresCadastrarEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessoresCadastrarEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessoresCadastrarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
