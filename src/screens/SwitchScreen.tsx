import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { RootStackParams } from '../navigation/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'SwitchScreen'> { }

export const SwitchScreen = ({ route }: Props) => {

    const {name} = route.params

    const [state, setState] = useState({
        isActive: false,
        isHungry: false,
        isHappy: true
    });

    const {isActive, isHappy, isHungry} = state;

    const onChange = (value: boolean, field: keyof typeof state ) => {
        setState({
           ...state,
           [field]: value 
        })
    };


    return (
        <View style={{ marginHorizontal: 20 }}>

            <HeaderTitle title={name} />

            <View style={ styles.switchRow }>
                <Text style={ styles.switchText }>Is Active </Text>
                <CustomSwitch 
                    isOn={isActive}
                    onChange={( value ) => onChange(value, 'isActive')} 
                />
            </View>
            
            <View style={ styles.switchRow }>
                <Text style={ styles.switchText }>Is Hungry </Text>
                <CustomSwitch 
                    isOn={isHungry}
                    onChange={( value ) => onChange(value, 'isHungry')} 
                />
            </View>

            <View style={ styles.switchRow }>
                <Text style={ styles.switchText }>Is Happy </Text>
                <CustomSwitch 
                    isOn={isHappy}
                    onChange={( value ) => onChange(value, 'isHappy')} 
                />
            </View>
            

            <Text style={styles.switchText}>
                {JSON.stringify(state, null, 5)}
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({
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
