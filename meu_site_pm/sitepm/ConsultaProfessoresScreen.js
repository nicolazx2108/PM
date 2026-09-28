import React from "react";
import { Lista } from "./BaseScreens";

export default function ConsultaProfessoresScreen({
  dados,
  novo,
  editar,
  excluir,
  voltar
}) {

  const campos = [
    { key: "nome", label: "Nome" },
    { key: "email", label: "E-mail" },
    { key: "telefone", label: "Telefone" },
    { key: "disciplina", label: "Disciplina" }
  ];

  return (
    <Lista
      titulo="Professores"
      dados={dados}
      campos={campos}
      novo={novo}
      editar={editar}
      excluir={excluir}
      voltar={voltar}
    />
  );
}