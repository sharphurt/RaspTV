import MaskInput from 'react-native-mask-input';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../../../colors';

const globalStyles = require('../../../global-styles');

const MaskedInputWithTitle = ({ title, mask, keyboardType, placeholder, value, onChange, style }) => {
    const [text, onChangeText] = React.useState(value)

    const onChangeValue = (t) => {
        onChangeText(t);
        onChange(t);
    }

    return (
        <View style={[globalStyles.button_text, style]}>
            <Text style={styles.field_header}>{title}</Text>
            <MaskInput style={[globalStyles.button_text, styles.input]} value={text} mask={mask} onChangeText={t => onChangeValue(t)} keyboardType={keyboardType} placeholder={placeholder} placeholderTextColor={Colors.Blue} />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 28,
        borderWidth: 2,
        borderColor: Colors.Blue,
        borderRadius: 16,
        paddingTop: 6,
        paddingBottom: 4,
        paddingLeft: 12,
        paddingRight: 12,
        color: Colors.White,
    }
});

export default MaskedInputWithTitle;
