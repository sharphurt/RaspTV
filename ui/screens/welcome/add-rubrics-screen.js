import { StyleSheet, Text, SafeAreaView, View, ScrollView, Modal, Dimensions } from 'react-native';
import React from 'react';
import LargeButton from '../../components/button/large-button';
import SourceDataCard from '../../components/source_data_card';
import { Colors } from '../../../colors';
import SimpleInput from '../../components/input/simple-input';
import SmallButton from '../../components/button/small-button';
import ColorPicker from '../../components/color-picker';

const globalStyles = require('../../../global-styles');

const AddRubricsScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [modalRubricName, setModalRubricName] = React.useState(false);


    return (
        <SafeAreaView style={styles.backgroundStyle}>

            <View>
                <Text style={globalStyles.header_1}>welcome</Text>
                <Text style={[globalStyles.button_text, styles.subHeader]}>Создайте рубрики для построения сетки вещания</Text>
            </View>

            <Modal visible={modalVisible} animationType='fade' transparent={true} onRequestClose={() => setModalVisible(!modalVisible)}>
                <View style={styles.fullScreen}>
                    <View style={styles.modalView}>
                        <Text style={[globalStyles.button_text, styles.modalHeader]}>Добавление рубрики</Text>
                        <View style={{ flexDirection: 'row', alignSelf: 'stretch', alignItems: 'center' }}>
                            <ColorPicker style={{marginRight: 8}} />
                            <SimpleInput style={{flex: 1}} onChange={setModalRubricName}  placeholder='Имя' />
                        </View>
                        <View style={styles.modalButtonContainer}>
                            <SmallButton style={styles.leftButton} filled={false} text='Отмена' onPress={() => console.log()} />
                            <SmallButton text='Добавить' onPress={() => console.log()} />
                        </View>
                    </View>
                </View>
            </Modal>


            <ScrollView style={styles.scrollView}>
                <SmallButton onPress={() => setModalVisible(true)} text='Добавить рубрику' />
            </ScrollView>

            <View style={styles.bottomContainer}>
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

    bottomContainer: {
        alignItems: 'flex-end',
    },

    modalView: {
        padding: 16,
        margin: 20,
        marginTop: 100,
        backgroundColor: Colors.Background,
        borderRadius: 8
    },

    fullScreen: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },

    modalButtonContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginTop: 16
    },

    leftButton: {
        marginRight: 12
    },

    modalHeader: {
        marginBottom: 8
    },
});

export default AddRubricsScreen;
