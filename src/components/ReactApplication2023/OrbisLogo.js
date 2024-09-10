import React from 'react';
import { isEmpty, getDateTime } from "shared-functions";

const OrbisLogo = (props) => {

  // * Available props: -- 07/17/2023 MF
  // * Properties: classes, width -- 07/17/2023 MF

  const componentName = "OrbisLogo";

  let classes = isEmpty(props) === false && isEmpty(props.classes) === false ? props.classes : "orbis-logo";
  let width = isEmpty(props) === false && isEmpty(props.width) === false ? props.width : "";

  return (
    <svg className={classes} width={width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1624.91 556.67">
      <path fill="#2e3192" d="M1606.78 424.92v-14.83c-.14-16.25-.4-32.51-.42-48.77 0-5-1.86-7.74-7-7.89-2.21-.06-5 .27-4-4h29.1c1 2.34.7 4.05-2.34 3.91-7.27-.35-8.38 3.84-8.47 10-.39 25.42-.58 50.84.1 76.25v4.43c-7-.34-12.37-2-16.83-7.67-16.65-21.28-33.79-42.18-50.76-63.21-1.81-2.24-3.75-4.37-5.53-6.45-1.89.82-1.53 2.12-1.52 3.15.09 19.92.38 39.85.27 59.77 0 5.41 1.73 8.16 7.28 8.29 2.2.05 5 0 3.53 4.13h-29c-1.56-4.46 1.88-4.24 4.09-4.26 5.14 0 6.73-2.79 6.75-7.37q.21-34.69.52-69.39c0-5.37-3.17-7.15-7.82-7.52-2.52-.2-5.44 0-3.7-4.53 6.69 0 13.54.15 20.37-.06 3.56-.11 4.59 2.63 6.2 4.68q24.93 31.51 49.77 63.1c2.37 3 5 5.8 7.51 8.7zm-873.59 17.71c10.38-14.69 5.51-30.38 6.41-45.23.72-11.84-.34-23.78-.13-35.68.1-5.45-1.86-8.14-7.26-8.36-2-.08-4.43.28-3.88-3.53.22-1.07 1.43-1 2.55-1 16 0 32-.15 48-.07 26.83.13 44.5 15 46.21 38.68C827 413.31 809.23 437 785 441.21c-16.86 2.94-33.79-.12-51.81 1.42zm19.75-7.29c19.62 1.33 38.58 3.56 50.9-15.17 10-15.27 9.65-40.46-1.21-53.08-13.51-15.7-31.58-13.11-49.58-11.32-1.45 26.76-.57 52.73-.11 79.57zm686.06 9.03c-28.53-.08-47.2-19.2-47.25-48.38 0-29.54 20.67-49.28 51.56-49.12 29.94.15 48.56 17.79 48.43 45.88-.15 30.89-21.42 51.7-52.74 51.62zm-33.11-53.63c.21 13 2.72 24.72 10.59 34.66 8.47 10.68 19.75 14.25 33 12.2 13.42-2.08 21.62-10.16 25.46-22.86a59.69 59.69 0 00-1.39-39.69c-6.18-16-20-23.75-38.46-21.94-15.13 1.48-25.42 11.51-28.43 28a85 85 0 00-.79 9.63zM698.1 419.25c-.57 7.75-1.1 15-1.67 22.76h-64.38c0-.67-.41-2.08-.09-2.26 6.52-3.61 5.36-9.81 5.39-15.59.1-20.15.06-40.3.29-60.45.07-5.94-.76-10.63-8.2-10.35-2.94.11-3.52-1.39-2.65-4.24h67.5c-.64 6.07-1.32 12.05-1.9 18-.15 1.55-.5 2.64-2.34 2.6s-1.79-1.42-2.08-2.79c-2.28-10.57-2.31-10.57-13.66-11.78-7.51-.81-15-1.15-22.91.67v34.77a88.64 88.64 0 0024.51 0c4.35-.52 3.85-3.71 4.21-6.6.24-1.86-.5-4.71 2.79-4.34 2.6.29 1.91 2.74 1.92 4.43.07 7.31 0 14.62 0 21.92 0 1.77.41 4.05-2.34 4.07s-2.55-2.31-2.47-4c.29-6.69-3.46-8.76-9.39-8.7-6.35.07-12.7 0-19.37 0-1.32 12.92-.93 25.19-.2 38.32 11.62.2 23.14.63 34.7-.63 5.71-.63 5.24-5.36 6.59-9 .96-2.64-.35-6.99 5.75-6.81zm157.26-69.96h38.56c1 4.23-1.67 4.15-4 4-7-.44-9 3.32-9 9.68.17 16.25-.11 32.51.11 48.76.21 15.71 6 21.92 21.64 23.64a44.33 44.33 0 0015-.91c11.57-2.67 17-7.86 17.77-19.49 1.24-18.51.59-37.07.29-55.62-.08-5.09-3.55-5.73-7.45-6-2.26-.17-5.48.87-4.81-4.5h29.73c1.27 0 2.25.4 2.43 1.81.23 1.75-.84 2.24-2.35 2.65-10.56 2.84-10.49 2.87-10.59 14.17-.14 16 .3 32.09-.78 48.05-1.09 16.31-9.3 24.92-25.31 27.74-10.63 1.87-21.42 1.9-31.85-1.94s-16.1-11-16.3-22.15c-.33-19-.69-38-.66-57 0-6.06-2.14-9-8.26-8.86-2.47.05-5.47.4-4.17-4.03zm308.58 92.9c1.76-7.62 8.87-2.76 12.21-7.11-1.71-7.39-5.61-14.61-8.47-22.18-.83-2.21-3-1.79-4.74-1.79h-29.53a3.85 3.85 0 01-.68 0c-3.84-.56-4.57 2.48-5.38 5-2.14 6.56-7.54 12.25-6.18 19.66.41 2.24 4 1.55 6.22 1.75 3.09.29 4.87 1.08 3.36 4.69h-29.42c-1.18-2.66-.86-4.56 2.47-4.51 5.46.08 7.37-3.77 9.16-7.83 11.26-25.48 22.46-51 33.82-76.4 1-2.22.77-5.88 4.72-5.8s3.64 3.65 4.61 5.91c10.52 24.3 20.84 48.69 31.38 73 2.19 5.06 3.53 11.14 11.09 11.38 2.05.07 1.54 2.37 1.09 4.27zm-32.09-37.14h32.41l-16-38.63zm-60.61-51.9c-.74 5.61-1.39 10.56-2 15.52-.23 1.74.1 4-2.7 3.81-2.11-.12-2.71-1.74-2.46-3.41 1.6-10.66-6.51-12.51-13.65-14.33-15.35-3.91-30.17-2.28-41 10.27-12.26 14.25-12.48 31.22-5.6 47.81 6.62 15.94 20.16 23 37 24.15 10.91.75 21.13-1.88 31.48-8-.61 4.46-1.06 7.52-4.41 9.12-19.73 9.44-53.84 10.25-71.68-10.92-12.38-14.69-14.1-31.59-8.06-49 6.31-18.21 20.8-27.32 39.15-30.31a78.32 78.32 0 0143.93 5.29zm224.3-3.92v18.58c0 1.45-.39 2.78-2.2 2.86-2.19.1-2.33-1.41-2.7-3.13-2.53-11.91-2.57-11.9-15-11.9h-11.16c-1.74 13.5-.84 26.52-1 39.5-.12 11.23.07 22.47 0 33.7 0 5.63 1.84 9.22 8.32 8.88 2.37-.12 5.37-.07 4.54 4.78h-36.06c-1.25 0-2.29-.33-2.46-1.75-.28-2.18 1.28-3.07 2.92-2.92 10.11.93 10.13-5.76 10.08-12.84-.15-21.55-.17-43.09-.27-64.64 0-1.32-.23-2.64-.38-4.24-7.36-.88-14.41-.49-21.44-.19-4.29.18-3.63 3.7-4.6 6.41s1.52 7.83-4.87 8.5c-.34-7.23-.67-14.2-1-21.6zm28.76-.03h38.64c1 3.95-1.29 4.27-3.75 4.1-6.42-.43-9.14 2.63-9.13 8.88q.11 33.35 0 66.7c0 5.66 2 9.15 8.41 8.86 2.29-.1 5.51-.21 4.49 4.35h-38.67c-1.08-4.9 2.56-4.42 5-4.38 5.68.1 7.8-2.93 7.79-8 0-22.69-.18-45.37-.11-68.06 0-5.81-2.6-8.32-8.21-8.29-2.44-.01-5.47.46-4.46-4.16z" id="prefix__Education" />
      <path fill="#02a04e" d="M630.82 316.18h993.59v5.62H630.82z" id="prefix__Line" />
      <path fill="#2e3192" d="M976.61 203.58c19.75 25.55 37.8 51.19 57.66 75.46a15.18 15.18 0 0010.44 6c6.83.71 6.86.91 4.87 8.38a177 177 0 00-31.39.13c-3.93.43-5-2.83-6.68-5-16.89-21.68-32-44.72-49.49-65.94-5-6-10-11.94-15-17.94-1.25-1.51-3.16-2.77-2.07-5.32 1.16-2.73 3.42-1.77 5.31-1.68 9.94.46 19.7-.3 29-4.12a37.07 37.07 0 0020.3-47.93c-4.73-11.69-14.51-16.76-26-18.95-10.92-2.07-21.87-1.09-32.74 1.2-4.4.92-5 3.67-5.19 7.45-1.47 23.35-1 46.72-.93 70.09 0 22.22-.67 44.45.65 66.66.62 10.48 1.84 11.6 12.1 12.65 3.65.37 7.29.72 11.06 1.09 1.54 2.26.94 4.69.25 8.1a568.35 568.35 0 00-71.26.21c-2.63-2.64-2-5.09-1.43-8.16 4.82-.5 9.73-1.15 14.67-1.51 5.79-.42 8.72-3.41 9-9.15 0-.92.16-1.83.18-2.75.7-45.37.8-90.74-.13-136.11-.19-9.12-2.29-10.95-11.63-11.59-2.06-.14-4.12-.13-6.18-.25-6.73-.4-6.91-.67-5.57-8 7 0 14-.23 21.06 0 24.28.93 48.52-1.28 72.79-.73a133 133 0 0114.33 1.45c34.41 4.56 42.71 42.51 22.2 66.1-10.37 11.89-24.24 16.75-40.18 20.16zm238.88-10.3c3.82.61 7.44 1.15 11 1.75 27.54 4.58 41.17 25.23 34.7 52.54-5.41 22.78-28.14 41.82-53.43 45.11-11.21 1.46-22.39 1.23-33.59.63a256.21 256.21 0 00-40.83.6c-2.05-4.27-1.17-6.93 2.68-8.09 5.38-1.62 6.45-5.56 6.7-10.52 1.91-38.45 1.47-76.91 1.16-115.38 0-6.87 0-13.74-.24-20.61-.39-12.71-1.54-14-14.37-14.54-5.85-.23-8.82-1.77-6.51-8.23 6.34 0 12.67-.19 19 0 21.53.73 43-1 64.51-1.17a87.46 87.46 0 0119.76 2c24.76 5.52 35.37 30.08 22.7 52.13-6 10.51-15.35 16.68-26.38 20.77-2.25.9-4.87.97-6.86 3.01zm-47 7v63.5c0 18.71 0 18.71 18.78 19.1 32.32.67 49.94-16.59 48.27-48-.69-13.22-5.56-24.83-18.88-30.16-15.41-6.14-31.66-5.32-48.16-4.4zm-.25-10.94c14.75.28 29 1.83 42.45-4.08 13-5.72 17.45-16.93 17.7-30.07.25-12.91-6-22.16-17.46-26-13.54-4.55-27.34-3.86-41.27-1.06-2.08 20.39-1.15 40.32-1.41 61.25zm-462.55-77.11c35.25.22 59.55 6.23 79 25.66 19 18.94 24.46 42.65 22.74 68.15C802.58 278.55 727 320.57 662.32 287c-24.66-12.82-37.62-34.44-42.26-60.94-6.77-38.73 1.93-72.51 35.37-96.62 17.5-12.64 37.57-17.44 50.26-17.21zm74.68 95.49c0-4.12.37-8.28-.06-12.35-4.41-41.51-25.3-73.14-74.78-72-27.38.62-49.59 16.73-57 43.12-8.3 29.5-5.1 58.17 9.35 85.14 9.93 18.54 25.39 30.53 46.72 33.4 28.81 3.87 59.09-6 70.65-41.53 3.75-11.67 5.82-23.5 5.12-35.78zm828.77-50c-1.13.1-2.22.28-3.32.28-1.36 0-2.71-.13-4.66-.24-.27-4.9-.84-9.63-.69-14.34a11.68 11.68 0 00-5.62-10.94c-13.55-9-28.17-11.88-43.85-7.15a34.69 34.69 0 00-23.36 41.23c2.84 11.49 11 17.72 22.14 19.95s22.56 3.8 33.83 5.8c18 3.2 34 9.56 38.93 29.51 5.21 21-.19 39.48-16.08 54.42-21.53 20.23-47.65 23.65-75.55 19.82a94.91 94.91 0 01-23.12-6.25c-2.52-1-4.26-2.15-4-5.41a326.32 326.32 0 001.46-34.73c2.79-1.67 5.22-1.1 8.32-.66.4 4.67 1.09 9.38 1.14 14.09.07 6.13 2.65 10.6 7.9 13.48 19.48 10.68 39.62 12.64 59.81 2.69 16-7.88 23.66-27.59 18.51-44.6-3.26-10.79-11.16-16.6-21.55-19-11.34-2.64-22.87-4.52-34.31-6.76-24.5-4.79-37.6-17.1-39.73-37.31-2.55-24.23 9.26-45.6 31.15-54.18 24.91-9.77 49.42-5.66 73.46 4.09 2.26.92 3.11 2.25 2.81 4.72-1.26 10.37-2.4 20.77-3.62 31.49zm-186.96 128.11a10.84 10.84 0 01-.5 8.1c-23.81-1.59-48-1.25-71.83 0-2-2.9-1.49-5.28-.83-8.05 4.06-.43 8.1-.88 12.15-1.28 9.69-1 11.31-2.43 11.79-12.29.42-8.46.47-16.94.45-25.41-.08-35.52-.12-71-.45-106.54-.14-13.92-1.66-15.11-15.49-15.79-2.72-.13-5.43-.45-8-.66-1.63-2.44-1-4.68-.71-8 24.32.73 48.64 1.14 72.76-.2 1.76 2.88 1.3 5.26.67 7.65-3.6 1.39-7.31 1.07-10.94 1.29-10.78.64-12.62 2.22-13.08 13.19-.43 10.3-.44 20.61-.43 30.92q0 49.15.22 98.3c0 2.29.19 4.58.26 6.86.22 6.85 3.49 10.49 10.59 10.66 4.36.14 8.67.8 13.37 1.25z" id="prefix__Orbis" />
      <g id="prefix__Layer_6" data-name="Layer 6">
        <path fill="#2e3192" d="M525.46 150.48a279 279 0 00-30.17-46.32C368.48 118.08 239.74 83.72 196.2 12.31a277.63 277.63 0 00-91.52 48.52C225 135.9 368.16 159.12 525.46 150.48z" />
        <path fill="#02a04e" d="M551.87 227.49A275.59 275.59 0 00536.31 174c-182.93 35.69-346.18 18.14-492.11-46.2a277 277 0 00-31.93 68.32c183.88 61.78 363.04 63.25 539.6 31.37z" />
        <path fill="#2e3192" d="M477.88 84.48A277.42 277.42 0 00278.25 0c-5.15 0-10.25.17-15.36.44 31.67 51.22 136.16 84.63 214.99 84.04zM0 281.64c1.77 152.19 125.64 275 278.25 275 153.72 0 278.34-124.62 278.34-278.34a279.74 279.74 0 00-3-40.57C379.36 303 194.09 314 0 281.64z" />
      </g>
    </svg>
  );
};

export default OrbisLogo;