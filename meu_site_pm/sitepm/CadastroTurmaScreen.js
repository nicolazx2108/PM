import React, { useState } from "react";
import { Formulario } from "./BaseScreens";

export default function CadastroTurmaScreen({
  onSave,
  voltar
}) {

  const [valores, setValores] = useState({});

  const campos = [
    { key: "nome", label: "Nome da turma", placeholder: "Ex: 1º Módulo A" },
    { key: "curso", label: "Curso", placeholder: "Selecione o curso" },
    { key: "periodo", label: "Período", placeholder: "Manhã / Tarde / Noite" },
    { key: "turno", label: "Turno", placeholder: "Selecione o turno" },
    { key: "ano", label: "Ano", placeholder: "2026" },
    { key: "capacidade", label: "Capacidade de alunos", placeholder: "Ex: 40" },
    { key: "professor", label: "Professor responsável", placeholder: "Selecione o professor" },
    { key: "sala", label: "Sala", placeholder: "Ex: Sala 10" }
  ];

  return (
    <Formulario
      titulo="Cadastro de Turma"
      descricao="Preencha as informações para cadastrar uma nova turma."
      campos={campos}
      valores={valores}
      setValores={setValores}
      salvar={() => onSave(valores)}
      cancelar={voltar}
    />
  );
}