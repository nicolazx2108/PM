import React, { useState } from "react";
import { Formulario } from "./BaseScreens";

export default function EditarBoletimScreen({
  registro,
  onSave,
  voltar
}) {

  const [valores, setValores] = useState(registro || {});

  const campos = [
    { key: "aluno", label: "Aluno", placeholder: "Digite o aluno" },
    { key: "turma", label: "Turma", placeholder: "Digite a turma" },
    { key: "periodo", label: "Período", placeholder: "Ex: 1º Bimestre / 2026" },
    { key: "disciplina", label: "Disciplina", placeholder: "Digite a disciplina" },
    { key: "nota", label: "Nota", placeholder: "Ex: 8,5" },
    { key: "faltas", label: "Faltas", placeholder: "Ex: 2" },
    { key: "situacao", label: "Situação", placeholder: "Aprovado" },
    { key: "observacao", label: "Observação", placeholder: "Digite a observação", multiline: true }
  ];

  return (
    <Formulario
      titulo="Editar Boletim"
      descricao="Atualize os dados do boletim."
      campos={campos}
      valores={valores}
      setValores={setValores}
      salvar={() => onSave(valores)}
      cancelar={voltar}
    />
  );
}