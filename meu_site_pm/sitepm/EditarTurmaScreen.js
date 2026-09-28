import React, { useState } from "react";
import { Formulario } from "./BaseScreens";

export default function EditarTurmaScreen({
  registro,
  onSave,
  voltar
}) {

  const [valores, setValores] = useState(registro || {});

  const campos = [
    { key: "nome", label: "Nome da turma", placeholder: "Digite o nome" },
    { key: "curso", label: "Curso", placeholder: "Selecione o curso" },
    { key: "periodo", label: "Período", placeholder: "Manhã / Tarde / Noite" },
    { key: "turno", label: "Turno", placeholder: "Digite o turno" },
    { key: "ano", label: "Ano", placeholder: "2026" },
    { key: "capacidade", label: "Capacidade de alunos", placeholder: "Ex: 40" },
    { key: "professor", label: "Professor responsável", placeholder: "Digite o professor" },
    { key: "sala", label: "Sala", placeholder: "Digite a sala" }
  ];

  return (
    <Formulario
      titulo="Editar Turma"
      descricao="Atualize os dados da turma."
      campos={campos}
      valores={valores}
      setValores={setValores}
      salvar={() => onSave(valores)}
      cancelar={voltar}
    />
  );
}