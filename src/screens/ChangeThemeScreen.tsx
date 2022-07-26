import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/StackNavigator';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props extends StackScreenProps<RootStackParams, 'ChangeThemeScreen'> { }

export const ChangeThemeScreen = ({ route }: Props) => {

    const { setDarkTheme } = useContext(ThemeContext)

    const { name } = route.params
    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title={name} />

            <TouchableOpacity
                activeOpacity={0.8}
                style={{
                    width: 150,
                    height: 50,
                    borderRadius: 20,
                    backgroundColor: '#5856D6',
                    justifyContent: 'center'
                }}
                onPress={() => setDarkTheme() }
            >
                <Text style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 22
                }}>
                    Light / Dark
                </Text>
            </TouchableOpacity>
        </View>
    );
}
