import { ButtonProps } from "@root-axis/design-system/dist/components/button";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ra-button": ButtonProps & React.HTMLAttributes<HTMLElement>;
    }
  }
}
