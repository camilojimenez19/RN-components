import React, { useRef } from 'react';
import { Animated, Easing } from 'react-native';

export const useAnimation = () => {

    const opacity  = useRef(new Animated.Value(0)).current;
    const position = useRef(new Animated.Value(0)).current;

    /** Configuracion por defecto del Animated */
    const configInt = {
        duration: 300,
        useNativeDriver: true
    }

    /** Funcion para realizar el FadeIn */
    const fadeIn = ( duration: number = 300 ) => {
        Animated.timing(
            opacity,
            { toValue: 1, duration, useNativeDriver: true }
        ).start();

        
    };

    /** Funcion para realizar el FadeOut */
    const fadeOut = () => {
        Animated.timing(
            opacity,
            { toValue: 0, ...configInt }
        ).start();

        Animated.timing(
            position,
            {
                ...configInt,
                toValue: -100,
            }
        ).start();
    };

    const startMovingPosition = ( initPosition: number = -100, duration: number = 300 ) => {
        
        position.setValue(initPosition);

        Animated.timing(
            position,
            {
                toValue: 0,
                duration,
                useNativeDriver: true,
                // easing: Easing.bounce
            }
        ).start();
    };

    return {
        opacity,
        position,
        fadeIn,
        fadeOut,
        startMovingPosition
    }
}
