import { Theme } from "@react-navigation/native";

/* Definimos las acciones que permite el reducer */
type ThemeAction =
    | { type: 'set_light_theme'}
    | { type: 'set_dark_theme'}


/* Definimos que estado tiene la aplicacion */
export interface ThemeState extends Theme{
    currentTheme: 'light' | 'dark',
    dividerColor: string;
}

/* Definimos los parametros para el light theme */
export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    dividerColor: 'rgba(0,0,0,0.7)',
    colors: {
        primary: '#084F6A',
        background: 'white',
        card: 'green',
        text: 'black',
        border: 'orange',
        notification: 'real'
    }
}

/* Definimos los parametros para el dark theme */
export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dark: true,
    dividerColor: 'rgba(0,0,0,0.7)',
    colors: {
        primary: '#75CEDB',
        background: 'black',
        card: 'green',
        text: 'white',
        border: 'orange',
        notification: 'real'
    }
}


export const themeReducer = (state: ThemeState, action: ThemeAction) => {

    switch (action.type) {
        case 'set_light_theme':
            return { ...lightTheme }
        case 'set_dark_theme':
            return { ...darkTheme }
            
        default:
            return state;
    }
    
};