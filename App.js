import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

import Result from './components/result';
import { useState } from 'react';

export default function App() {

  const [address, setAddress] = useState('');

  const [value, setValue] = useState('')

  const [errorMessage, setErrorMessage] = useState(null);
  async function search() {
    if (value === undefined || value === null || value === '' || value.length !== 8) {
      setErrorMessage('Digite um Cep valido');
      return null;
    }

    const response = await fetch(`https://viacep.com.br/ws/${value}/json`);

    const { cep, logradouro, localidade, uf, bairro } = await response.json();

    if (!cep) {
      setErrorMessage('Cep não encontrado');
      setAddress();
      return null;
    }
    setErrorMessage('');

    setAddress({
      cep,
      logradouro,
      localidade,
      uf,
      bairro
    });
  }

  return (
    <View style={styles.all}>
      <View style={styles.body}>

        <Text style={styles.title}> ViaCep API </Text>
        <Text style={styles.message}>Digite um Cep </Text>
        <TextInput
          placeholder="Cep: "
          keyboardType="numeric"
          value={value}
          onChangeText={setValue}
          style={styles.input}
        />
        <Text style={styles.error}>{errorMessage}</Text>

        <TouchableOpacity style={styles.button} onPress={search}>
          <Text style={styles.textButton}>BUSCAR CEP</Text>
        </TouchableOpacity>

      </View>

      <Result address={address} />
    </View>
  )
};

const styles = StyleSheet.create({
  all: {
    flex: 1,
    paddingTop: 80,
    backgroundColor: '#525558',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    color: '#ffa43a',
  },
  message: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    marginTop: 25
  },
  body: {
    marginTop: 30,
    alignItems: 'center',
  },
  input: {
    marginTop: 25,
    backgroundColor: '#ffbf75',
    padding: 10,
    width: 120,
    fontSize: 20,
    borderRadius: 10,
    width: '50%',
    textAlign: 'center',
    color: '#525558'
  },
  button: {
    marginTop: 10,
    backgroundColor: '#75c7ff',
    padding: 10,
    width: 180,
    borderRadius: 10,
  },
  textButton: {
    textAlign: 'center',
    color: '#1b1c1d',
    fontWeight: 'bold',
    fontSize: 20
  },
  error: {
    margin: 5,
    color: '#f50400'
  }
});
