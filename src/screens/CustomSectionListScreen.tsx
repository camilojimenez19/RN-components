import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { SectionList, Text, View } from 'react-native';
import { RootStackParams } from '../navigation/StackNavigator';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { ItemSeparator } from '../components/ItemSeparator';

interface Props extends StackScreenProps<RootStackParams, 'CustomSectionListScreen'> { }

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman", "Superman", "Robin", "Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin",]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman", "Antman","Antman", "Thor", "Spiderman", "Antman","Antman", "Thor", "Spiderman", "Antman","Antman", "Thor", "Spiderman", "Antman"]
    },
    {
      casa: "Anime",
      data: ["Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama", ]
    }
];

export const CustomSectionListScreen = ({ route }: Props) => {

    const { name } = route.params

    return (
        <View style={ styles.globalMargin }>
            <SectionList 
                sections={casas}
                renderItem={({ item }) => <Text>{ item }</Text>}
                stickySectionHeadersEnabled
                keyExtractor={ (item, index ) => item + index }
                ListHeaderComponent={() => <HeaderTitle title={name} />}
                ListFooterComponent={ () => (
                    <View style={{ marginBottom: 100 }}>
                        <HeaderTitle title={ `Total Casas: ${ casas.length }` } />
                    </View>
                )}
                renderSectionHeader={ ({section: {casa}}) => (
                    <View style={{ backgroundColor: 'white'}}>
                        <HeaderTitle title={casa} />
                    </View>
                )}
                renderSectionFooter={ ({ section }) => <HeaderTitle title={ `Total: ${section.data.length}`} /> }
                // SectionSeparatorComponent={ () => <ItemSeparator />}
                ItemSeparatorComponent={ () => <ItemSeparator />}
                showsVerticalScrollIndicator={ false }
            />

        </View>
    );
}
