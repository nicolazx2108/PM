import React, { useState } from "react";
import { Formulario } from "./BaseScreens";

export default function EditarAlunoScreen({
  registro,
  onSave,
  voltar
}) {

  const [valores, setValores] = useState(registro || {});

  const campos = [
    { key: "nome", label: "Nome completo", placeholder: "Digite o nome" },
    { key: "nascimento", label: "Data de nascimento", placeholder: "dd/mm/aaaa" },
    { key: "cpf", label: "CPF", placeholder: "000.000.000-00" },
    { key: "ra", label: "RA", placeholder: "Digite o RA" },
    { key: "email", label: "E-mail", placeholder: "Digite o e-mail" },
    { key: "telefone", label: "Telefone", placeholder: "(12) 99999-9999" },
    { key: "curso", label: "Curso", placeholder: "Selecione o curso" },
    { key: "turma", label: "Turma", placeholder: "Selecione a turma" }
  ];

  return (
    <Formulario
      titulo="Editar Aluno"
      descricao="Atualize as informações do aluno e clique em salvar."
      campos={campos}
      valores={valores}
      setValores={setValores}
      salvar={() => onSave(valores)}
      cancelar={voltar}
    />
  );
}