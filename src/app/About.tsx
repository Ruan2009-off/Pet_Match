import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  return (
     <View>

    <View style = {styles.container}> 

    <View style = {styles.bola_perfil}> 
    <Text style = {styles.text}>T</Text>
    </View>

    <View><Text style = {styles.text_nome}> Thor </Text>
    <Text> Cachorro . Golden Retrivier </Text>
    </View>
    </View>

    <View style = {styles.historico_de_cuidados_titulo}> 
    <Text style = {styles.text_nome}>Histórico de cuidados </Text>
    <View>
    <Text style = {styles.text_itens}>0 itens</Text> </View>
    </View>    

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 210,
    marginTop: 100,
    alignSelf: 'center',
    borderWidth:0.5,
    borderRadius: 25,
    alignItems: 'center',
  },
  bola_perfil: {
    width:88,
    height: 88,
    borderRadius:100,
    marginTop: 25,
    backgroundColor:'#E28B5C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 26,
    alignItems:'center',
  },
  text_nome:{
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 26,
  },
 historico_de_cuidados_titulo:{
   flexDirection: 'row',
 },
 text_itens:{
   color:'#D97706',
   backgroundColor: '#FEF3C7',
 },
});