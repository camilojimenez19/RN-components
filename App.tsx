import 'react-native-gesture-handler';
import React from 'react';
import { StackNavigator } from './src/navigation/StackNavigator';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';


/* Asignamos el estado de la app al provider */
const AppState = ({ children }: any) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
};

/* Renderizamos la App */
const App = () => {
  return (
    <AppState>
      <StackNavigator />
    </AppState>
  );
}


export default App;
