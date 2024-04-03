"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface Props {
  className?: string;
  item: {
    name: string;
    href: string;
    icon: ReactNode;
  };
}

export default function ItemSidebar(prop: Readonly<Props>) {
  const path = usePathname();
  return (
    <Link
      className={`${
        path === `/dashboard${prop.item.href}`
          ? "font-bold border-l-4 border-tremor-background-emphasis dark:border-tremor-background-subtle bg-tremor-background-subtle  dark:bg-dark-tremor-background-subtle"
          : ""
      } flex flex-row space-x-2 items-center w-full lhover:bg-tremor-background-subtle hover:dark:bg-dark-tremor-background-subtle ${
        prop.className
      }`}
      href={`/dashboard${prop.item.href}`}
    >
      {prop.item.icon}
      <span>{prop.item.name}</span>
    </Link>
  );
}
