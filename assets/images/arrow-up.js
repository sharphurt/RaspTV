import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 6L7 2L1 6" stroke="white" stroke-width="2"/>
</svg>
`;

export default () => <SvgXml xml={xml} width="14px" height="7px" />;