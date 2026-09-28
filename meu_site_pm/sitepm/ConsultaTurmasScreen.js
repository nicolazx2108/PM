import React from "react";
import { Lista } from "./BaseScreens";

export default function ConsultaTurmasScreen({
  dados,
  novo,
  editar,
  excluir,
  voltar
}) {

  const campos = [
    { key: "nome", label: "Turma" },
    { key: "curso", label: "Curso" },
    { key: "periodo", label: "Período" },
    { key: "ano", label: "Ano" }
  ];

  return (
    <Lista
      titulo="Turmas"
      dados={dados}
      campos={campos}
      novo={novo}
      editar={editar}
      excluir={excluir}
      voltar={voltar}
    />
  );
}