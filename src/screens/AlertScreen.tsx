import React from 'react';
import { Alert, Button, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const AlertScreen = () => {

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
            <HeaderTitle title='Alert' />

            <Button title='Mostrar Alerta' onPress={showAlert} />
            <Button title='Mostrar Prompt' onPress={showPrompt} />
        </View>
    );
}
