import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinasCadastrarEditarComponent } from './disciplinas-cadastrar-editar.component';

describe('DisciplinasCadastrarEditarComponent', () => {
  let component: DisciplinasCadastrarEditarComponent;
  let fixture: ComponentFixture<DisciplinasCadastrarEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisciplinasCadastrarEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplinasCadastrarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
