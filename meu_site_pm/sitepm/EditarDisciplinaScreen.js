import React, { useState } from "react";
import { Formulario } from "./BaseScreens";

export default function EditarDisciplinaScreen({
  registro,
  onSave,
  voltar
}) {

  const [valores, setValores] = useState(registro || {});

  const campos = [
    { key: "nome", label: "Nome da disciplina", placeholder: "Digite o nome" },
    { key: "codigo", label: "Código", placeholder: "Ex: LOG101" },
    { key: "curso", label: "Curso", placeholder: "Digite o curso" },
    { key: "descricao", label: "Descrição", placeholder: "Digite a descrição", multiline: true },
    { key: "carga", label: "Carga horária", placeholder: "Ex: 80 horas" },
    { key: "professor", label: "Professor responsável", placeholder: "Digite o professor" },
    { key: "status", label: "Status", placeholder: "Ativo" }
  ];

  return (
    <Formulario
      titulo="Editar Disciplina"
      descricao="Atualize os dados da disciplina."
      campos={campos}
      valores={valores}
      setValores={setValores}
      salvar={() => onSave(valores)}
      cancelar={voltar}
    />
  );
}