import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside
      className={`hidden w-64 shrink-0 flex-col rounded-r-lg bg-[#153973] py-8 text-slate-50 drop-shadow-md md:flex`}
    >
      <div className="mb-8 h-12 px-4">
        <Link
          className="flex items-center gap-2 text-lg font-semibold uppercase tracking-widest"
          href="#"
        >
          <Image
            src={
              "https://cdn.eraspace.com/pub/media/wysiwyg/logo/Logo_Eraspace_MyEraspace-04.png"
            }
            alt="eraspace"
            quality={90}
            width={200}
            height={200}
          />
        </Link>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="grid w-full">
          <li className="group">
            <Link
              className="
              flex w-full items-center 
              gap-4 px-4 py-3 
              text-sm font-medium 
              transition-all
              group-hover:translate-x-4
              group-hover:rounded-xl
              group-hover:bg-white
              group-hover:text-indigo-950
              "
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
    </aside>
  );
};

export default Sidebar;
