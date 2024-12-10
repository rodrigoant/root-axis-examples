import { ButtonProps } from "@root-axis/design-system/dist/components/button";
import { AccordionProps } from "@root-axis/design-system/dist/components/accordion";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ra-button": ButtonProps & React.HTMLAttributes<HTMLElement>;
    }
  }
  namespace JSX {
    interface IntrinsicElements {
      "ra-accordion": AccordionProps & React.HTMLAttributes<HTMLElement>;
    }
  }
}
