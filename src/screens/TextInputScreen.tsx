import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { useForm } from '../hooks/useForm';
import { RootStackParams } from '../navigation/StackNavigator';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<RootStackParams, 'TextInputScreen'> { }

export const TextInputScreen = ({ route }: Props) => {

    const { name } = route.params

    const { form, onChange, isSuscribe } = useForm({
        name: '',
        email: '',
        phone: '',
        isSuscribe: false
    })

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView>
                <View style={styles.globalMargin}>
                    <HeaderTitle title={name} />

                    <TextInput
                        style={stylesScreen.inputStyle}
                        placeholder="Ingrese su nombre"
                        autoCorrect={false}
                        autoCapitalize="words"
                        onChangeText={(value) => onChange(value, 'name')}
                    />
                    <TextInput
                        style={stylesScreen.inputStyle}
                        placeholder="Ingrese su email"
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={(value) => onChange(value, 'email')}
                        keyboardType='email-address'
                    />
                    <TextInput
                        style={stylesScreen.inputStyle}
                        placeholder="Ingrese su telefono"
                        autoCorrect={false}
                        onChangeText={(value) => onChange(value, 'phone')}
                        keyboardType='phone-pad'
                    />

                    <View style={stylesScreen.switchRow}>
                        <Text style={stylesScreen.switchText}>Suscribirse </Text>
                        <CustomSwitch
                            isOn={isSuscribe}
                            onChange={(value) => onChange(value, 'isSuscribe')}
                        />
                    </View>

                </View>

                <HeaderTitle title={JSON.stringify(form, null, 3)} />
                <View style={{ height: 100 }} />
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5        
    },
    switchText: {
        fontSize: 25
    }
});