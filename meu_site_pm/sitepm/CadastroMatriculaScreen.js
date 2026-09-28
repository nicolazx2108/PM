import React, { useState } from "react";
import { Formulario } from "./BaseScreens";

export default function CadastroMatriculaScreen({
  onSave,
  voltar
}) {

  const [valores, setValores] = useState({});

  const campos = [
    { key: "aluno", label: "Aluno", placeholder: "Selecione o aluno" },
    { key: "turma", label: "Turma", placeholder: "Selecione a turma" },
    { key: "curso", label: "Curso", placeholder: "Selecione o curso" },
    { key: "data", label: "Data da matrícula", placeholder: "dd/mm/aaaa" },
    { key: "ano", label: "Ano letivo", placeholder: "2026" },
    { key: "situacao", label: "Situação", placeholder: "Ativa" },
    { key: "observacao", label: "Observação", placeholder: "Digite uma observação", multiline: true }
  ];

  return (
    <Formulario
      titulo="Nova Matrícula"
      descricao="Preencha as informações abaixo para realizar uma nova matrícula."
      campos={campos}
      valores={valores}
      setValores={setValores}
      salvar={() => onSave(valores)}
      cancelar={voltar}
    />
  );
}