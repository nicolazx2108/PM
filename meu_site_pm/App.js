import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

import HomeScreen from "./sitepm/HomeScreen";
import SobreScreen from "./sitepm/SobreScreen";

import CadastroAlunoScreen from "./sitepm/CadastroAlunoScreen";
import ConsultaAlunosScreen from "./sitepm/ConsultaAlunosScreen";
import EditarAlunoScreen from "./sitepm/EditarAlunoScreen";

import CadastroProfessorScreen from "./sitepm/CadastroProfessorScreen";
import ConsultaProfessoresScreen from "./sitepm/ConsultaProfessoresScreen";
import EditarProfessorScreen from "./sitepm/EditarProfessorScreen";

import CadastroTurmaScreen from "./sitepm/CadastroTurmaScreen";
import ConsultaTurmasScreen from "./sitepm/ConsultaTurmasScreen";
import EditarTurmaScreen from "./sitepm/EditarTurmaScreen";

import CadastroCursoScreen from "./sitepm/CadastroCursoScreen";
import ConsultaCursosScreen from "./sitepm/ConsultaCursosScreen";
import EditarCursoScreen from "./sitepm/EditarCursoScreen";

import CadastroDisciplinaScreen from "./sitepm/CadastroDisciplinaScreen";
import ConsultaDisciplinasScreen from "./sitepm/ConsultaDisciplinasScreen";
import EditarDisciplinaScreen from "./sitepm/EditarDisciplinaScreen";

import CadastroMatriculaScreen from "./sitepm/CadastroMatriculaScreen";
import ConsultaMatriculasScreen from "./sitepm/ConsultaMatriculasScreen";
import EditarMatriculaScreen from "./sitepm/EditarMatriculaScreen";

import CadastroResponsavelScreen from "./sitepm/CadastroResponsavelScreen";
import ConsultaResponsaveisScreen from "./sitepm/ConsultaResponsaveisScreen";
import EditarResponsavelScreen from "./sitepm/EditarResponsavelScreen";

import CadastroAvaliacaoScreen from "./sitepm/CadastroAvaliacaoScreen";
import ConsultaAvaliacoesScreen from "./sitepm/ConsultaAvaliacoesScreen";
import EditarAvaliacaoScreen from "./sitepm/EditarAvaliacaoScreen";

import CadastroCoordenadorScreen from "./sitepm/CadastroCoordenadorScreen";
import ConsultaCoordenadoresScreen from "./sitepm/ConsultaCoordenadoresScreen";
import EditarCoordenadorScreen from "./sitepm/EditarCoordenadorScreen";

import CadastroBoletimScreen from "./sitepm/CadastroBoletimScreen";
import ConsultaBoletinsScreen from "./sitepm/ConsultaBoletinsScreen";
import EditarBoletimScreen from "./sitepm/EditarBoletimScreen";

const dadosIniciais = {
  Aluno: [],
  Professor: [],
  Turma: [],
  Curso: [],
  Disciplina: [],
  Matricula: [],
  Responsavel: [],
  Avaliacao: [],
  Coordenador: [],
  Boletim: []
};

export default function App() {
  const [tela, setTela] = useState("HomeScreen");
  const [registroSelecionado, setRegistroSelecionado] = useState(null);
  const [dados, setDados] = useState(dadosIniciais);

  function navegar(nome) {
    setTela(nome);
  }

  function adicionar(tipo, registro) {
    const novoRegistro = {
      id: Date.now(),
      ...registro
    };

    setDados(atual => ({
      ...atual,
      [tipo]: [...atual[tipo], novoRegistro]
    }));

    Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
  }

  function atualizar(tipo, registro) {
    setDados(atual => ({
      ...atual,
      [tipo]: atual[tipo].map(item =>
        item.id === registro.id ? registro : item
      )
    }));

    Alert.alert("Sucesso", "Registro atualizado com sucesso!");
  }

  function excluir(tipo, id) {
    Alert.alert(
      "Excluir",
      "Deseja realmente excluir este registro?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Excluir",
          onPress: () => {
            setDados(atual => ({
              ...atual,
              [tipo]: atual[tipo].filter(item => item.id !== id)
            }));
          }
        }
      ]
    );
  }

  function abrirEdicao(tipo, registro) {
    setRegistroSelecionado(registro);
    navegar("Editar" + tipo + "Screen");
  }

  if (tela === "HomeScreen") {
    return (
      <HomeScreen
        navegar={navegar}
        sobre={() => navegar("SobreScreen")}
      />
    );
  }

  if (tela === "SobreScreen") {
    return (
      <SobreScreen
        voltar={() => navegar("HomeScreen")}
      />
    );
  }

  if (tela === "CadastroAlunoScreen") {
    return (
      <CadastroAlunoScreen
        voltar={() => navegar("ConsultaAlunosScreen")}
        onSave={registro => adicionar("Aluno", registro)}
      />
    );
  }

  if (tela === "ConsultaAlunosScreen") {
    return (
      <ConsultaAlunosScreen
        dados={dados.Aluno}
        novo={() => navegar("CadastroAlunoScreen")}
        editar={registro => abrirEdicao("Aluno", registro)}
        excluir={id => excluir("Aluno", id)}
        voltar={() => navegar("HomeScreen")}
      />
    );
  }

  if (tela === "EditarAlunoScreen") {
    return (
      <EditarAlunoScreen
        registro={registroSelecionado}
        voltar={() => navegar("ConsultaAlunosScreen")}
        onSave={registro => atualizar("Aluno", registro)}
      />
    );
  }

  if (tela === "CadastroProfessorScreen") {
    return (
      <CadastroProfessorScreen
        voltar={() => navegar("ConsultaProfessoresScreen")}
        onSave={registro => adicionar("Professor", registro)}
      />
    );
  }

  if (tela === "ConsultaProfessoresScreen") {
    return (
      <ConsultaProfessoresScreen
        dados={dados.Professor}
        novo={() => navegar("CadastroProfessorScreen")}
        editar={registro => abrirEdicao("Professor", registro)}
        excluir={id => excluir("Professor", id)}
        voltar={() => navegar("HomeScreen")}
      />
    );
  }

  if (tela === "EditarProfessorScreen") {
    return (
      <EditarProfessorScreen
        registro={registroSelecionado}
        voltar={() => navegar("ConsultaProfessoresScreen")}
        onSave={registro => atualizar("Professor", registro)}
      />
    );
  }

  if (tela === "CadastroTurmaScreen") {
    return (
      <CadastroTurmaScreen
        voltar={() => navegar("ConsultaTurmasScreen")}
        onSave={registro => adicionar("Turma", registro)}
      />
    );
  }

  if (tela === "ConsultaTurmasScreen") {
    return (
      <ConsultaTurmasScreen
        dados={dados.Turma}
        novo={() => navegar("CadastroTurmaScreen")}
        editar={registro => abrirEdicao("Turma", registro)}
        excluir={id => excluir("Turma", id)}
        voltar={() => navegar("HomeScreen")}
      />
    );
  }

  if (tela === "EditarTurmaScreen") {
    return (
      <EditarTurmaScreen
        registro={registroSelecionado}
        voltar={() => navegar("ConsultaTurmasScreen")}
        onSave={registro => atualizar("Turma", registro)}
      />
    );
  }

  if (tela === "CadastroCursoScreen") {
    return (
      <CadastroCursoScreen
        voltar={() => navegar("ConsultaCursosScreen")}
        onSave={registro => adicionar("Curso", registro)}
      />
    );
  }

  if (tela === "ConsultaCursosScreen") {
    return (
      <ConsultaCursosScreen
        dados={dados.Curso}
        novo={() => navegar("CadastroCursoScreen")}
        editar={registro => abrirEdicao("Curso", registro)}
        excluir={id => excluir("Curso", id)}
        voltar={() => navegar("HomeScreen")}
      />
    );
  }

  if (tela === "EditarCursoScreen") {
    return (
      <EditarCursoScreen
        registro={registroSelecionado}
        voltar={() => navegar("ConsultaCursosScreen")}
        onSave={registro => atualizar("Curso", registro)}
      />
    );  
  }

  if (tela === "CadastroDisciplinaScreen") {
    return (
      <CadastroDisciplinaScreen
        voltar={() => navegar("ConsultaDisciplinasScreen")}
        onSave={registro => adicionar("Disciplina", registro)}
      />
    );
  }

  if (tela === "ConsultaDisciplinasScreen") {
    return (
      <ConsultaDisciplinasScreen
        dados={dados.Disciplina}
        novo={() => navegar("CadastroDisciplinaScreen")}
        editar={registro => abrirEdicao("Disciplina", registro)}
        excluir={id => excluir("Disciplina", id)}
        voltar={() => navegar("HomeScreen")}
      />
    );
  }

  if (tela === "EditarDisciplinaScreen") {
    return (
      <EditarDisciplinaScreen
        registro={registroSelecionado}
        voltar={() => navegar("ConsultaDisciplinasScreen")}
        onSave={registro => atualizar("Disciplina", registro)}
      />
    );
  }

  if (tela === "CadastroMatriculaScreen") {
    return (
      <CadastroMatriculaScreen
        voltar={() => navegar("ConsultaMatriculasScreen")}
        onSave={registro => adicionar("Matricula", registro)}
      />
    );
  }

  if (tela === "ConsultaMatriculasScreen") {
    return (
      <ConsultaMatriculasScreen
        dados={dados.Matricula}
        novo={() => navegar("CadastroMatriculaScreen")}
        editar={registro => abrirEdicao("Matricula", registro)}
        excluir={id => excluir("Matricula", id)}
        voltar={() => navegar("HomeScreen")}
      />
    );
  }

  if (tela === "EditarMatriculaScreen") {
    return (
      <EditarMatriculaScreen
        registro={registroSelecionado}
        voltar={() => navegar("ConsultaMatriculasScreen")}
        onSave={registro => atualizar("Matricula", registro)}
      />
    );
  }

  if (tela === "CadastroResponsavelScreen") {
    return (
      <CadastroResponsavelScreen
        voltar={() => navegar("ConsultaResponsaveisScreen")}
        onSave={registro => adicionar("Responsavel", registro)}
      />
    );
  }

  if (tela === "ConsultaResponsaveisScreen") {
    return (
      <ConsultaResponsaveisScreen
        dados={dados.Responsavel}
        novo={() => navegar("CadastroResponsavelScreen")}
        editar={registro => abrirEdicao("Responsavel", registro)}
        excluir={id => excluir("Responsavel", id)}
        voltar={() => navegar("HomeScreen")}
      />
    );
  }

  if (tela === "EditarResponsavelScreen") {
    return (
      <EditarResponsavelScreen
        registro={registroSelecionado}
        voltar={() => navegar("ConsultaResponsaveisScreen")}
        onSave={registro => atualizar("Responsavel", registro)}
      />
    );
  }

  if (tela === "CadastroAvaliacaoScreen") {
    return (
      <CadastroAvaliacaoScreen
        voltar={() => navegar("ConsultaAvaliacoesScreen")}
        onSave={registro => adicionar("Avaliacao", registro)}
      />
    );
  }

  if (tela === "ConsultaAvaliacoesScreen") {
    return (
      <ConsultaAvaliacoesScreen
        dados={dados.Avaliacao}
        novo={() => navegar("CadastroAvaliacaoScreen")}
        editar={registro => abrirEdicao("Avaliacao", registro)}
        excluir={id => excluir("Avaliacao", id)}
        voltar={() => navegar("HomeScreen")}
      />
    );
  }

  if (tela === "EditarAvaliacaoScreen") {
    return (
      <EditarAvaliacaoScreen
        registro={registroSelecionado}
        voltar={() => navegar("ConsultaAvaliacoesScreen")}
        onSave={registro => atualizar("Avaliacao", registro)}
      />
    );
  }

  if (tela === "CadastroCoordenadorScreen") {
    return (
      <CadastroCoordenadorScreen
        voltar={() => navegar("ConsultaCoordenadoresScreen")}
        onSave={registro => adicionar("Coordenador", registro)}
      />
    );
  }

  if (tela === "ConsultaCoordenadoresScreen") {
    return (
      <ConsultaCoordenadoresScreen
        dados={dados.Coordenador}
        novo={() => navegar("CadastroCoordenadorScreen")}
        editar={registro => abrirEdicao("Coordenador", registro)}
        excluir={id => excluir("Coordenador", id)}
        voltar={() => navegar("HomeScreen")}
      />
    );
  }

  if (tela === "EditarCoordenadorScreen") {
    return (
      <EditarCoordenadorScreen
        registro={registroSelecionado}
        voltar={() => navegar("ConsultaCoordenadoresScreen")}
        onSave={registro => atualizar("Coordenador", registro)}
      />
    );
  }

  if (tela === "CadastroBoletimScreen") {
    return (
      <CadastroBoletimScreen
        voltar={() => navegar("ConsultaBoletinsScreen")}
        onSave={registro => adicionar("Boletim", registro)}
      />
    );
  }

  if (tela === "ConsultaBoletinsScreen") {
    return (
      <ConsultaBoletinsScreen
        dados={dados.Boletim}
        novo={() => navegar("CadastroBoletimScreen")}
        editar={registro => abrirEdicao("Boletim", registro)}
        excluir={id => excluir("Boletim", id)}
        voltar={() => navegar("HomeScreen")}
      />
    );
  }

  if (tela === "EditarBoletimScreen") {
    return (
      <EditarBoletimScreen
        registro={registroSelecionado}
        voltar={() => navegar("ConsultaBoletinsScreen")}
        onSave={registro => atualizar("Boletim", registro)}
      />
    );
  }

  return (
    <View style={styles.erro}>
      <Text>Tela não encontrada</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  erro: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

const excluirAluno = (id) => {
  setAlunos((lista) => lista.filter((aluno) => aluno.id !== id));
};