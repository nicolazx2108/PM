import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from "react-native";

export function Formulario({
  titulo,
  descricao,
  campos,
  valores,
  setValores,
  salvar,
  cancelar
}) {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={cancelar}>
          <Text style={styles.voltar}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.titulo}>
          {titulo}
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>

        <Text style={styles.subtitulo}>
          Dados
        </Text>

        <Text style={styles.descricao}>
          {descricao}
        </Text>

        {campos.map(campo => (
          <View key={campo.key} style={styles.campo}>

            <Text style={styles.label}>
              {campo.label}
            </Text>

            <TextInput
              value={valores[campo.key] || ""}
              onChangeText={valor =>
                setValores({
                  ...valores,
                  [campo.key]: valor
                })
              }
              placeholder={campo.placeholder}
              multiline={campo.multiline}
              style={[
                styles.input,
                campo.multiline && styles.area
              ]}
            />

          </View>
        ))}

        <View style={styles.botoes}>

          <TouchableOpacity
            style={styles.cancelar}
            onPress={cancelar}
          >
            <Text>Cancelar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.salvar}
            onPress={salvar}
          >
            <Text style={styles.salvarTexto}>
              Salvar
            </Text>
          </TouchableOpacity>

        </View>

      </ScrollView>
    </View>
  );
}

export function Lista({
  titulo,
  dados,
  campos,
  novo,
  editar,
  excluir,
  voltar
}) {
  const [pesquisa, setPesquisa] = useState("");

  const filtrados = dados.filter(item =>
    Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(pesquisa.toLowerCase())
  );

  return (
    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={voltar}>
          <Text style={styles.voltar}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.titulo}>
          {titulo}
        </Text>

      </View>

      <View style={styles.content}>

        <Text style={styles.subtitulo}>
          Lista de {titulo}
        </Text>

        <Text style={styles.descricao}>
          Pesquise ou selecione um registro para visualizar, editar ou excluir.
        </Text>

        <TextInput
          value={pesquisa}
          onChangeText={setPesquisa}
          placeholder="Pesquisar..."
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.novo}
          onPress={novo}
        >
          <Text style={styles.salvarTexto}>
            + Novo
          </Text>
        </TouchableOpacity>

        <ScrollView>

          {filtrados.map(item => (

            <View
              key={item.id}
              style={styles.card}
            >

              <View style={{ flex: 1 }}>

                <Text style={styles.nome}>
                  {item[campos[0].key] || "Registro"}
                </Text>

                {campos.slice(1, 4).map(campo => (

                  <Text
                    key={campo.key}
                    style={styles.info}
                  >
                    {campo.label}: {item[campo.key] || "-"}
                  </Text>

                ))}

              </View>

              <TouchableOpacity
                onPress={() => editar(item)}
              >
                <Text style={styles.editar}>
                  ✎
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => excluir(item.id)}
              >
                <Text style={styles.excluir}>
                  🗑
                </Text>
              </TouchableOpacity>

            </View>

          ))}

          {filtrados.length === 0 && (
            <Text style={styles.vazio}>
              Nenhum registro encontrado.
            </Text>
          )}

        </ScrollView>

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
    paddingHorizontal: 16,
    paddingBottom: 14
  },

  voltar: {
    color: "#FFF",
    fontSize: 34,
    width: 40
  },

  titulo: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700",
    flex: 1,
    textAlign: "center",
    marginRight: 40
  },

  content: {
    padding: 18,
    paddingBottom: 30
  },

  subtitulo: {
    color: "#123B62",
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 5
  },

  descricao: {
    color: "#6B7280",
    fontSize: 11,
    marginBottom: 12
  },

  campo: {
    marginBottom: 10
  },

  label: {
    color: "#253B53",
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 5
  },

  input: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#D7DEE7",
    borderRadius: 7,
    padding: 10,
    fontSize: 13
  },

  area: {
    minHeight: 80,
    textAlignVertical: "top"
  },

  botoes: {
    flexDirection: "row",
    marginTop: 12
  },

  cancelar: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#9AA7B5",
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
    marginRight: 5
  },

  salvar: {
    flex: 1,
    backgroundColor: "#07539B",
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
    marginLeft: 5
  },

  salvarTexto: {
    color: "#FFF",
    fontWeight: "700"
  },

  novo: {
    backgroundColor: "#07539B",
    padding: 10,
    borderRadius: 6,
    alignSelf: "flex-end",
    marginBottom: 10
  },

  card: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 9,
    padding: 12,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center"
  },

  nome: {
    color: "#173E64",
    fontSize: 14,
    fontWeight: "700"
  },

  info: {
    color: "#657487",
    fontSize: 11,
    marginTop: 2
  },

  editar: {
    color: "#07539B",
    fontSize: 21,
    padding: 5
  },

  excluir: {
    color: "#D52F3F",
    fontSize: 18,
    padding: 5
  },

  vazio: {
    textAlign: "center",
    color: "#7A8794",
    marginTop: 20
  }

});