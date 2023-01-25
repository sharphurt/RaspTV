import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_462_3247)">
<path d="M43.75 12.2676H12.25C10.3162 12.2676 8.75 13.8338 8.75 15.7676V22.7501H12.25V15.7326H43.75V40.2851H12.25V33.2501H8.75V40.2676C8.75 42.2013 10.3162 43.7326 12.25 43.7326H43.75C45.6838 43.7326 47.25 42.1926 47.25 40.2676V15.7676C47.25 13.8338 45.6838 12.2676 43.75 12.2676ZM26.25 35.0001L33.25 28.0001L26.25 21.0001V26.2501H8.75V29.7501H26.25V35.0001Z" fill="#FC63FB"/>
</g>
<defs>
<clipPath id="clip0_462_3247">
<rect width="42" height="42" fill="white" transform="translate(7 7)"/>
</clipPath>
</defs>
</svg>
`;

export default () => <SvgXml xml={xml} width="56px" height="56px" />;