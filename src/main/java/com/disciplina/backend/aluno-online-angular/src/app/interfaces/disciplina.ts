import { IProfessor } from "./professor";

export interface IDisciplina {
  id?:number;
  nome: string;
  professor?: IProfessor;
}
