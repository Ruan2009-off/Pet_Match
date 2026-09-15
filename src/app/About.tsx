import { StyleSheet, Text, View } from 'react-native';

export default function About() {

  const cuidados = [
    { id: 1, tipo: 'VACINA', descricao: 'V10 (múltipla)', data: '10/03/2026' },
    { id: 2, tipo: 'CONSULTA', descricao: 'Check-up de rotina', data: '22/05/2026' },
    { id: 3, tipo: 'ALIMENTAÇÃO', descricao: 'Ração premium adulto, 2x ao dia', data: '01/08/2026' },
  ];

  return (

    <View>

    <View style = {styles.container}>

    <View style = {styles.bola_perfil}>
    <Text style = {styles.text}>T</Text>
    </View>

    <View>
    <Text style = {styles.text_nome}> Thor </Text>
    <Text> Cachorro . Golden Retriever </Text>
    </View>

    </View>

    <View style = {styles.historico_de_cuidados_titulo}>
    <Text style = {styles.text_nome}>Histórico de cuidados </Text>
    <Text style = {styles.text_itens}>{cuidados.length} itens</Text>
    </View>

    <View style = {styles.lista_cuidados}>

    {cuidados.map((item) => (
      <View key = {item.id} style = {styles.cuidado_item}>
      <Text style = {styles.cuidado_tipo}>{item.tipo}</Text>
      <Text style = {styles.cuidado_descricao}>{item.descricao}</Text>
      <Text style = {styles.cuidado_data}>{item.data}</Text>
      </View>
    ))}

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
   width: 350,
   alignSelf: 'center',
   marginTop: 20,
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
 },
 text_itens:{
   color:'#D97706',
   backgroundColor: '#FEF3C7',
   paddingHorizontal: 8,
   paddingVertical: 3,
   borderRadius: 12,
   fontSize: 12,
   fontWeight: 'bold',
 },
 lista_cuidados: {
   width: 350,
   alignSelf: 'center',
   marginTop: 12,
   borderWidth: 0.5,
   borderRadius: 25,
   paddingHorizontal: 16,
 },
 cuidado_item: {
   paddingVertical: 14,
   borderBottomWidth: 0.5,
   borderBottomColor: '#E5E7EB',
 },
 cuidado_tipo: {
   fontWeight: 'bold',
   fontSize: 12,
   color: '#6B7280',
   marginBottom: 2,
 },
 cuidado_descricao: {
   fontSize: 15,
 },
 cuidado_data: {
   fontSize: 12,
   color: '#9CA3AF',
   marginTop: 2,
 },
});
