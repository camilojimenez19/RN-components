import React, { useReducer } from "react";
import { createContext } from "react";
import { lightTheme, themeReducer, ThemeState } from './ThemeReducer';

/* Definimos como esta conformado el context */
interface ThemeContextProps {
    theme: ThemeState; //TODO:
    setDarkTheme: () => void;
    setLightTheme: () => void;
}

/* Creamos el context */
export const ThemeContext = createContext({} as ThemeContextProps);

/* Provider */
export const ThemeProvider = ({ children }: any) => {

    /* Datos por defecto del tema */
    const [theme, dispatch] = useReducer(themeReducer, lightTheme)

    /* Funcion para cambiar al tema dark */
    const setDarkTheme = () => {
        dispatch({ type: 'set_dark_theme' })
    };
    
    /* Funcion para cambiar al tema light */
    const setLightTheme = () => {
        dispatch({ type: 'set_light_theme' })
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