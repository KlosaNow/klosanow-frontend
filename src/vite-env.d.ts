/// <reference types="vite/client" />

declare module "*.svg" {
  import * as React from "react";
  const svgUrl: string;
  const svgComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  export default svgUrl;
  export { svgComponent as ReactComponent };
}
