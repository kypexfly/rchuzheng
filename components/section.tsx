import { ReactNode } from "react";

export function Section({ children }: { children: ReactNode }) {
  return <section className="my-16">{children}</section>;
}
