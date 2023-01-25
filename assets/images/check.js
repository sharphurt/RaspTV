import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 2L3 5L9 1" stroke="white" stroke-width="2"/>
</svg>
`;

export default () => <SvgXml xml={xml} width="10px" height="7px" />;