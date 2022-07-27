import { Theme } from "@react-navigation/native";

/* Definimos las acciones que permite el reducer */
type ThemeAction =
    | { type: 'set_light_theme'}
    | { type: 'set_dark_theme'}

interface InputStyle{
    borderColor: string;
    color: string;
}

/* Definimos que estado tiene la aplicacion */
export interface ThemeState extends Theme{
    currentTheme: 'light' | 'dark',
    dividerColor: string;
    inputStyle: InputStyle;
}

/* Definimos los parametros para el light theme */
export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    dividerColor: 'rgba(0,0,0,0.7)',
    colors: {
        primary: '#084F6A',
        background: 'white',
        card: 'white',
        text: 'black',
        border: 'black',
        notification: 'teal'
    },
    inputStyle:{
        borderColor: 'rgba(0,0,0,0.3)',
        color: 'black',
    }
}

/* Definimos los parametros para el dark theme */
export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dark: true,
    dividerColor: 'rgba(255,255,255,0.7)',
    colors: {
        primary: '#75CEDB',
        background: 'black',
        card: 'black',
        text: 'white',
        border: 'white',
        notification: 'teal'
    },
    inputStyle:{
        borderColor: 'rgba(255,255,255,0.3)',
        color: 'white',
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