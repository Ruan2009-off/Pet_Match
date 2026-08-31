// components/ImageViewer.tsx
import { StyleSheet } from 'react-native';
import { Image, type ImageSource } from 'expo-image'; // importação poderosa do Expo!

// As PROPS (Propriedades) são as informações que este componente
// exige de quem o usar (o "Pai").
type Props = {
  imgSource: ImageSource; // quem usar deve obrigatoriamente dar uma imagem
};

export default function ImageViewer({ imgSource }: Props) {
  return <Image source={imgSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: { width: 320, height: 440, borderRadius: 18 },
});