"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  item: {
    name: string;
    href: string;
  };
}

export default function ItemSidebar(prop: Readonly<Props>) {
  const path = usePathname();
  return (
    <Link
      className={`${
        path.startsWith(`/dashboard/${prop.item.href}`)
          ? "bg-tremor-background-subtle dark:bg-dark-tremor-background-subtle font-bold"
          : ""
      } flex w-full pl-2 py-2 hover:bg-tremor-background-subtle hover:dark:bg-dark-tremor-background-subtle`}
      href={`/dashboard/${prop.item.href}`}
    >
      {prop.item.name}
    </Link>
  );
}
