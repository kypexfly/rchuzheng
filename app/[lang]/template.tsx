import { RouteAnimate } from "@/components/route-animate";

export default function RootTemplate({ children }: { children: React.ReactNode }) {
  return <RouteAnimate>{children}</RouteAnimate>;
}
