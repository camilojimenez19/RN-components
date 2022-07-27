import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';
import { RootStackParams } from '../navigation/StackNavigator';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<RootStackParams, 'Animation101Screen'> { }

export const Animation101Screen = ({ route }: Props) => {

    /* Obtenemos el nombre del scren por props */
    const { name } = route.params

    /* Llamamos el custom hook de animacion */
    const { opacity, position, fadeIn, fadeOut, startMovingPosition } = useAnimation();

    const {theme: { colors } } = useContext(ThemeContext)
    return (
        <View style={{flex: 1, ...styles.globalMargin}}>
            <HeaderTitle title={name} />
            <View style={stylesScreen.container}>

                <Animated.View style={{
                    ...stylesScreen.purpleBox,
                    backgroundColor: colors.primary,
                    opacity,
                    transform: [{
                        translateY: position
                    }],
                    marginBottom: 20
                }} />

                <View style={stylesScreen.buttonContainer}>
                    <TouchableOpacity
                        style={{...stylesScreen.button, backgroundColor: colors.primary }}
                        onPress={() => {
                            fadeIn()
                            startMovingPosition(100)
                        }}
                    >
                        <Text style={stylesScreen.buttonText}>FadeOut</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...stylesScreen.button, backgroundColor: colors.primary}} onPress={fadeOut}><Text style={stylesScreen.buttonText}>FadeOut</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const stylesScreen = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox: {
        width: 150,
        height: 150
    },
    buttonContainer: {
        flexDirection: 'row'
    },
    button: {
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 16,
        color: 'white'
    }
});
