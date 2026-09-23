import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
  SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

const STORAGE_KEY = '@animais';

export default function NovoAnimal({ navigation }) {
  const [nome, setNome] = useState('');
  const [especie, setEspecie] = useState('Cachorro');
  const [raca, setRaca] = useState('');

  const [tipoCuidado, setTipoCuidado] = useState('Vacina');
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');

  async function salvarAnimal() {
    // Validação do campo principal
    if (!nome.trim()) {
      Alert.alert(
        'Campo obrigatório',
        'Informe o nome do animal.'
      );
      return;
    }

    try {
      // Busca os animais já cadastrados
      const dados = await AsyncStorage.getItem(STORAGE_KEY);

      const animais = dados
        ? JSON.parse(dados)
        : [];

      // Cria o novo animal
      const novoAnimal = {
        id: Date.now().toString(),
        nome: nome.trim(),
        especie,
        raca: raca.trim(),

        cuidados: [
          {
            id: Date.now().toString(),
            tipo: tipoCuidado,
            descricao: descricao.trim(),
            data: data.trim(),
            concluido: false,
          },
        ],
      };

      // Adiciona o novo animal à lista
      const novaLista = [
        ...animais,
        novoAnimal,
      ];

      // Salva no AsyncStorage
      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(novaLista)
      );

      Alert.alert(
        'Animal cadastrado',
        'O animal foi salvo com sucesso!',
        [
          {
            text: 'OK',
            onPress: () => navigation.goBack(),
          },
        ]
      );
    } catch (error) {
      console.log(
        'Erro ao salvar animal:',
        error
      );

      Alert.alert(
        'Erro',
        'Não foi possível salvar o animal.'
      );
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        {/* CABEÇALHO */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons
              name="chevron-back"
              size={22}
              color="#FF6548"
            />
          </TouchableOpacity>

          <View>
            <Text style={styles.title}>
              Novo animal
            </Text>

            <Text style={styles.subtitle}>
              Preencha os dados do pet
            </Text>
          </View>
        </View>

        {/* NOME */}
        <Text style={styles.label}>
          Nome
        </Text>

        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Ex: Thor"
          placeholderTextColor="#A5A5A5"
        />

        {/* ESPÉCIE */}
        <Text style={styles.label}>
          Espécie
        </Text>

        <View style={styles.optionsContainer}>
          {['Cachorro', 'Gato', 'Outro'].map(
            (item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.option,
                  especie === item &&
                    styles.optionSelected,
                ]}
                onPress={() =>
                  setEspecie(item)
                }
              >
                <Text
                  style={[
                    styles.optionText,
                    especie === item &&
                      styles.optionTextSelected,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )
          )}
        </View>

        {/* RAÇA */}
        <Text style={styles.label}>
          Raça
        </Text>

        <TextInput
          style={styles.input}
          value={raca}
          onChangeText={setRaca}
          placeholder="Ex: Golden Retriever"
          placeholderTextColor="#A5A5A5"
        />

        {/* CARD DE CUIDADO */}
        <View style={styles.careContainer}>

          <View style={styles.careHeader}>
            <Ionicons
              name="heart-outline"
              size={15}
              color="#FF6548"
            />

            <Text style={styles.careTitle}>
              Adicionar cuidado
            </Text>

            <Text style={styles.optional}>
              (opcional)
            </Text>
          </View>

          {/* TIPO */}
          <Text style={styles.smallLabel}>
            Tipo
          </Text>

          <View style={styles.optionsContainer}>
            {[
              'Vacina',
              'Consulta',
              'Medicamento',
              'Alimentação',
            ].map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.option,
                  tipoCuidado === item &&
                    styles.optionSelected,
                ]}
                onPress={() =>
                  setTipoCuidado(item)
                }
              >
                <Text
                  style={[
                    styles.optionText,
                    tipoCuidado === item &&
                      styles.optionTextSelected,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* DESCRIÇÃO */}
          <Text style={styles.smallLabel}>
            Descrição
          </Text>

          <TextInput
            style={styles.input}
            value={descricao}
            onChangeText={setDescricao}
            placeholder="Ex: V10 (múltipla)"
            placeholderTextColor="#A5A5A5"
          />

          {/* DATA */}
          <Text style={styles.smallLabel}>
            Data
          </Text>

          <TextInput
            style={styles.input}
            value={data}
            onChangeText={setData}
            placeholder="dd/mm/aaaa"
            placeholderTextColor="#A5A5A5"
            keyboardType="numeric"
            maxLength={10}
          />

        </View>

        {/* BOTÃO SALVAR */}
        <TouchableOpacity
          style={styles.saveButton}
          onPress={salvarAnimal}
        >
          <Text style={styles.saveButtonText}>
            Salvar animal
          </Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  content: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 30,
  },

  // CABEÇALHO
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },

  backButton: {
    marginRight: 3,
    padding: 3,
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#292929',
  },

  subtitle: {
    fontSize: 11,
    color: '#888888',
    marginTop: 3,
  },

  // LABELS
  label: {
    fontSize: 11,
    fontWeight: '600',
    color: '#444444',
    marginBottom: 6,
  },

  smallLabel: {
    fontSize: 10,
    fontWeight: '600',
    color: '#555555',
    marginTop: 8,
    marginBottom: 5,
  },

  // INPUT
  input: {
    height: 42,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 9,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 12,
    fontSize: 11,
    color: '#333333',
    marginBottom: 12,
  },

  // OPÇÕES
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 12,
  },

  option: {
    paddingHorizontal: 11,
    paddingVertical: 5,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    backgroundColor: '#F7F7F7',
  },

  optionSelected: {
    borderColor: '#FF6548',
    backgroundColor: '#FFF1ED',
  },

  optionText: {
    fontSize: 10,
    color: '#666666',
  },

  optionTextSelected: {
    color: '#FF6548',
  },

  // CUIDADO
  careContainer: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 11,
    padding: 10,
    marginTop: 4,
  },

  careHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },

  careTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: '#333333',
    marginLeft: 5,
  },

  optional: {
    fontSize: 9,
    color: '#999999',
    marginLeft: 3,
  },

  // BOTÃO
  saveButton: {
    height: 43,
    borderRadius: 23,
    backgroundColor: '#FF6548',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
  },

  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
});
