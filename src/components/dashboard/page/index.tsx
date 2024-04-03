import { ReactNode } from "react";
import { Card } from "@tremor/react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function PageDashbaord({ title, children }: Readonly<Props>) {
  return (
    <div className="flex flex-col w-full mr-4">
      <div className="flex flex-row items-center py-4 h-24">
        <h1 className="text-2xl">{title}</h1>
      </div>
      <Card className="">{children}</Card>
    </div>
  );
}
