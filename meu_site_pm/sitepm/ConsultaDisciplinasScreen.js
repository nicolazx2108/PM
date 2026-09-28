import React from "react";
import { Lista } from "./BaseScreens";

export default function ConsultaDisciplinasScreen({
  dados,
  novo,
  editar,
  excluir,
  voltar
}) {

  const campos = [
    { key: "nome", label: "Disciplina" },
    { key: "codigo", label: "Código" },
    { key: "curso", label: "Curso" },
    { key: "carga", label: "Carga horária" }
  ];

  return (
    <Lista
      titulo="Disciplinas"
      dados={dados}
      campos={campos}
      novo={novo}
      editar={editar}
      excluir={excluir}
      voltar={voltar}
    />
  );
}