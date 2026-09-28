import React, { useState } from "react";
import { Formulario } from "./BaseScreens";

export default function EditarResponsavelScreen({
  registro,
  onSave,
  voltar
}) {

  const [valores, setValores] = useState(registro || {});

  const campos = [
    { key: "nome", label: "Nome completo", placeholder: "Digite o nome" },
    { key: "cpf", label: "CPF", placeholder: "000.000.000-00" },
    { key: "rg", label: "RG", placeholder: "Digite o RG" },
    { key: "telefone", label: "Telefone", placeholder: "(12) 99999-9999" },
    { key: "email", label: "E-mail", placeholder: "Digite o e-mail" },
    { key: "parentesco", label: "Parentesco", placeholder: "Digite o parentesco" },
    { key: "endereco", label: "Endereço", placeholder: "Digite o endereço" },
    { key: "observacao", label: "Observação", placeholder: "Digite a observação", multiline: true }
  ];

  return (
    <Formulario
      titulo="Editar Responsável"
      descricao="Atualize os dados do responsável."
      campos={campos}
      valores={valores}
      setValores={setValores}
      salvar={() => onSave(valores)}
      cancelar={voltar}
    />
  );
}