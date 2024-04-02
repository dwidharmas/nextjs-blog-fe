import ItemSidebar from "./item";
const ItemList = [
  {
    id: 1,
    name: "My Page",
    href: "my-page",
  },
];

export default function SidebarDashboard() {
  return (
    <div className="flex flex-col min-w-48 mr-4 bg-tremor-background dark:bg-dark-tremor-background h-full">
      <div className="pl-2 pr-8 py-4 mb-4">Header App</div>
      <nav>
        <ul>
          {ItemList.map((item) => (
            <li className="" key={item.id}>
              <ItemSidebar item={item} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
