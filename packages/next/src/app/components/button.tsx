"use client";
import "@root-axis/design-system";
import { useRouter } from "next/navigation";

export default function Button({
  children,
  href,
  type,
  ...props
}: {
  children: React.ReactNode;
  href: string;
  type: "primary" | "secondary" | "tertiary";
}) {
  const router = useRouter();

  return (
    <ra-button
      onClick={() => router.push(href)}
      size="medium"
      type={type}
      {...props}
    >
      {children}
    </ra-button>
  );
}
