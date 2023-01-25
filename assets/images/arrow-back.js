import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.82843 8.70707L9.53553 12.5L8.12132 13.9142L2 7.70707L8.12132 1.5L9.53553 2.91421L5.82843 6.70707H13.4142V8.70707H5.82843Z" fill="white"/>
</svg>
`;

export default () => <SvgXml xml={xml} width="16px" height="16px" />;