import { ButtonProps } from "@root-axis/design-system/dist/components/button";
import { AccordionProps } from "@root-axis/design-system/dist/components/accordion";

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "ra-button": ButtonProps & JSX.HTMLAttributes<HTMLElement>;
      "ra-accordion": AccordionProps & JSX.HTMLAttributes<HTMLElement>;
    }
  }
}