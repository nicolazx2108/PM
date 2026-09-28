import React from "react";
import { Lista } from "./BaseScreens";

export default function ConsultaCoordenadoresScreen({
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
    { key: "departamento", label: "Departamento" }
  ];

  return (
    <Lista
      titulo="Coordenadores"
      dados={dados}
      campos={campos}
      novo={novo}
      editar={editar}
      excluir={excluir}
      voltar={voltar}
    />
  );
}