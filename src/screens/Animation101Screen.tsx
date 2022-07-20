import React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {

    const {opacity, position, fadeIn, fadeOut, startMovingPosition} = useAnimation();

    return (
        <View style={styles.container}>
            <Animated.View style={{ 
                ...styles.purpleBox,
                opacity,
                transform: [{
                    translateY: position
                }],
                marginBottom: 20
            }}/>

            <View style={ styles.buttonContainer }>
                <TouchableOpacity 
                    style={ styles.button } 
                    onPress={() => {
                        fadeIn()
                        startMovingPosition(100)
                    }}
                >
                        <Text style={ styles.buttonText }>FadeIn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ styles.button } onPress={fadeOut}><Text style={ styles.buttonText }>FadeOut</Text></TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        width: 150,
        height: 150
    },
    buttonContainer:{
        flexDirection: 'row'
    },
    button:{
        marginHorizontal: 10,
        backgroundColor: '#00b4d8',
        padding: 10,
        borderRadius: 5
    },
    buttonText:{
        fontSize: 16,
        color: 'white'
    }
});
