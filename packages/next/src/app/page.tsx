"use client";

import Image from "next/image";
import Button from "./components/button";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex items-center gap-6 text-4xl">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          +
          <Image
            src="/root-axis.svg"
            alt="Next.js logo"
            width={50}
            height={50}
            priority
          />
        </div>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Button
            type="tertiary"
            href="https://storybook.rodrigoantunes.dev/?path=/docs/design-system--docs"
          >
            Storybook
          </Button>
          <Button
            type="primary"
            href="https://design-system.rodrigoantunes.dev/introduction"
          >
            Read our docs
          </Button>
          <Button type="primary" href="https://www.npmjs.com/org/root-axis">
            NPM
          </Button>
        </div>
      </main>
    </div>
  );
}
