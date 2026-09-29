import { useCallback, useState } from 'react';
import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useFocusEffect } from 'expo-router';
import { carregarAnimais, animaisExemplo, type Animal } from '@/data/animais';

export default function Index() {
  const emBreve = () => Alert.alert('Em breve');
  const [animais, setAnimais] = useState<Animal[]>(animaisExemplo);

  // Recarrega a lista sempre que a tela volta ao foco (ex.: depois de cadastrar)
  useFocusEffect(
    useCallback(() => {
      carregarAnimais().then(setAnimais);
    }, [])
  );

  return (
    <SafeAreaView style={styles.tela}>
      <ScrollView contentContainerStyle={styles.conteudo}>
        {/* Barra superior */}
        <View style={styles.nav}>
          <Image source={require('../../assets/images/Patinhas.png')} style={styles.logo} />
          <Text style={styles.text}>Pet Match</Text>

          <View style={styles.acoes}>
            <Pressable onPress={emBreve}>
              <Image source={require('../../assets/images/notificacao.png')} style={styles.icone} />
            </Pressable>
            <Pressable onPress={emBreve}>
              <Image source={require('../../assets/images/perfil.png')} style={styles.icone} />
            </Pressable>
          </View>
        </View>

        {/* Saudação */}
        <View style={styles.saudacao}>
          <Text> Olá Victor! 👋 </Text>
          <Text style={styles.text}>Como estão seus {'\n'}companheiros hoje?</Text>
        </View>

        {/* Banner (asset próprio) */}
        <Pressable onPress={emBreve}>
          <Image
            source={require('../../assets/images/Match.png')}
            style={styles.anuncio}
            resizeMode="contain"
          />
        </Pressable>

        {/* Lista de animais */}
        <View style={styles.tituloAnimais}>
          <Text style={styles.text}>Meus animais</Text>
          <Text style={styles.textColor}>{animais.length}</Text>
          <Pressable onPress={() => router.push('/Cadastro')} style={styles.adicionarBotao}>
            <Text style={styles.adicionar}>+ Adicionar</Text>
          </Pressable>
        </View>

        {animais.map((animal) => (
          <Pressable
            key={animal.id}
            style={styles.animais}
            onPress={() => router.push({ pathname: '/About', params: { id: animal.id } })}
          >
            <View style={styles.letraAnimais}>
              <Text style={styles.letra}>{animal.nome[0]}</Text>
            </View>

            <View style={styles.informacoes}>
              <Text style={styles.text}>{animal.nome}</Text>
              <Text>
                {animal.especie}{animal.raca ? ` · ${animal.raca}` : ''}
              </Text>
            </View>

            <View style={styles.atributosContainer}>
              <Text style={styles.atributos}>
                {animal.aviso ?? (animal.cuidados.length ? `${animal.cuidados.length} cuidado(s)` : 'Sem cuidados')}
              </Text>
            </View>

            <Text style={styles.seta}>›</Text>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: '#ffffff' },
  conteudo: { paddingHorizontal: 16, paddingBottom: 32 },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 16,
  },
  logo: { height: 25, width: 25, marginLeft: 2, borderRadius: 5 },
  acoes: { flexDirection: 'row', marginLeft: 'auto', gap: 10 },
  icone: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    borderWidth: 1.5,
  },
  saudacao: { marginTop: 24 },
  anuncio: { width: '100%', height: 200, marginTop: 24 },
  text: { color: '#070707', fontWeight: 'bold', fontSize: 20, marginLeft: 5 },
  textColor: { color: '#F37A5B', fontWeight: 'bold', fontSize: 20, marginLeft: 6 },
  tituloAnimais: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 12,
  },
  adicionarBotao: { marginLeft: 'auto' },
  adicionar: { color: '#F37A5B', fontWeight: 'bold', fontSize: 20 },
  animais: {
    height: 100,
    width: '100%',
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#333333',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginBottom: 12,
  },
  letraAnimais: {
    width: 60,
    height: 60,
    marginLeft: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E28B5C',
    borderRadius: 30,
  },
  letra: { color: '#ffffff', fontSize: 30, fontWeight: 'bold' },
  informacoes: { flex: 1, marginLeft: 10, justifyContent: 'center' },
  atributosContainer: { justifyContent: 'center', marginLeft: 5 },
  atributos: {
    color: '#F37A5B',
    fontWeight: 'bold',
    backgroundColor: '#FDF0EC',
    paddingHorizontal: 7,
    paddingVertical: 5,
    borderRadius: 8,
    fontSize: 10,
    overflow: 'hidden',
  },
  seta: { color: '#A9A29D', fontSize: 38, marginLeft: 10, marginRight: 6 },
});
