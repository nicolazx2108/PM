import React, { useState } from "react";
import { Formulario } from "./BaseScreens";

export default function CadastroBoletimScreen({
  onSave,
  voltar
}) {

  const [valores, setValores] = useState({});

  const campos = [
    { key: "aluno", label: "Aluno", placeholder: "Selecione o aluno" },
    { key: "turma", label: "Turma", placeholder: "Selecione a turma" },
    { key: "periodo", label: "Período", placeholder: "Ex: 1º Bimestre / 2026" },
    { key: "disciplina", label: "Disciplina", placeholder: "Selecione a disciplina" },
    { key: "nota", label: "Nota", placeholder: "Ex: 8,5" },
    { key: "faltas", label: "Faltas", placeholder: "Ex: 2" },
    { key: "situacao", label: "Situação", placeholder: "Aprovado" },
    { key: "observacao", label: "Observação", placeholder: "Digite uma observação", multiline: true }
  ];

  return (
    <Formulario
      titulo="Cadastro de Boletim"
      descricao="Preencha os dados do boletim."
      campos={campos}
      valores={valores}
      setValores={setValores}
      salvar={() => onSave(valores)}
      cancelar={voltar}
    />
  );
}