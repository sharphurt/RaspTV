import MaskInput from 'react-native-mask-input';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Colors } from '../../../colors';

const globalStyles = require('../../../global-styles');

const MaskedInput = ({ mask, keyboardType, placeholder, value, onChange, style }) => {
    const [text, onChangeText] = React.useState(value)

    const onChangeValue = (t) => {
        onChangeText(t);
        onChange(t);
    }

    return (
        <View style={[styles.input_container, style]}>
            <MaskInput style={[globalStyles.button_text, styles.input,]} value={text} mask={mask} onChangeText={t => onChangeValue(t)} keyboardType={keyboardType} placeholder={placeholder} placeholderTextColor={Colors.Blue} />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        borderColor: Colors.Blue,
        borderRadius: 16,
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 12,
        paddingRight: 12,
        color: Colors.White,
        justifyContent: 'center'
    }
});

export default MaskedInput;
