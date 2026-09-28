import React, { useState } from "react";
import { Formulario } from "./BaseScreens";

export default function EditarCoordenadorScreen({
  registro,
  onSave,
  voltar
}) {

  const [valores, setValores] = useState(registro || {});

  const campos = [
    { key: "nome", label: "Nome completo", placeholder: "Digite o nome" },
    { key: "email", label: "E-mail", placeholder: "Digite o e-mail" },
    { key: "telefone", label: "Telefone", placeholder: "(12) 99999-9999" },
    { key: "departamento", label: "Departamento", placeholder: "Digite o departamento" },
    { key: "admissao", label: "Data de admissão", placeholder: "dd/mm/aaaa" },
    { key: "formacao", label: "Formação", placeholder: "Digite a formação" },
    { key: "observacao", label: "Observação", placeholder: "Digite a observação", multiline: true },
    { key: "status", label: "Status", placeholder: "Ativo" }
  ];

  return (
    <Formulario
      titulo="Editar Coordenador"
      descricao="Atualize os dados do coordenador."
      campos={campos}
      valores={valores}
      setValores={setValores}
      salvar={() => onSave(valores)}
      cancelar={voltar}
    />
  );
}