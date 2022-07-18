import React from 'react';
import { Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export const HomeScreen = () => {

    
    return (
        <View>
            <Text>Home Screen</Text>
            <Icon
                name="arrow-back-outline"
                size={150}
            />
        </View>
    );
}
