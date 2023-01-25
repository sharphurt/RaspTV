import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.1335 28C13.1335 28.623 12.9536 29.232 12.6166 29.75C12.2797 30.2681 11.8007 30.6718 11.2403 30.9102C10.68 31.1486 10.0633 31.211 9.46845 31.0895C8.87356 30.9679 8.32712 30.6679 7.89823 30.2274C7.46934 29.7868 7.17726 29.2256 7.05893 28.6145C6.9406 28.0035 7.00133 27.3701 7.23344 26.7945C7.46556 26.219 7.85863 25.727 8.36295 25.3809C8.86727 25.0347 9.4602 24.85 10.0667 24.85C10.8801 24.85 11.6601 25.1819 12.2352 25.7726C12.8104 26.3634 13.1335 27.1646 13.1335 28ZM10.0667 37.45C9.4602 37.45 8.86727 37.6347 8.36295 37.9809C7.85863 38.327 7.46556 38.819 7.23344 39.3945C7.00133 39.9701 6.9406 40.6035 7.05893 41.2145C7.17726 41.8256 7.46934 42.3868 7.89823 42.8274C8.32712 43.2679 8.87356 43.5679 9.46845 43.6895C10.0633 43.811 10.68 43.7486 11.2403 43.5102C11.8007 43.2718 12.2797 42.8681 12.6166 42.35C12.9536 41.832 13.1335 41.223 13.1335 40.6C13.1339 40.1862 13.0548 39.7764 12.9009 39.3941C12.7469 39.0117 12.521 38.6643 12.2361 38.3717C11.9513 38.0791 11.6131 37.8471 11.2408 37.6889C10.8685 37.5308 10.4696 37.4496 10.0667 37.45ZM10.0667 12.25C9.4602 12.25 8.86727 12.4347 8.36295 12.7809C7.85863 13.127 7.46556 13.619 7.23344 14.1945C7.00133 14.7701 6.9406 15.4035 7.05893 16.0145C7.17726 16.6256 7.46934 17.1869 7.89823 17.6274C8.32712 18.0679 8.87356 18.3679 9.46845 18.4895C10.0633 18.611 10.68 18.5486 11.2403 18.3102C11.8007 18.0718 12.2797 17.6681 12.6166 17.15C12.9536 16.632 13.1335 16.023 13.1335 15.4C13.1335 14.5646 12.8104 13.7634 12.2352 13.1726C11.6601 12.5819 10.8801 12.25 10.0667 12.25ZM46.9555 25.9H18.2447C17.7025 25.9 17.1824 26.1212 16.799 26.5151C16.4156 26.9089 16.2002 27.443 16.2002 28C16.2002 28.557 16.4156 29.0911 16.799 29.4849C17.1824 29.8788 17.7025 30.1 18.2447 30.1H46.9555C47.4977 30.1 48.0178 29.8788 48.4012 29.4849C48.7846 29.0911 49 28.557 49 28C49 27.443 48.7846 26.9089 48.4012 26.5151C48.0178 26.1212 47.4977 25.9 46.9555 25.9ZM46.8676 38.5H18.1568C17.6146 38.5 17.0945 38.7212 16.7111 39.1151C16.3277 39.5089 16.1123 40.043 16.1123 40.6C16.1123 41.157 16.3277 41.6911 16.7111 42.0849C17.0945 42.4788 17.6146 42.7 18.1568 42.7H46.8676C47.4098 42.7 47.9298 42.4788 48.3133 42.0849C48.6967 41.6911 48.9121 41.157 48.9121 40.6C48.9121 40.043 48.6967 39.5089 48.3133 39.1151C47.9298 38.7212 47.4098 38.5 46.8676 38.5ZM18.1568 17.5H46.8676C47.4098 17.5 47.9298 17.2787 48.3133 16.8849C48.6967 16.4911 48.9121 15.957 48.9121 15.4C48.9121 14.843 48.6967 14.3089 48.3133 13.9151C47.9298 13.5212 47.4098 13.3 46.8676 13.3H18.1568C17.6146 13.3 17.0945 13.5212 16.7111 13.9151C16.3277 14.3089 16.1123 14.843 16.1123 15.4C16.1123 15.957 16.3277 16.4911 16.7111 16.8849C17.0945 17.2787 17.6146 17.5 18.1568 17.5Z" fill="#FC63FB"/>
    </svg>
`;

export default () => <SvgXml xml={xml} width="56px" height="56px" />;