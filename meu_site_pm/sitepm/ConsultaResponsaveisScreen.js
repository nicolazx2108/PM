import React from "react";
import { Lista } from "./BaseScreens";

export default function ConsultaResponsaveisScreen({
  dados,
  novo,
  editar,
  excluir,
  voltar
}) {

  const campos = [
    { key: "nome", label: "Nome" },
    { key: "cpf", label: "CPF" },
    { key: "telefone", label: "Telefone" },
    { key: "parentesco", label: "Parentesco" }
  ];

  return (
    <Lista
      titulo="Responsáveis"
      dados={dados}
      campos={campos}
      novo={novo}
      editar={editar}
      excluir={excluir}
      voltar={voltar}
    />
  );
}