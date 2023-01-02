import { StyleSheet, Text, SafeAreaView, View, ScrollView, LayoutAnimation, UIManager } from 'react-native';
import React from 'react';
import LargeButton from '../../components/button/large-button';
import SourceDataCard from '../../components/source_data_card';
import { Colors } from '../../../colors';

const globalStyles = require('../../../global-styles');

const SourceSettingsScreen = ({ navigation }) => {
    const [sources, onChangeSources] = React.useState([{
        id: 0,
        name: 'test',
        url: 'hui',
        rubric: 'pohui',

        startFromSelector: [
            {
                id: 'firstVideos',
                selected: false,
                value: null
            },
            {
                id: 'lastVideos',
                selected: true,
                value: undefined
            },
        ],
        dateStart: '12/12/2022',
        dateEnd: '16/08/2023',
        filter: 'net'
    }, {
        id: 1,
        name: 'test',
        url: 'hui',
        rubric: 'pohui',

        startFromSelector: [
            {
                id: 'firstVideos',
                selected: false,
                value: undefined
            },
            {
                id: 'lastVideos',
                selected: true,
                value: undefined
            },
        ],
        dateStart: '12/12/2022',
        dateEnd: '16/08/2023',
        filter: 'net'
    }, {
        id: 2,
        name: 'test',
        url: 'hui',
        rubric: 'pohui',

        startFromSelector: [
            {
                id: 'firstVideos',
                selected: false,
                value: null
            },
            {
                id: 'lastVideos',
                selected: true,
                value: '12'
            },
        ],
        dateStart: '12/12/2022',
        dateEnd: '16/08/2023',
        filter: 'net'
    }]);

    if (Platform.OS === 'android') {
        if (UIManager.setLayoutAnimationEnabledExperimental) {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    const addCard = (data) => {
        data.id = 10
        let newSources = sources.concat(data)
        onChangeSources(newSources);
    }

    const layoutAnimConfig = {
        duration: 300,
        update: {
            type: LayoutAnimation.Types.easeInEaseOut,
        },
        delete: {
            duration: 100,
            type: LayoutAnimation.Types.easeInEaseOut,
            property: LayoutAnimation.Properties.opacity,
        },
    };

    const deleteCard = (id) => {
        const newCards = sources.filter(s => s.id != id)
        onChangeSources(newCards);
        LayoutAnimation.configureNext(layoutAnimConfig)
    }

    const onCardChanged = (inputData) => {
        console.log(inputData.startFromSelector)
    }

    return (
        <SafeAreaView style={styles.backgroundStyle}>
            <View>
                <Text style={globalStyles.header_1}>welcome</Text>
                <Text style={[globalStyles.button_text, styles.subHeader]}>Добавьте несколько источников видео для организации стрима</Text>
            </View>

            <ScrollView style={styles.scrollView}>
                {sources.sort().map((card) => (
                    <SourceDataCard data={card} key={card.id} style={{ marginBottom: 8 }} onRemoving={deleteCard.bind(this, card.id)} onChanging={onCardChanged} />
                ))}

                <SourceDataCard key={sources.length + 1} onAdding={(data) => { addCard(data) }} onChanging={onCardChanged} />
            </ScrollView>

            <View style={styles.bottom_container}>
                <LargeButton onPress={() => navigation.navigate('WelcomeFinishSettings')} text='Далее' />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        justifyContent: 'space-between',
        backgroundColor: Colors.Black,
        padding: 20,
        flex: 1,
    },

    scrollView: {
        marginBottom: 20,
        marginTop: 20
    },

    subHeader: {
        marginBottom: 24,
    },

    bottom_container: {
        alignItems: 'flex-end',
    },
});

export default SourceSettingsScreen;
