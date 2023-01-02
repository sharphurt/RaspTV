import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import { Colors } from '../../../colors';

const globalStyles = require('../../../global-styles');

const SimpleInput = ({ keyboardType, placeholder, value, onChange, style, editable = true }) => {
    const [text, onChangeText] = React.useState(value)

    const onChangeValue = (t) => {
        onChangeText(t);
        onChange(t);
    }

    return (
        <View style={[styles.input_container, style]}>
            <TextInput style={[globalStyles.button_text, styles.input]} editable={editable} value={text} onChangeText={t => onChangeValue(t)} keyboardType={keyboardType} placeholder={placeholder} placeholderTextColor={Colors.Blue} />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        borderColor: Colors.Blue,
        borderRadius: 16,
        paddingTop: 1,
        paddingBottom: 1,
        paddingLeft: 12,
        paddingRight: 12,
        color: Colors.White,
        lineHeight: 20
    }
});

export default SimpleInput;
