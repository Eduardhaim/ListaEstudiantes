import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { EstudiantesProvider } from './context/EstudiantesContext';
import ListaEstudiantes from './screens/ListaEstudiantes';
import AgregarEstudiante from './screens/AgregarEstudiante';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <EstudiantesProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ListaEstudiantes">

          <Stack.Screen
            name="ListaEstudiantes"
            component={ListaEstudiantes}
            options={{ title: 'Estudiantes' }}
          />

          <Stack.Screen
            name="AgregarEstudiante"
            component={AgregarEstudiante}
            options={{ title: 'Nuevo Estudiante' }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </EstudiantesProvider>
  );
}