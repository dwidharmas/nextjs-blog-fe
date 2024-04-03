import LogoDwi from "@/components/logo";
import ItemSidebar from "./item";
import { MdDashboard, MdDynamicFeed, MdMenu } from "react-icons/md";

const ItemList = [
  {
    id: 1,
    name: "Dashboard",
    href: "",
    icon: <MdDashboard />,
  },
  {
    id: 1,
    name: "My Page",
    href: "/my-page",
    icon: <MdDynamicFeed />,
  },
];

export default function SidebarDashboard() {
  return (
    <div className="flex flex-col h-full min-w-56 mr-4 bg-tremor-background dark:bg-dark-tremor-background">
      <div className="flex flex-row items-center space-x-2 px-4 py-4 h-24">
        {/* <MdMenu size={20} /> */}
        <LogoDwi />
      </div>
      <nav>
        <ul>
          {ItemList.map((item) => (
            <li key={item.id}>
              <ItemSidebar className={"px-4 py-2"} item={item} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
