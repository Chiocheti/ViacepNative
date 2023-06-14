import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import Result from './components/result';
import { useState } from 'react';

export default function App() {

  const [address, setAddress] = useState();

  const [cep, setCEP] = useState()

  const [errorMessage, setErrorMessage] = useState(null);

  async function search() {

    if (cep === undefined || cep === null) {
      setErrorMessage('Digite um Cep valido');
      return null;
    }

    const response = await fetch(`https://viacep.com.br/ws/${cep}/json`);

    const { logradouro, localidade, uf, bairro } = await response.json();

    setAddress({
      logradouro,
      localidade,
      uf,
      bairro
    });
  }

  return (
    <View style={styles.container}>

      <Text> ViaCep API </Text>

      <Text>Digite um Cep: </Text>
      <TextInput
        placeholder="Digite um Cep: "
        keyboardType="numeric"
        onChange={(event) => { setCEP(event.target.value) }}
      />
      <Text>{errorMessage}</Text>
      
      <Button title="BUSCAR CEP" onPress={search} />

      <Result address={address} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
