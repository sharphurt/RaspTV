import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.25 19.25V10.5H22.75V19.25H33.25V10.5H36.75V19.25H45.5V22.75H36.75V31.5H45.5V35H36.75V43.75H33.25V35H22.75V43.75H19.25V35H10.5V31.5H19.25V22.75H10.5V19.25H19.25ZM22.75 22.75V31.5H33.25V22.75H22.75Z" fill="#FC63FB"/>
</svg>
`;

export default () => <SvgXml xml={xml} width="56px" height="56px" />;