import Link from "next/link";

const Sidebar = () => {
  return (
    <div
      className={`hidden w-64 shrink-0 flex-col border-r border-gray-800/40 md:flex`}
    >
      <div className="flex h-12 items-center px-4">
        <Link
          className="flex items-center gap-2 text-lg font-semibold uppercase tracking-widest dark:text-gray-50"
          href="#"
        >
          CMS
        </Link>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="grid w-full">
          <li className="group">
            <Link
              className="group flex w-full items-center gap-4 px-4 py-3 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50"
              href="#"
            >
              lorem ipsum
            </Link>
          </li>
          <li className="group">
            <Link
              className="group flex w-full items-center gap-4 px-4 py-3 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50"
              href="#"
            >
              lorem ipsum
            </Link>
          </li>
          <li className="group">
            <Link
              className="group flex w-full items-center gap-4 px-4 py-3 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50"
              href="#"
            >
              lorem ipsum
            </Link>
          </li>
          <li className="group">
            <Link
              className="group flex w-full items-center gap-4 px-4 py-3 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50"
              href="#"
            >
              lorem ipsum
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
