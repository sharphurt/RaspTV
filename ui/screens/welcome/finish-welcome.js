import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import React from 'react';
import LargeButton from '../../components/button/large-button';
import MaskedInputWithTitle from '../../components/input/masked-input-with-title';
import { Colors } from '../../../colors';

const globalStyles = require('../../../global-styles');

const FinishWelcomeScreen = () => {
    return (
        <SafeAreaView style={styles.backgroundStyle}>
            <View>
                <Text style={globalStyles.header_1}>welcome</Text>
                <Text style={globalStyles.button_text}>{`Создайте рубрики для построения 
сетки вещания`}</Text>
            </View>
            
            <View style={styles.bottom_container}>
                <LargeButton onPress={() => console.log('press')} text='Далее' />
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
    },

    input: {
        marginBottom: 16
    }
});

export default FinishWelcomeScreen;
