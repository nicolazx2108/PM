import React, { useState } from "react";
import { Formulario } from "./BaseScreens";

export default function EditarAvaliacaoScreen({
  registro,
  onSave,
  voltar
}) {

  const [valores, setValores] = useState(registro || {});

  const campos = [
    { key: "aluno", label: "Aluno", placeholder: "Digite o aluno" },
    { key: "disciplina", label: "Disciplina", placeholder: "Digite a disciplina" },
    { key: "tipo", label: "Tipo de avaliação", placeholder: "Digite o tipo" },
    { key: "titulo", label: "Descrição / Título", placeholder: "Digite o título" },
    { key: "data", label: "Data da avaliação", placeholder: "dd/mm/aaaa" },
    { key: "valor", label: "Valor máximo", placeholder: "Ex: 10,0" },
    { key: "nota", label: "Nota obtida", placeholder: "Ex: 8,5" },
    { key: "observacao", label: "Observação", placeholder: "Digite a observação", multiline: true }
  ];

  return (
    <Formulario
      titulo="Editar Avaliação"
      descricao="Atualize os dados da avaliação."
      campos={campos}
      valores={valores}
      setValores={setValores}
      salvar={() => onSave(valores)}
      cancelar={voltar}
    />
  );
}