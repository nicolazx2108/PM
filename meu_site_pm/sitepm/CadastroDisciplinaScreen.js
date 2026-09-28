import React, { useState } from "react";
import { Formulario } from "./BaseScreens";

export default function CadastroDisciplinaScreen({
  onSave,
  voltar
}) {

  const [valores, setValores] = useState({});

  const campos = [
    { key: "nome", label: "Nome da disciplina", placeholder: "Digite o nome" },
    { key: "codigo", label: "Código da disciplina", placeholder: "Ex: LOG101" },
    { key: "curso", label: "Curso", placeholder: "Selecione o curso" },
    { key: "descricao", label: "Descrição", placeholder: "Digite a descrição", multiline: true },
    { key: "carga", label: "Carga horária", placeholder: "Ex: 80 horas" },
    { key: "professor", label: "Professor responsável", placeholder: "Selecione o professor" },
    { key: "status", label: "Status", placeholder: "Ativo" }
  ];

  return (
    <Formulario
      titulo="Cadastro de Disciplina"
      descricao="Preencha as informações para cadastrar uma disciplina."
      campos={campos}
      valores={valores}
      setValores={setValores}
      salvar={() => onSave(valores)}
      cancelar={voltar}
    />
  );
}