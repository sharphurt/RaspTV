import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
        d="M11.5 13.5C10.9477 13.5 10.5 13.0523 10.5 12.5V5.5C10.5 4.94772 10.9477 4.5 11.5 4.5H12.5C13.0523 4.5 13.5 4.94772 13.5 5.5V12.5C13.5 13.0523 13.0523 13.5 12.5 13.5H11.5Z"
        fill="white" />
    <path
        d="M4.65798 12.5602C4.67783 12.4227 4.69823 12.287 4.71832 12.1533C4.7323 12.0603 4.74613 11.9682 4.75953 11.8772C4.87099 11.1204 5.51326 10.5 6.27824 10.5C6.33837 10.5 6.39733 10.5038 6.45485 10.5112C6.51689 10.5038 6.57895 10.5 6.64071 10.5C7.40572 10.5 7.77595 11.0653 7.51288 11.7836C7.45217 11.9494 7.39386 12.1262 7.34312 12.3114C7.28903 12.5514 7.23767 12.7964 7.19808 13.0433C7.13656 13.5704 7.17055 14.1325 7.39164 14.6832C7.75655 15.5921 8.27479 16.4077 9.00454 16.996C9.68868 17.5476 10.6374 17.9638 12 17.9978C13.3627 17.9638 14.3113 17.5476 14.9955 16.996C15.7252 16.4077 16.2435 15.5921 16.6084 14.6832C16.8295 14.1325 16.8635 13.5704 16.8019 13.0433C16.7624 12.7964 16.711 12.5514 16.6569 12.3114C16.6062 12.1262 16.5479 11.9494 16.4871 11.7836C16.2241 11.0653 16.5943 10.5 17.3593 10.5C17.4211 10.5 17.4831 10.5038 17.5452 10.5112C17.6027 10.5038 17.6617 10.5 17.7218 10.5C18.4868 10.5 19.129 11.1204 19.2405 11.8772C19.2539 11.9682 19.2677 12.0603 19.2817 12.1533C19.3018 12.287 19.3222 12.4227 19.342 12.5602C19.4452 13.0485 19.5148 13.5935 19.4974 14.1644C19.5207 15.0819 19.3956 16.0194 18.9095 16.8967C17.6645 19.1438 15.5182 21 12.1813 21C12.1205 21 12.0601 20.9994 12 20.9983C11.94 20.9994 11.8795 21 11.8187 21C8.48181 21 6.33549 19.1438 5.09051 16.8967C4.60442 16.0194 4.47931 15.0819 4.50267 14.1644C4.48525 13.5935 4.55487 13.0485 4.65798 12.5602Z"
        fill="white" />
</svg>
`;

export default () => <SvgXml xml={xml} width="24px" height="24px" />;