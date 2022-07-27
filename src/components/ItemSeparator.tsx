import React, { useContext } from 'react';
import { View } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const ItemSeparator = () => {

    /* Obtenemos el contexto de la app */
    const {theme:{ dividerColor }} = useContext(ThemeContext)
    return (
        <View
            style={{
                backgroundColor: dividerColor,
                borderBottomWidth: 1,
                opacity: 0.4,
                marginVertical: 8
            }}
        />
    );
}
