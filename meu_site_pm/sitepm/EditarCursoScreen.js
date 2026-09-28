import React, { useState } from "react";
import { Formulario } from "./BaseScreens";

export default function EditarCursoScreen({
  registro,
  onSave,
  voltar
}) {

  const [valores, setValores] = useState(registro || {});

  const campos = [
    { key: "nome", label: "Nome do curso", placeholder: "Digite o nome" },
    { key: "area", label: "Área", placeholder: "Digite a área" },
    { key: "descricao", label: "Descrição", placeholder: "Digite a descrição", multiline: true },
    { key: "duracao", label: "Duração", placeholder: "Ex: 3 anos" },
    { key: "carga", label: "Carga horária", placeholder: "Ex: 2400 horas" },
    { key: "modalidade", label: "Modalidade", placeholder: "Presencial" },
    { key: "status", label: "Status", placeholder: "Ativo" }
  ];

  return (
    <Formulario
      titulo="Editar Curso"
      descricao="Atualize os dados do curso."
      campos={campos}
      valores={valores}
      setValores={setValores}
      salvar={() => onSave(valores)}
      cancelar={voltar}
    />
  );
}