import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunosCadastrarEditarComponent } from './alunos-cadastrar-editar.component';

describe('AlunosCadastrarEditarComponent', () => {
  let component: AlunosCadastrarEditarComponent;
  let fixture: ComponentFixture<AlunosCadastrarEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunosCadastrarEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunosCadastrarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
