import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useEstudiantes } from '../context/EstudiantesContext';

export default function AgregarEstudiante({ navigation }: any) {

  const [nombre, setNombre] = useState('');
  const { agregarEstudiante } = useEstudiantes();

  const guardar = () => {

    if (nombre.trim() === '') {
      Alert.alert('Error', 'Ingrese el nombre del estudiante');
      return;
    }

    agregarEstudiante(nombre.trim());

    setNombre('');

    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>

      <Text style={{ fontSize: 22, marginBottom: 20 }}>
        Agregar Estudiante
      </Text>

      <Text>Nombre del estudiante:</Text>

      <TextInput
        placeholder="Ingrese el nombre"
        value={nombre}
        onChangeText={setNombre}
        style={{
          borderWidth: 1,
          padding: 10,
          marginVertical: 15
        }}
      />

      <Button
        title="Guardar Estudiante"
        onPress={guardar}
      />

    </View>
  );
}