"use client";
import { useRouter } from "next/navigation";

export default function ClientComponents() {
  if (typeof window !== "undefined") {
    import("@root-axis/design-system");
  }

  const router = useRouter();

  return (
    <div className="w-[400px]">
      <div className="flex gap-4 mb-10">
        <ra-button
          onClick={() => router.push("https://storybook.rodrigoantunes.dev/")}
          size="medium"
          type="primary"
          dark
        >
          Storybook
        </ra-button>
        <ra-button
          onClick={() => router.push("https://www.npmjs.com/org/root-axis")}
          size="medium"
          type="tertiary"
          dark
        >
          NPM
        </ra-button>
        <ra-button
          onClick={() =>
            router.push("https://design-system.rodrigoantunes.dev/")
          }
          size="medium"
          type="secondary"
          dark
        >
          Docs
        </ra-button>
      </div>
      <div className="flex flex-col">
        <ra-accordion dark>
          <span slot="summary">Is it accessible?</span>
          Yes.
        </ra-accordion>
        <ra-accordion dark>
          <span slot="summary">Is it styled?</span>
          Yes. It comes with default styles that matches the other components
          aesthetic.
        </ra-accordion>
        <ra-accordion dark>
          <span slot="summary">Is it animated?</span>
          Yes. It&lsquo;s animated by default
        </ra-accordion>
      </div>
    </div>
  );
}
