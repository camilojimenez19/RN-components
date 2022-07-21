import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Alert, Button, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { RootStackParams } from '../navigation/StackNavigator';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<RootStackParams, 'AlertScreen'>{}

export const AlertScreen = ({ route }: Props) => {

    const { name } = route.params
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

    const showPrompt = () => {
        
        Alert.prompt(
            'Title',
            'Este es una mensage por defecto'
        )
    };

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title={name} />

            <Button title='Mostrar Alerta' onPress={showAlert} />
            <Button title='Mostrar Prompt' onPress={showPrompt} />
        </View>
    );
}
