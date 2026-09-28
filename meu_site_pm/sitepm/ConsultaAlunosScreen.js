import React from "react";
import { Lista } from "./BaseScreens";

export default function ConsultaAlunosScreen({
  dados,
  novo,
  editar,
  excluir,
  voltar
}) {

  const campos = [
    { key: "nome", label: "Nome" },
    { key: "ra", label: "RA" },
    { key: "cpf", label: "CPF" },
    { key: "curso", label: "Curso" },
    { key: "turma", label: "Turma" }
  ];

  return (
    <Lista
      titulo="Alunos"
      dados={dados}
      campos={campos}
      novo={novo}
      editar={editar}
      excluir={excluir}
      voltar={voltar}
    />
  );
}

