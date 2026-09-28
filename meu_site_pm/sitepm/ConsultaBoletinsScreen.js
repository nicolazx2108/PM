import React from "react";
import { Lista } from "./BaseScreens";

export default function ConsultaBoletinsScreen({
  dados,
  novo,
  editar,
  excluir,
  voltar
}) {

  const campos = [
    { key: "aluno", label: "Aluno" },
    { key: "turma", label: "Turma" },
    { key: "periodo", label: "Período" },
    { key: "nota", label: "Média" }
  ];

  return (
    <Lista
      titulo="Boletins"
      dados={dados}
      campos={campos}
      novo={novo}
      editar={editar}
      excluir={excluir}
      voltar={voltar}
    />
  );
}