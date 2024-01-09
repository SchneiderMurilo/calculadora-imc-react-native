import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/Title/Title';
import Form from './src/components/Form/Form';

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303036',
    paddingTop: 80,
  },
});
