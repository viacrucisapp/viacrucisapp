/// <reference types="react-scripts" />
declare module '*.jpg';
declare module '*.png';
declare module '*.mp3' {
    const src: string;
    export default src;
  }

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}