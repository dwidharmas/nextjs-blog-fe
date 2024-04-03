import Link from "next/link";
import { ReactNode } from "react";

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
          ? "font-bold border-r-4 border-tremor-background-emphasis dark:border-tremor-background-subtle bg-tremor-background-subtle  dark:bg-dark-tremor-background-subtle"
          : ""
      } flex flex-row space-x-3 items-center w-full lhover:bg-tremor-background-subtle hover:dark:bg-dark-tremor-background-subtle ${
        prop.className
      }`}
      href={`/dashboard${prop.href}`}
    >
      {prop.children}
    </Link>
  );
}
