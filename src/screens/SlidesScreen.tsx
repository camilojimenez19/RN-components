import React from 'react';
import { Image, Text, useWindowDimensions, View, StyleSheet, ScrollView, Animated } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Carousel from 'react-native-reanimated-carousel';

import { RootStackParams } from '../navigation/StackNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { items, Slide } from '../data/dataSlider';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAnimation } from '../hooks/useAnimation';
import { useNavigation } from '@react-navigation/native';

interface Props extends StackScreenProps<RootStackParams, 'SlidesScreen'> { }

export const SlidesScreen = ({ route }: Props) => {

    const { width, height } = useWindowDimensions()
    const { opacity, fadeIn } = useAnimation()
    const navigation = useNavigation()

    const renderItem = (item: Slide) => {
        return (
            <View style={styles.containerSlider} >
                <Image source={item.img} style={styles.image} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.desc}</Text>
            </View>

        )
    };

    return (
        <SafeAreaView
            style={{
                flex: 1,
            }}
        >
            <Carousel
                data={items}
                renderItem={({ item }) => renderItem(item)}
                width={width}
                height={height * 0.9}
                loop={false}
                onSnapToItem={(index) => {
                    if(index === (items.length - 1)) 
                        fadeIn()
                }}
            />

            <Animated.View style={{
                alignContent: 'center',
                alignItems: 'center',
                marginTop: 10,
                opacity
            }}>
                <TouchableOpacity 
                    style={styles.backButton}
                    onPress={() => navigation.navigate('HomeScreen' as any)}
                >
                    <Text style={ styles.buttonText }>ENTRAR</Text>
                    <Icon
                        name='chevron-forward-outline'
                        size={20}
                        color="white"
                    />
                </TouchableOpacity>

            </Animated.View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    containerSlider: {
        flex: 1,
        backgroundColor: 'white',
        padding: 40,
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        height: 400,
        resizeMode: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#5856D6'
    },
    subtitle: {
        fontSize: 16,
    },
    backButton: {
        backgroundColor: '#5856D6',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 5,
        width: 150
    },
    buttonText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
});
