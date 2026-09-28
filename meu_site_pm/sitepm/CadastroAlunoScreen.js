import React, { useState } from "react";
import { Formulario } from "./BaseScreens";

export default function CadastroAlunoScreen({
  onSave,
  voltar
}) {

  const [valores, setValores] = useState({});

  const campos = [
    {
      key: "nome",
      label: "Nome completo",
      placeholder: "Digite o nome completo"
    },
    {
      key: "nascimento",
      label: "Data de nascimento",
      placeholder: "dd/mm/aaaa"
    },
    {
      key: "cpf",
      label: "CPF",
      placeholder: "000.000.000-00"
    },
    {
      key: "ra",
      label: "RA",
      placeholder: "Digite o RA"
    },
    {
      key: "email",
      label: "E-mail",
      placeholder: "Digite o e-mail"
    },
    {
      key: "telefone",
      label: "Telefone",
      placeholder: "(12) 99999-9999"
    },
    {
      key: "curso",
      label: "Curso",
      placeholder: "Selecione o curso"
    },
    {
      key: "turma",
      label: "Turma",
      placeholder: "Selecione a turma"
    }
  ];

  return (
    <Formulario
      titulo="Cadastro de Aluno"
      descricao="Preencha as informações abaixo para cadastrar um novo aluno."
      campos={campos}
      valores={valores}
      setValores={setValores}
      salvar={() => onSave(valores)}
      cancelar={voltar}
    />
  );
}