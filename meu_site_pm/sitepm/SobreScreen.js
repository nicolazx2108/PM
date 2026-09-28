import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";

export default function SobreScreen({
  voltar
}) {

  return (
    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={voltar}>
          <Text style={styles.voltar}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.titulo}>
          Sobre
        </Text>

      </View>

      <View style={styles.content}>

        <Text style={styles.logo}>
          🎓
        </Text>

        <Text style={styles.app}>
          APP_SCHOLAR
        </Text>

        <Text style={styles.subtitulo}>
          Sistema Acadêmico Escolar
        </Text>

        <Text style={styles.versao}>
          Versão 1.0.0
        </Text>

        <View style={styles.card}>

          <Text style={styles.itemTitulo}>
            Sobre o App
          </Text>

          <Text style={styles.texto}>
            O App Scholar é um sistema acadêmico
            desenvolvido para facilitar o gerenciamento
            de alunos, professores, turmas, cursos,
            disciplinas e demais informações escolares.
          </Text>

          <Text style={styles.itemTitulo}>
            Objetivo
          </Text>

          <Text style={styles.texto}>
            Facilitar o gerenciamento das informações
            acadêmicas, promovendo organização e
            segurança.
          </Text>

          <Text style={styles.itemTitulo}>
            Tecnologia
          </Text>

          <Text style={styles.texto}>
            Desenvolvido utilizando React Native.
          </Text>

        </View>

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
    flexDirection: "row",
    alignItems: "flex-end",
    padding: 16,
    paddingBottom: 14
  },

  voltar: {
    color: "#FFF",
    fontSize: 34
  },

  titulo: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700",
    flex: 1,
    textAlign: "center"
  },

  content: {
    padding: 20,
    alignItems: "center"
  },

  logo: {
    fontSize: 55,
    marginTop: 10
  },

  app: {
    color: "#123B62",
    fontSize: 22,
    fontWeight: "800"
  },

  subtitulo: {
    color: "#66768A",
    fontSize: 12
  },

  versao: {
    color: "#07539B",
    fontSize: 12,
    marginTop: 5
  },

  card: {
    backgroundColor: "#FFF",
    padding: 18,
    borderRadius: 10,
    marginTop: 20,
    width: "100%"
  },

  itemTitulo: {
    color: "#07539B",
    fontWeight: "700",
    marginTop: 10,
    marginBottom: 5
  },

  texto: {
    color: "#687789",
    fontSize: 12,
    lineHeight: 18
  }

});