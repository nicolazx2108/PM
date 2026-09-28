import React, { useState } from "react";
import { Formulario } from "./BaseScreens";

export default function CadastroAvaliacaoScreen({
  onSave,
  voltar
}) {

  const [valores, setValores] = useState({});

  const campos = [
    { key: "aluno", label: "Aluno", placeholder: "Selecione o aluno" },
    { key: "disciplina", label: "Disciplina", placeholder: "Selecione a disciplina" },
    { key: "tipo", label: "Tipo de avaliação", placeholder: "Prova / Trabalho / Seminário" },
    { key: "titulo", label: "Descrição / Título", placeholder: "Digite o título" },
    { key: "data", label: "Data da avaliação", placeholder: "dd/mm/aaaa" },
    { key: "valor", label: "Valor máximo", placeholder: "Ex: 10,0" },
    { key: "nota", label: "Nota obtida", placeholder: "Ex: 8,5" },
    { key: "observacao", label: "Observação", placeholder: "Digite uma observação", multiline: true }
  ];

  return (
    <Formulario
      titulo="Cadastro de Avaliação"
      descricao="Preencha as informações para cadastrar uma nova avaliação."
      campos={campos}
      valores={valores}
      setValores={setValores}
      salvar={() => onSave(valores)}
      cancelar={voltar}
    />
  );
}