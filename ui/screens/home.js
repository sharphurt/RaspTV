import { StyleSheet, Text, SafeAreaView, View, ScrollView, LayoutAnimation, UIManager } from 'react-native';
import React from 'react';
import { Colors } from '../../colors';
import ProgressBar from '../components/progress-bar';

import ReloadIcon from '../../assets/images/reload';
import PowerIcon from '../../assets/images/power';
import SettingsIcon from '../../assets/images/settings';
import ProgramIcon from '../../assets/images/program'
import SourcesIcon from '../../assets/images/sources'
import GridIcon from '../../assets/images/grid'

import IconButton from '../components/button/icon-button';
import IconTextButton from '../components/button/icon-text-button';
const globalStyles = require('../../global-styles');

const HomeScreen = ({ navigation }) => {
    const startStream = async () => {
        try {
            const response = await fetch('http://catstack.net:8106/api/streams/startStream');
            const responseJson = await response.json();
            console.log(responseJson)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <SafeAreaView style={styles.backgroundStyle}>
            <View style={styles.header_controls_container} >
                <View>
                    <Text style={[globalStyles.header_2, { marginTop: -6, color: Colors.Blue }]}>стрим идет</Text>
                    <View style={styles.time_indicators_container}>
                        <Text style={globalStyles.button_text}>05:20</Text>
                        <Text style={globalStyles.hint_text}>7 ч 13 мин</Text>
                        <Text style={globalStyles.button_text}>01:42</Text>
                    </View>
                    <View>
                        <View style={{ borderBottomColor: Colors.Blue, borderBottomWidth: 2, borderStyle: 'dashed' }} />
                        <ProgressBar progress={0.3} width={200} height={2} borderWidth={0} color={Colors.Blue} style={{ marginTop: -2 }} />
                    </View>
                </View>
                <View style={styles.header_buttons_container}>
                    <Text style={globalStyles.small_hint_text}>192.168.255.255:3615</Text>
                    <View style={styles.header_buttons}>
                        <IconButton style={{ marginRight: 8 }} image={ReloadIcon} />
                        <IconButton image={PowerIcon} color={Colors.Red} onPress={() => startStream()} />
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'column' }}>
                <View style={styles.home_buttons_container}>
                    <IconTextButton style={styles.icon_button} text='Программа стрима' image={ProgramIcon} onPress={() => { navigation.navigate('ScheduleToday') }} />
                    <IconTextButton style={styles.icon_button} text='Конфигурация системы' image={SettingsIcon} onPress={() => { console.log('dsds') }} />
                </View>
                <View style={styles.home_buttons_container}>
                    <IconTextButton style={styles.icon_button} text='Настроить источники' image={SourcesIcon} onPress={() => { console.log('dsds') }} />
                    <IconTextButton style={styles.icon_button} text='Настроить сетку вещания' image={GridIcon} onPress={() => { navigation.navigate('GridGlobal') }} />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        justifyContent: 'flex-start',
        backgroundColor: Colors.Black,
        padding: 20,
        flex: 1,
    },

    header_controls_container: {
        backgroundColor: Colors.Background,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 24,
        paddingBottom: 24,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 8
    },

    time_indicators_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 8,
        marginBottom: 4
    },

    header_buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 4
    },

    header_buttons_container: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },

    home_buttons_container: {
        flexDirection: 'row',
        marginLeft: -8,
        marginRight: -8,
        marginTop: 8,
        alignItems: 'stretch',
    },

    icon_button: {
        flex: 1,
        width: 100,
        height: 100,
        paddingRight: 0,
        flexGrow: 1,
        aspectRatio: 1,
        marginLeft: 8,
        marginRight: 8,
        marginTop: 8,
    }
});

export default HomeScreen;