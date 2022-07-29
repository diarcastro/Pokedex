declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  const ReactComponent: React.FunctionComponent<React.SVGAttributes<SVGElement>>;

  export const ReactComponent;
  export default content;
}

declare module '*.png';
declare module '*.ttf';
declare module '*.otf';
declare module '*.obj';
