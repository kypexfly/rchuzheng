import { WrapperTransition } from "@/components/wrapper-transition";

export default function RootTemplate({ children }: { children: React.ReactNode }) {
  return <WrapperTransition>{children}</WrapperTransition>;
}
