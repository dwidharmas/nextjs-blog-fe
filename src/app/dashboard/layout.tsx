import SidebarDashboard from "@/components/dashboard/sidebar";
import { LayoutProps } from "../../../.next/types/app/layout";

export default function LayoutDashboard(props: Readonly<LayoutProps>) {
  return (
    <div className="flex h-full">
      <SidebarDashboard />
      {props.children}
    </div>
  );
}
