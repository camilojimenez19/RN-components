import { useNavigation, useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { MenuItem } from '../interfaces/appInterfaces';


interface Props {
    menuItem: MenuItem;
}

export const FlatListMenuItem = ({ menuItem }: Props) => {

    const { icon, component, name } = menuItem;
    const navigation = useNavigation();

    const { colors } = useTheme()

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={ () => navigation.navigate(component as never, { name } as never)}
        >
            <View style={styles.container}>
                <Icon
                    name={icon}
                    color="#5856D6"
                    size={23}
                />
                <Text style={{...styles.itemText, color: colors.text}}>{name}</Text>

                <View style={{ flex: 1 }}>
                    <Icon
                        name="chevron-forward-outline"
                        color="grey"
                        size={23}
                        style={{ alignSelf: 'flex-end' }}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 10,
        fontSize: 19
    }
});
