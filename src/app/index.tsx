import { Text, View, StyleSheet, Pressable, Alert, Image, Linking } from 'react-native';
import { router } from 'expo-router';

export default function Index() {

  const qtnd_animais = 3;
    const exibirAlerta = () => {
    Alert.alert("Em Breve");
};

    const abrirlink = () =>{
      Linking.openURL('https://png.pngtree.com/thumb_back/fh260/background/20220630/pngtree-ape-shows-finger-zoo-fuck-naughty-photo-image_1110169.jpg');
    };
  return (
    <View>

    
      <View style = {styles.nav}>

      <Image
  source={require('../../../assets/images/Patinhas.png')}
  style={styles.imagem}/>
      
       <Text style={styles.text}>Pet Match</Text>

       <View style = {styles.container}>

       <Pressable 
       onPress={exibirAlerta} >

       <Image 
       source={require('../../../assets/images/notificacao.png')}
       style = {styles.notificacao}
       />
       </Pressable>

       <Pressable onPress = {exibirAlerta}>
       <Image
       source = {require ('../../../assets/images/perfil.png')}
       style = {styles.perfil}/>
       
       </Pressable>

       </View>

       </View>

       <View>

       <Text> Olá Victor! 👋 </Text>
       <Text style = {styles.text}> Como estão seus {"\n"} companheiros hoje? </Text>

       </View>
       
       <Pressable onPress = {abrirlink}>
       <Image
       source = {require('../../../assets/images/Match.png')}
       style = {styles.anuncio}/>
       </Pressable>

       <View style = {styles.to_do_list}>

      <View style = {styles.titulo_animais}>
       <Text style = {styles.text}> Meus animais</Text>
       <Text style = {styles.text_color}> {qtnd_animais}</Text>
       <Text style = {styles.adicionar}> + Adicionar</Text>
       </View>

     <Pressable
       onPress={() => router.push('/About')}
       style = {styles.animais}>

       <View style = {styles.letra_animais}> 
       <Text style = {styles.letra}>M</Text>
       </View>

       <View style = {styles.informacoes}>
       <Text style = {styles.text}> Mimi </Text>
       <Text> Gato . Siâmes </Text>
       </View>

       <View style={styles.atributosContainer}>
  <Text style={styles.atributos}>
    Consulta amanhã
  </Text>
</View>

<Text style={styles.seta}>›</Text>
       </Pressable>

        <View style = {styles.animais}>

       <View style = {styles.letra_animais}> 
       <Text style = {styles.letra}>T</Text>
       </View>

       <View style = {styles.informacoes}>
       <Text style = {styles.text}> Thor </Text>
       <Text> Cachorro . Golden Retriver </Text>
       </View>

       <View style={styles.atributosContainer}>
  <Text style={styles.atributos}>
    Consulta amanhã
  </Text>
</View>

<Text style={styles.seta}>›</Text>
       </View>

       <View style = {styles.animais}>

       <View style = {styles.letra_animais}> 
       <Text style = {styles.letra}>B</Text>
       </View>

       <View style = {styles.informacoes}>
       <Text style = {styles.text}> Bidu </Text>
       <Text> Cachorro . Vira-lata </Text>
       </View>

       <View style={styles.atributosContainer}>
  <Text style={styles.atributos}>
    Consulta amanhã
  </Text>
</View>

<Text style={styles.seta}>›</Text>
       </View>

       </View>
       
  
       </View>

  );
}

// O StyleSheet.create é o "CSS" do React Native!
const styles = StyleSheet.create({

  container:{
    flexDirection:'row',
    marginLeft:'auto',
    gap: 10,

  },
informacoes: {
  flex: 1,
  marginLeft: 10,
  justifyContent: 'center',
},
  imagem: {
    height: 25,
    width: 25,
    marginLeft: 2,
    borderRadius: 5,
  },
  anuncio: {
    width: 400,
    height: 200,
    marginTop: 50,
    alignSelf: 'center',
  },
  notificacao: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    borderWidth: 1.5,
  },
  perfil:{
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    borderWidth: 1.5,
 },
  nav:{
    backgroundColor: '#ffffff',
    width: '100%',
    flexDirection: 'row',
    paddingTop: 60,
  },
  to_do_list:{
    height:450,
    width: 400,
    alignSelf: 'center',
    marginTop:10,
    backgroundColor: '#ffffff',
  },
  text: {
    color: '#070707',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 5,
  },
  text_color:{
    color:'#F37A5B',
    fontWeight: 'bold',
    fontSize: 20,
  },
atributosContainer: {
  justifyContent: 'center',
  marginLeft: 5,
},

atributos: {
  color: '#F37A5B',
  fontWeight: 'bold',
  backgroundColor: '#FDF0EC',
  paddingHorizontal: 7,
  paddingVertical: 5,
  borderRadius: 8,
  fontSize: 10,
},
seta: {
  color: '#A9A29D',
  fontSize: 38,
  marginLeft: 15,
  marginRight: 10,
},
  adicionar:{
    color:'#F37A5B',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 'auto',
  },
  titulo_animais:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
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
},
  letra_animais:{
    width:60,
    height:60,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    backgroundColor: '#E28B5C',
    borderRadius:'100%',
  },
  letra:{
    color: '#ffffff',
    fontSize: 30,
    fontWeight: "bold",
  },
});
