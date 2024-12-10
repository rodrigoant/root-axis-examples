"use client";
import { useRouter } from "next/navigation";

export default function Button({
  children,
  href,
  type,
  dark,
  ...props
}: {
  children: React.ReactNode;
  href: string;
  type: "primary" | "secondary" | "tertiary";
  dark: boolean;
}) {
  if (typeof window !== "undefined") {
    import("@root-axis/design-system");
  }
  const router = useRouter();

  return (
    <>
      <ra-button
        onClick={() => router.push(href)}
        size="medium"
        type={type}
        dark={dark}
        {...props}
      >
        {children}
      </ra-button>
    </>
  );
}
