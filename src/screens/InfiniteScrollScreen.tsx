import React from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/StackNavigator';
import { styles } from '../theme/appTheme';
import { useState } from 'react';
import { FadeInImage } from '../components/FadeInImage';

interface Props extends StackScreenProps<RootStackParams, 'InfiniteScrollScreen'>{}

export const InfiniteScrollScreen = ({ route }: Props) => {

    const { name } = route.params

    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5])

    const loadMore = () => {
        const newArray: number[] = [];
        for (let i = 0; i < 5; i++) {
            newArray[i] = numbers.length + i;          
        }
        
        setTimeout(() => {
            setNumbers([...numbers, ...newArray])
        }, 1500);
    };

    const renderItem = ( item: number ) => {
        return (
            <FadeInImage 
                uri={`https://picsum.photos/id/${item}/500/400`} 
                style={{
                    width: '100%',
                    height: 400,
                }}
            />
        );        
    };

    return (
        <View>
            <FlatList 
                data={numbers}
                keyExtractor={ (item) => item.toString() }
                renderItem={({ item }) => renderItem(item) }
                ListHeaderComponent={() => (
                    <View style={ styles.globalMargin }>
                        <HeaderTitle title={name} />
                    </View>
                )}
                showsVerticalScrollIndicator={ false }
                onEndReached={ loadMore }
                onEndReachedThreshold={0.5}
                ListFooterComponent={ () => (
                    <View style={{
                        height: 150,
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <ActivityIndicator size={20} color="#5856D6" />
                    </View>
                )}
            />
        </View>
    );
}

const stylesScreen = StyleSheet.create({
    textItem: {
        backgroundColor: 'green',
        height: 150
    }
});
