import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { carregarAnimais, animaisExemplo, formatarData, type Animal } from '@/data/animais';

export default function About() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const [animal, setAnimal] = useState<Animal>(
    animaisExemplo.find((a) => a.id === id) ?? animaisExemplo[0]
  );

  useEffect(() => {
    carregarAnimais().then((lista) => {
      const achado = lista.find((a) => a.id === id);
      if (achado) setAnimal(achado);
    });
  }, [id]);

  return (
    <ScrollView style={styles.tela} contentContainerStyle={styles.conteudo}>
      <View style={styles.container}>
        <View style={styles.bolaPerfil}>
          <Text style={styles.text}>{animal.nome[0]}</Text>
        </View>

        <Text style={styles.textNome}>{animal.nome}</Text>
        <Text>
          {animal.especie}{animal.raca ? ` · ${animal.raca}` : ''}
        </Text>
      </View>

      <View style={styles.historicoTitulo}>
        <Text style={styles.textNome}>Histórico de cuidados</Text>
        <Text style={styles.textItens}>{animal.cuidados.length} itens</Text>
      </View>

      <View style={styles.listaCuidados}>
        {animal.cuidados.map((item, i) => (
          <View
            key={item.id}
            style={[styles.cuidadoItem, i === animal.cuidados.length - 1 && styles.semBorda]}
          >
            <Text style={styles.cuidadoTipo}>{item.tipo.toUpperCase()}</Text>
            <Text style={styles.cuidadoDescricao}>{item.descricao}</Text>
            {item.data ? <Text style={styles.cuidadoData}>{formatarData(item.data)}</Text> : null}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: '#ffffff' },
  conteudo: { padding: 16, paddingBottom: 32 },
  container: {
    width: '100%',
    paddingVertical: 24,
    borderWidth: 0.5,
    borderRadius: 25,
    alignItems: 'center',
  },
  bolaPerfil: {
    width: 88,
    height: 88,
    borderRadius: 44,
    marginBottom: 12,
    backgroundColor: '#E28B5C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { color: '#ffffff', fontWeight: 'bold', fontSize: 26 },
  textNome: { fontWeight: 'bold', fontSize: 26 },
  historicoTitulo: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItens: {
    color: '#D97706',
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
    fontSize: 12,
    fontWeight: 'bold',
    overflow: 'hidden',
  },
  listaCuidados: {
    marginTop: 12,
    borderWidth: 0.5,
    borderRadius: 25,
    paddingHorizontal: 16,
  },
  cuidadoItem: {
    paddingVertical: 14,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E5E7EB',
  },
  semBorda: { borderBottomWidth: 0 },
  cuidadoTipo: { fontWeight: 'bold', fontSize: 12, color: '#6B7280', marginBottom: 2 },
  cuidadoDescricao: { fontSize: 15 },
  cuidadoData: { fontSize: 12, color: '#9CA3AF', marginTop: 2 },
});
