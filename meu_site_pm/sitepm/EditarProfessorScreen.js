import React, { useState } from "react";
import { Formulario } from "./BaseScreens";

export default function EditarProfessorScreen({
  registro,
  onSave,
  voltar
}) {

  const [valores, setValores] = useState(registro || {});

  const campos = [
    { key: "nome", label: "Nome completo", placeholder: "Digite o nome" },
    { key: "nascimento", label: "Data de nascimento", placeholder: "dd/mm/aaaa" },
    { key: "cpf", label: "CPF", placeholder: "000.000.000-00" },
    { key: "email", label: "E-mail", placeholder: "Digite o e-mail" },
    { key: "telefone", label: "Telefone", placeholder: "(12) 99999-9999" },
    { key: "disciplina", label: "Disciplina / área", placeholder: "Digite a disciplina" },
    { key: "formacao", label: "Formação", placeholder: "Digite a formação" },
    { key: "admissao", label: "Data de admissão", placeholder: "dd/mm/aaaa" }
  ];

  return (
    <Formulario
      titulo="Editar Professor"
      descricao="Atualize as informações do professor."
      campos={campos}
      valores={valores}
      setValores={setValores}
      salvar={() => onSave(valores)}
      cancelar={voltar}
    />
  );
}