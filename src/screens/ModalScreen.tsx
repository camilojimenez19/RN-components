import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { Button, Modal, Text, View } from 'react-native';
import { ScreenContainerProps } from 'react-native-screens';
import { RootStackParams } from '../navigation/StackNavigator';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useState } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { color } from 'react-native-reanimated';

interface Props extends StackScreenProps<RootStackParams, 'ModalScreen'> { }

export const ModalScreen = ({ route }: Props) => {

    /* Obtenemos el nombre de la pantalla por parametros */
    const { name } = route.params

    /* Obtenemos el contexto del tema */
    const {theme:{colors}} = useContext(ThemeContext)

    const [isVisible, setIsVisible] = useState(false)

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title={name} />

            <Button
                title='Abrir Modal'
                onPress={() => setIsVisible(true)}
                color={ colors.primary }
            />

            <Modal
                animationType='fade'
                visible={isVisible}
                transparent={ true }
            >
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    {/* Contenido del modal */}
                    <View style={{
                        backgroundColor: 'white',
                        width: 200,
                        height: 200,
                        justifyContent: 'center',
                        alignItems: 'center',
                        shadowOffset:{
                            width: 0,
                            height: 10
                        },
                        shadowOpacity: 0.25,
                        elevation: 10,
                        borderRadius: 5
                    }}>
                        <HeaderTitle title='Modal' />
                        <Text style={{ fontSize: 16, fontWeight: '300', color: colors.text }}>Cuerpo del modal</Text>
                        <Button
                            title='Cerrar'
                            onPress={() => setIsVisible(false)}
                        />
                    </View>

                </View>
            </Modal>

        </View>
    );
}
