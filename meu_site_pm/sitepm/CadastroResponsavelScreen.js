import React, { useState } from "react";
import { Formulario } from "./BaseScreens";

export default function CadastroResponsavelScreen({
  onSave,
  voltar
}) {

  const [valores, setValores] = useState({});

  const campos = [
    { key: "nome", label: "Nome completo", placeholder: "Digite o nome" },
    { key: "cpf", label: "CPF", placeholder: "000.000.000-00" },
    { key: "rg", label: "RG", placeholder: "Digite o RG" },
    { key: "telefone", label: "Telefone", placeholder: "(12) 99999-9999" },
    { key: "email", label: "E-mail", placeholder: "Digite o e-mail" },
    { key: "parentesco", label: "Parentesco", placeholder: "Pai / Mãe / Responsável" },
    { key: "endereco", label: "Endereço", placeholder: "Digite o endereço" },
    { key: "observacao", label: "Observação", placeholder: "Digite uma observação", multiline: true }
  ];

  return (
    <Formulario
      titulo="Cadastro de Responsável"
      descricao="Preencha as informações para cadastrar um responsável."
      campos={campos}
      valores={valores}
      setValores={setValores}
      salvar={() => onSave(valores)}
      cancelar={voltar}
    />
  );
}