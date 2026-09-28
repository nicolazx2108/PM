import React, { useState } from "react";
import { Formulario } from "./BaseScreens";

export default function EditarMatriculaScreen({
  registro,
  onSave,
  voltar
}) {

  const [valores, setValores] = useState(registro || {});

  const campos = [
    { key: "aluno", label: "Aluno", placeholder: "Digite o aluno" },
    { key: "turma", label: "Turma", placeholder: "Digite a turma" },
    { key: "curso", label: "Curso", placeholder: "Digite o curso" },
    { key: "data", label: "Data da matrícula", placeholder: "dd/mm/aaaa" },
    { key: "ano", label: "Ano letivo", placeholder: "2026" },
    { key: "situacao", label: "Situação", placeholder: "Ativa" },
    { key: "observacao", label: "Observação", placeholder: "Digite a observação", multiline: true }
  ];

  return (
    <Formulario
      titulo="Editar Matrícula"
      descricao="Atualize os dados da matrícula."
      campos={campos}
      valores={valores}
      setValores={setValores}
      salvar={() => onSave(valores)}
      cancelar={voltar}
    />
  );
}