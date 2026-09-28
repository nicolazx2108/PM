import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from "react-native";

export default function HomeScreen({
  navegar,
  sobre
}) {

  const itens = [
    ["Alunos", "ConsultaAlunosScreen"],
    ["Professores", "ConsultaProfessoresScreen"],
    ["Turmas", "ConsultaTurmasScreen"],
    ["Cursos", "ConsultaCursosScreen"],
    ["Disciplinas", "ConsultaDisciplinasScreen"],
    ["Matrículas", "ConsultaMatriculasScreen"],
    ["Responsáveis", "ConsultaResponsaveisScreen"],
    ["Avaliações", "ConsultaAvaliacoesScreen"],
    ["Coordenadores", "ConsultaCoordenadoresScreen"],
    ["Boletins", "ConsultaBoletinsScreen"]
  ];

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.menu}>☰</Text>
        <Text style={styles.headerTitulo}>Home</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>

        <Text style={styles.logo}>🎓</Text>

        <Text style={styles.app}>
          APP_SCHOLAR
        </Text>

        <Text style={styles.subtitulo}>
          Sistema Acadêmico Escolar
        </Text>

        <Text style={styles.bemvindo}>
          Bem-vindo!
        </Text>

        <Text style={styles.descricao}>
          Selecione uma opção para gerenciar os dados acadêmicos.
        </Text>

        <View style={styles.grid}>

          {itens.map(item => (

            <TouchableOpacity
              key={item[0]}
              style={styles.card}
              onPress={() => navegar(item[1])}
            >

              <Text style={styles.cardTitulo}>
                {item[0]}
              </Text>

              <Text style={styles.cardDescricao}>
                Cadastro, consulta e edição
              </Text>

            </TouchableOpacity>

          ))}

        </View>

      </ScrollView>

      <View style={styles.footer}>

        <Text style={styles.footerAtivo}>
          ⌂{"\n"}Home
        </Text>

        <TouchableOpacity onPress={sobre}>
          <Text style={styles.footerTexto}>
            ⓘ{"\n"}Sobre
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F6F8FB"
  },

  header: {
    height: 82,
    backgroundColor: "#07539B",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 14
  },

  menu: {
    position: "absolute",
    left: 16,
    bottom: 14,
    color: "#FFF",
    fontSize: 22
  },

  headerTitulo: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700"
  },

  content: {
    padding: 18,
    alignItems: "center"
  },

  logo: {
    fontSize: 48,
    marginTop: 10
  },

  app: {
    color: "#123B62",
    fontSize: 20,
    fontWeight: "800"
  },

  subtitulo: {
    color: "#66768A",
    fontSize: 11
  },

  bemvindo: {
    color: "#07539B",
    fontSize: 16,
    fontWeight: "800",
    marginTop: 18
  },

  descricao: {
    color: "#687789",
    fontSize: 11,
    textAlign: "center",
    marginBottom: 14
  },

  grid: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },

  card: {
    width: "48%",
    backgroundColor: "#FFF",
    padding: 13,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginBottom: 10,
    minHeight: 70
  },

  cardTitulo: {
    color: "#173E64",
    fontSize: 12,
    fontWeight: "700"
  },

  cardDescricao: {
    color: "#7A8794",
    fontSize: 9,
    marginTop: 4
  },

  footer: {
    height: 58,
    backgroundColor: "#FFF",
    borderTopWidth: 1,
    borderColor: "#E2E7EC",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },

  footerAtivo: {
    color: "#07539B",
    fontSize: 10,
    textAlign: "center",
    fontWeight: "700"
  },

  footerTexto: {
    color: "#7A8794",
    fontSize: 10,
    textAlign: "center"
  }

});