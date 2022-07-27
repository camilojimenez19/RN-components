import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { Alert, Button, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { RootStackParams } from '../navigation/StackNavigator';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<RootStackParams, 'AlertScreen'>{}

export const AlertScreen = ({ route }: Props) => {

    /* Obtenemos el nombre de la pantalla por parametros */
    const { name } = route.params

    /* Obtnemos el contexto del tema */
    const {theme: {colors}} = useContext(ThemeContext)

    /* Funcion para mostrar la alerta */
    const showAlert = () => {
        Alert.alert(
            "Titulo",
            "Este es el cuerpo de la alerta",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { 
                cancelable: true,
                onDismiss: () => console.log("Cancel Pressed")
            }
        );
    };

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title={name} />

            <Button title='Mostrar Alerta' onPress={showAlert} color={ colors.primary }/>
        </View>
    );
}
