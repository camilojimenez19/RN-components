import React from "react";
import { createContext } from "react";

/* Definimos como esta conformado el context */
interface ThemeContextProps {
    theme: any; //TODO:
    setDarkTheme: () => void;
    setLightTheme: () => void;
}

/* Creamos el context */
export const ThemeContext = createContext({} as ThemeContextProps);

/* Provider */
export const ThemeProvider = ({ children }: any) => {

    /* Datos por defecto del tema */
    const theme = {};

    /* Funcion para cambiar al tema dark */
    const setDarkTheme = () => {
        console.log('setDarkTheme')
    };
    
    /* Funcion para cambiar al tema light */
    const setLightTheme = () => {
        console.log('setLightTheme')
    };


    return (
        <ThemeContext.Provider
            value={{
                theme,
                setDarkTheme,
                setLightTheme
            }}
        >
            { children }
        </ThemeContext.Provider>
    );
}