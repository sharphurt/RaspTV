import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import React from 'react';
import LargeButton from '../../components/button/large-button';
import MaskedInputWithTitle from '../../components/input/masked-input-with-title';
import { Colors } from '../../../colors';

const globalStyles = require('../../../global-styles');

const IpSettingsScreen = ({ navigation }) => {
    const ipMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/];
    const portMask = [/\d/, /\d/, /\d/, /\d/];

    const onChangeIp = (t) => {

    }

    const onChangePort = (t) => {

    }

    return (
        <SafeAreaView style={styles.backgroundStyle}>
            <View>
                <Text style={globalStyles.header_1}>welcome</Text>
                <MaskedInputWithTitle style={styles.input} title="IP вашего сервера" mask={ipMask} keyboardType="numeric" placeholder="255.255.255.255" onChange={onChangeIp} />
                <MaskedInputWithTitle style={styles.input} title="Порт" mask={portMask} keyboardType="numeric" placeholder="0000" onChange={onChangePort} />
            </View>

            <View style={styles.bottom_container}>
                <LargeButton style={styles.leftButton} text='Пропустить' filled={false} onPress={() => navigation.navigate('HomeScreen')} />
                <LargeButton text='Далее' onPress={() => navigation.navigate('AddRubricsScreen')} />
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

    bottom_container: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        alignSelf: 'flex-end'
    },

    leftButton: {
        marginRight: 12
    },

    input: {
        marginBottom: 16
    }
});

export default IpSettingsScreen;
