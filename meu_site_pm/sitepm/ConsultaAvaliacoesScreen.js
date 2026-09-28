import React from "react";
import { Lista } from "./BaseScreens";

export default function ConsultaAvaliacoesScreen({
  dados,
  novo,
  editar,
  excluir,
  voltar
}) {

  const campos = [
    { key: "titulo", label: "Avaliação" },
    { key: "aluno", label: "Aluno" },
    { key: "disciplina", label: "Disciplina" },
    { key: "nota", label: "Nota" }
  ];

  return (
    <Lista
      titulo="Avaliações"
      dados={dados}
      campos={campos}
      novo={novo}
      editar={editar}
      excluir={excluir}
      voltar={voltar}
    />
  );
}