import React from "react";
import { Lista } from "./BaseScreens";

export default function ConsultaMatriculasScreen({
  dados,
  novo,
  editar,
  excluir,
  voltar
}) {

  const campos = [
    { key: "aluno", label: "Aluno" },
    { key: "turma", label: "Turma" },
    { key: "curso", label: "Curso" },
    { key: "situacao", label: "Situação" }
  ];

  return (
    <Lista
      titulo="Matrículas"
      dados={dados}
      campos={campos}
      novo={novo}
      editar={editar}
      excluir={excluir}
      voltar={voltar}
    />
  );
}