import React, { useState } from "react";
import { Formulario } from "./BaseScreens";

export default function CadastroCoordenadorScreen({
  onSave,
  voltar
}) {

  const [valores, setValores] = useState({});

  const campos = [
    { key: "nome", label: "Nome completo", placeholder: "Digite o nome" },
    { key: "email", label: "E-mail", placeholder: "Digite o e-mail" },
    { key: "telefone", label: "Telefone", placeholder: "(12) 99999-9999" },
    { key: "departamento", label: "Departamento", placeholder: "Selecione o departamento" },
    { key: "admissao", label: "Data de admissão", placeholder: "dd/mm/aaaa" },
    { key: "formacao", label: "Formação", placeholder: "Digite a formação" },
    { key: "observacao", label: "Observação", placeholder: "Digite uma observação", multiline: true },
    { key: "status", label: "Status", placeholder: "Ativo" }
  ];

  return (
    <Formulario
      titulo="Cadastro de Coordenador"
      descricao="Preencha as informações para cadastrar um coordenador."
      campos={campos}
      valores={valores}
      setValores={setValores}
      salvar={() => onSave(valores)}
      cancelar={voltar}
    />
  );
}