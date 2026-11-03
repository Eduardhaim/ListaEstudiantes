import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { useEstudiantes } from '../context/EstudiantesContext';

export default function ListaEstudiantes({ navigation }: any) {

  const { estudiantes } = useEstudiantes();

  return (
   <View style={{ flex: 1, padding: 20, paddingBottom: 60 }}>

      <Text style={{ fontSize: 22, marginBottom: 15 }}>
        Lista de Estudiantes
      </Text>

      <FlatList
        data={estudiantes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={{ padding: 10, fontSize: 16 }}>
            {item.id} - {item.name}
          </Text>
        )}
      />

        <Button
    title="Agregar Estudiante"
    onPress={() => navigation.navigate('AgregarEstudiante')}
  />
</View>
  );
}