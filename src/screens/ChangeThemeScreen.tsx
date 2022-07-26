import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/StackNavigator';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props extends StackScreenProps<RootStackParams, 'ChangeThemeScreen'> { }

export const ChangeThemeScreen = ({ route }: Props) => {

    const { name } = route.params
    const { setDarkTheme, setLightTheme, theme: {colors} } = useContext(ThemeContext)

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title={name} />

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                        width: 150,
                        height: 50,
                        borderRadius: 20,
                        backgroundColor: colors.primary,
                        justifyContent: 'center'
                    }}
                    onPress={ setLightTheme }
                >
                    <Text style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 22
                    }}>
                        Light
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                        width: 150,
                        height: 50,
                        borderRadius: 20,
                        backgroundColor: colors.primary,
                        justifyContent: 'center'
                    }}
                    onPress={ setDarkTheme }
                >
                    <Text style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 22
                    }}>
                        Dark
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
