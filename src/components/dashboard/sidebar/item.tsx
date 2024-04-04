import Link from "next/link";
import { ComponentType, ElementType, ReactNode } from "react";

interface Props {
  className?: string;
  active: boolean;
  href: string;
  children: ReactNode;
}

export default function ItemSidebar(prop: Props) {
  return (
    <Link
      className={`${
        prop.active
          ? "font-bold border-r-4 border-tremor-background-emphasis bg-tremor-background-subtle  dark:bg-dark-tremor-background-subtle"
          : ""
      } flex flex-row space-x-3 items-center w-full hover:bg-tremor-background-subtle  ${
        prop.className
      }`}
      href={`/dashboard${prop.href}`}
    >
      {prop.children}
    </Link>
  );
}
