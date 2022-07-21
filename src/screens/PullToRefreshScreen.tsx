import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { RefreshControl, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { HeaderTitle } from '../components/HeaderTitle';
import { RootStackParams } from '../navigation/StackNavigator';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<RootStackParams, 'PullToRefreshScreen'> { }

export const PullToRefreshScreen = ({ route }: Props) => {

    const { name } = route.params

    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<string>();

    const onRefresh = () => {
        setRefreshing(true);

        setTimeout(() => {
            console.log('terminamos')
            setRefreshing(false)
            setData('Hola Mundo')
        }, 1500);
    };


    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={ onRefresh }
                    progressViewOffset={10}
                />
            }
        >
            <View style={styles.globalMargin}>
                <HeaderTitle title={name} />

                {
                    data && <HeaderTitle title={data} />
                }
            </View>

        </ScrollView>
    );
}
