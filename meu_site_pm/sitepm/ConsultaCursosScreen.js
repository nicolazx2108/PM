import React from "react";
import { Lista } from "./BaseScreens";

export default function ConsultaCursosScreen({
  dados,
  novo,
  editar,
  excluir,
  voltar
}) {

  const campos = [
    { key: "nome", label: "Curso" },
    { key: "area", label: "Área" },
    { key: "duracao", label: "Duração" },
    { key: "status", label: "Status" }
  ];

  return (
    <Lista
      titulo="Cursos"
      dados={dados}
      campos={campos}
      novo={novo}
      editar={editar}
      excluir={excluir}
      voltar={voltar}
    />
  );
}