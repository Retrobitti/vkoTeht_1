import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [age, setAge] = useState("");
  const [hrMax, setMax] = useState(0);
  const [hrMin, setMin] = useState(0);

  function calculate(){
    const max = (220 - age) * 0.85;
    const min = (220 - age) * 0.65;
    setMax(max);
    setMin(min);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput style={styles.field} value={age} onChangeText={text=>setAge(text)} keyboardType='decimal-pad'></TextInput>
      <Text style={styles.field}>heart rate limits</Text>
      <Text style={styles.field}>{hrMin.toFixed(0) + "-" + hrMax.toFixed(0)}</Text>
      <Button style={styles.button} onPress={calculate} title='Calculate heart rate limits'></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    marginLeft:20,
  },
  field: {
    marginBottom:10,
    fontSize:20,
  },
  button:{
    color:"#F9EFDB",
  }
});
