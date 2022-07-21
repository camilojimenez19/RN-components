import { StackScreenProps } from '@react-navigation/stack';
import React, { useRef } from 'react';
import { Animated, PanResponder, StyleSheet, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { RootStackParams } from '../navigation/StackNavigator';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<RootStackParams, 'Animation102Screen'> { }

export const Animation102Screen = ({ route }: Props) => {

    const { name } = route.params

    const pan = useRef(new Animated.ValueXY()).current

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event(
            [
                null,
                { dx: pan.x, dy: pan.y, },
            ],
            { useNativeDriver: false }
        ),
        onPanResponderRelease: () => {
            Animated.spring(
                pan, // Auto-multiplexed
                {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: false
                } // Back to zero
            ).start();
        },
    });

    return (
        <View style={{ ...styles.globalMargin, flex: 1}}>
            <HeaderTitle title={name} />
            <View style={stylesScreen.container}>

                <Animated.View
                    {...panResponder.panHandlers}
                    style={[pan.getLayout(), stylesScreen.purpleBox]}
                />
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
        backgroundColor: '#75CEDB',
        width: 150,
        height: 150,
        borderRadius: 4,
    }
});
