import React, { useState } from "react";
import { Formulario } from "./BaseScreens";

export default function CadastroCursoScreen({
  onSave,
  voltar
}) {

  const [valores, setValores] = useState({});

  const campos = [
    { key: "nome", label: "Nome do curso", placeholder: "Digite o nome do curso" },
    { key: "area", label: "Área", placeholder: "Selecione a área" },
    { key: "descricao", label: "Descrição", placeholder: "Digite uma descrição", multiline: true },
    { key: "duracao", label: "Duração", placeholder: "Ex: 3 anos" },
    { key: "carga", label: "Carga horária", placeholder: "Ex: 2400 horas" },
    { key: "modalidade", label: "Modalidade", placeholder: "Presencial / Online" },
    { key: "status", label: "Status", placeholder: "Ativo / Inativo" }
  ];

  return (
    <Formulario
      titulo="Cadastro de Curso"
      descricao="Preencha as informações para cadastrar um novo curso."
      campos={campos}
      valores={valores}
      setValores={setValores}
      salvar={() => onSave(valores)}
      cancelar={voltar}
    />
  );
}