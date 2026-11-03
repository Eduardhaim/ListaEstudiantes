import React, { createContext, useContext, useState } from 'react';

type Estudiante = {
  id: string;
  name: string;
};

type EstudiantesContextType = {
  estudiantes: Estudiante[];
  agregarEstudiante: (nombre: string) => void;
};

const EstudiantesContext = createContext<EstudiantesContextType | undefined>(undefined);

export function EstudiantesProvider({ children }: { children: React.ReactNode }) {

  const [estudiantes, setEstudiantes] = useState<Estudiante[]>([
    { id: '1', name: 'Juan' },
    { id: '2', name: 'María' },
    { id: '3', name: 'Carlos' },
    { id: '4', name: 'Ana' },
    { id: '5', name: 'Pedro' },
    { id: '6', name: 'Lucía' },
    { id: '7', name: 'José' },
    { id: '8', name: 'Sofía' },
    { id: '9', name: 'Luis' },
    { id: '10', name: 'Daniela' }
  ]);

 const agregarEstudiante = (nombre: string) => {
  const nuevoEstudiante = {
    id: (Math.max(0, ...estudiantes.map(e => Number(e.id))) + 1).toString(),
    name: nombre
  };

  setEstudiantes([...estudiantes, nuevoEstudiante]);
};

  return (
    <EstudiantesContext.Provider value={{ estudiantes, agregarEstudiante }}>
      {children}
    </EstudiantesContext.Provider>
  );
}

export function useEstudiantes() {
  const context = useContext(EstudiantesContext);

  if (!context) {
    throw new Error('Debe utilizarse dentro de EstudiantesProvider');
  }

  return context;
}