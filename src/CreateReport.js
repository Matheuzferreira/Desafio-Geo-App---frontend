import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import api from './services/api'; // ⬅️ Caminho do API

const CreateReportScreen = ({ navigation }) => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = async () => {
    if (!titulo || !descricao) {
      Alert.alert('Atenção', 'Preencha Título e Descrição.');
      return;
    }
    
    try {
      const reportData = {
        titulo,
        descricao,
        local: 'Local Capturado', 
        foto: 'URL_TEMPORARIA',
        dataHora: new Date(),
        laboratorio: 'Lab Geo'
      };

      await api.post('/reports', reportData);

      Alert.alert('Sucesso', 'Relatório enviado ao servidor!');
      setTitulo(''); 
      setDescricao('');
    } catch (error) {
      console.error(error.response?.data || error);
      Alert.alert('Erro', 'Falha ao enviar. Verifique o IP e o Backend.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Novo Relatório</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Título" 
        value={titulo} 
        onChangeText={setTitulo} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Descrição" 
        value={descricao} 
        onChangeText={setDescricao} 
        multiline
      />
      <Button title="Enviar para o Backend" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 },
});

export default CreateReportScreen;