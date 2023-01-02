import { StyleSheet, Text, View, LayoutAnimation, UIManager } from 'react-native';
import React from 'react';
import SimpleInput from './input/simple-input';
import MaskedInput from './input/masked-input';
import SmallButton from './button/small-button';
import { RadioButton } from 'react-native-radio-buttons-group';
import { Colors } from '../../colors';
import { Masks } from 'react-native-mask-input';

const globalStyles = require('../../global-styles');

const SourceDataCard = ({ data, style, onAdding, onRemoving, onChanging }) => {
    const [_name, onChangeName] = React.useState(data?.name);
    const [_url, onChangeUrl] = React.useState(data?.url);
    const [_rubric, onChangeRubric] = React.useState(data?.rubric);
    const [_firstVideosAmount, onChangeFirstVideosAmount] = React.useState(data?.startFromSelector.filter(v => v.id === 'firstVideos')[0].value);
    const [_lastVideosAmount, onChangeLastVideosAmount] = React.useState(data?.startFromSelector.filter(v => v.id === 'lastVideos')[0].value);
    const [_dateStart, onChangeDateStart] = React.useState(data?.dateStart);
    const [_dateEnd, onChangeDateEnd] = React.useState(data?.dateEnd);
    const [_filter, onChangeFilter] = React.useState(data?.filter);

    const [_opened, onChangeOpened] = React.useState(false);
    const [_added, onChangeAdded] = React.useState(data !== undefined && data !== null);

    const [_startFromRadioButtons, setStartFromRadioButtons] = React.useState([
        {
            id: 'firstVideos', // acts as primary key, should be unique and non-empty string
            label: 'первые',
            value: 'firstVideos',
            containerStyle: styles.radio_button,
            size: 16,
            labelStyle: globalStyles.button_text,
            color: Colors.Blue,
            selected: data?.startFromSelector.filter(v => v.id === 'firstVideos')[0].selected,
            value: _firstVideosAmount,
            onChangeCallback: (v) => onChangeFirstVideosAmount(v)
        },
        {
            id: 'lastVideos',
            label: 'последние',
            value: 'lastVideos',
            containerStyle: styles.radio_button,
            size: 16,
            labelStyle: globalStyles.button_text,
            color: Colors.Blue,
            selected: data?.startFromSelector.filter(v => v.id === 'lastVideos')[0].selected,
            value: _lastVideosAmount,
            onChangeCallback: (v) => {
                onChangeLastVideosAmount(v);
            }
        }
    ]);

    React.useEffect(() => {
        onChanging(inputData());
    }, [_name, _url, _rubric, _firstVideosAmount, _lastVideosAmount, _dateStart, _dateEnd, _filter]);

    const inputData = () => {
        return ({
            id: data?.id,
            isAdded: _added,
            name: _name,
            url: _url,
            rubric: _rubric,
            startFromSelector: _startFromRadioButtons.map((button) => {
                return (
                    {
                        id: button.id,
                        selected: button.selected,
                        value: button.id === 'firstVideos' ? _firstVideosAmount : _lastVideosAmount
                    })
            }),
            dateStart: _dateStart,
            dateEnd: _dateEnd,
            filter: _filter
        })
    };

    if (Platform.OS === 'android') {
        if (UIManager.setLayoutAnimationEnabledExperimental) {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    const handlePress = (id) => {
        for (const button of _startFromRadioButtons) {
            if (button.selected && button.id === id) return;
            button.selected = button.id === id;
        }

        setStartFromRadioButtons(_startFromRadioButtons);
    }

    const onDetailsButtonPress = () => {
        onChangeOpened(!_opened)
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }

    const onAddDeleteButtonPress = () => {
        if (_added)
            onRemoving()
        else {
            onAdding(inputData());
        }
    }

    return (
        <View style={[styles.card_container, style]}>
            <View style={styles.input_fields_container}>
                <SimpleInput style={styles.row_element} placeholder='Имя' value={_name} onChange={onChangeName} />
                <SimpleInput style={styles.row_element} placeholder='Ссылка' value={_url} onChange={onChangeUrl} />
                <Text style={[globalStyles.button_text, styles.row_element]}>Рубрика</Text>
                <SimpleInput style={styles.row_element} />

                {_opened &&
                    <View>
                        <View style={[styles.radio_container]}>
                            {_startFromRadioButtons.map((button) => (
                                <View style={styles.row_container} key={button.id}>
                                    <RadioButton
                                        {...button}
                                        key={button.id}
                                        onPress={(id) => {
                                            handlePress(id);
                                        }}
                                    />
                                    <SimpleInput style={styles.radio_selector_input} editable={button.selected} value={button.value} onChange={v => button.onChangeCallback(v)} placeholder='N' keyboardType='numeric' />
                                    <Text style={globalStyles.button_text}>видео</Text>
                                </View>
                            ))}
                        </View>
                        <View style={[styles.row_container, { justifyContent: 'space-between' }]}>
                            <Text style={[globalStyles.button_text, { marginRight: 8 }]}>c</Text>
                            <MaskedInput style={{ marginRight: 8, flex: 1 }} placeholder='...' mask={Masks.DATE_DDMMYYYY} value={_dateStart} onChange={onChangeDateStart} />
                            <Text style={[globalStyles.button_text, { marginRight: 8 }]} >по</Text>
                            <MaskedInput style={{ marginRight: 8, flex: 1 }} placeholder='...' mask={Masks.DATE_DDMMYYYY} value={_dateEnd} onChange={onChangeDateEnd} />
                        </View>

                        <View style={{ marginTop: 16 }}>
                            <Text style={[globalStyles.button_text, { marginBottom: 4 }]}>Искать видео содержащие только слово/фразу:</Text>
                            <SimpleInput placeholder='Фильтр поиска' value={_filter} onChange={onChangeFilter} />
                        </View>
                    </View>
                }

                <View style={styles.buttons_container}>
                    <SmallButton style={styles.left_button} text={_opened ? 'Скрыть' : 'Уточнить'} filled={false} onPress={onDetailsButtonPress}></SmallButton>
                    <SmallButton text={_added ? 'Удалить' : 'Добавить'} color={_added ? Colors.Red : Colors.Blue} onPress={onAddDeleteButtonPress}></SmallButton>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card_container: {
        backgroundColor: Colors.Background,
        borderRadius: 8,

        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 20,
        paddingRight: 20
    },

    buttons_container: {
        marginTop: 16,
        marginBottom: 8,
        flexDirection: 'row',
        alignSelf: 'flex-end'
    },

    left_button: {
        marginRight: 8
    },

    row_element: {
        marginBottom: 8
    },

    radio_button: {
        alignSelf: 'flex-start',
    },

    radio_label_container: {
        color: Colors.White,
        flexDirection: 'column'
    },

    row_container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },

    radio_selector_input: {
        width: 80,
        marginRight: 8
    }
});

export default SourceDataCard;
