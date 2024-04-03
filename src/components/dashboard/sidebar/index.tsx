"use client";
import LogoDwi from "@/components/logo";
import ItemSidebar from "./item";
import { RiDashboard2Fill, RiArticleFill } from "@remixicon/react";
import { Icon } from "@tremor/react";
import { usePathname } from "next/navigation";

const ItemList = [
  {
    id: 0,
    name: "Dashboard",
    href: "",
    icon: RiDashboard2Fill,
  },
  {
    id: 1,
    name: "My Page",
    href: "/my-page",
    icon: RiArticleFill,
  },
];

export default function SidebarDashboard() {
  const path = usePathname();
  return (
    <div className="flex flex-col h-full min-w-56 mr-4 bg-tremor-background dark:bg-dark-tremor-background">
      <div className="flex flex-row items-center space-x-3 px-4 py-4 h-24">
        <LogoDwi />
      </div>
      <nav>
        <ul>
          {ItemList.map((item) => (
            <li key={item.id}>
              <ItemSidebar
                className={"px-4 py-2"}
                href={item.href}
                active={path === `/dashboard${item.href}`}
              >
                <Icon
                  icon={item.icon}
                  className="bg-dark-tremor-background-subtle  dark:bg-tremor-background-subtle"
                  size="sm"
                  variant="solid"
                  tooltip={item.name}
                />

                <span>{item.name}</span>
              </ItemSidebar>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
