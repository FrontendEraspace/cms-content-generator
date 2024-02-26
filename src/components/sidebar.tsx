import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import React, { ComponentPropsWithoutRef, useState } from "react";
import useAuth from "@/hooks/use-auth";
import { LayoutDashboard, LogOut } from "lucide-react";

const sideBarItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: <LayoutDashboard width={20} height={20} />,
  },
  {
    name: "Lorem Ipsum",
    href: "/404",
    icon: <LayoutDashboard width={20} height={20} />,
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth();

  return (
    <>
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
        <section className="container relative h-screen py-8">
          <p className="text-sm font-medium tracking-wide text-gray-200">
            Main Menu
          </p>
          <nav className="py-2">
            <ul className="flex h-screen flex-col">
              {sideBarItems.map((item) => (
                <SideBarListItem
                  key={item.name}
                  href={item.href}
                  title={item.name}
                  icon={item.icon}
                />
              ))}
              <SideBarListItem
                onClick={() => logout()}
                className="cursor-pointer items-end"
                title={"Logout"}
                icon={<LogOut width={20} height={20} />}
              />
            </ul>
          </nav>
        </section>
      </aside>
      <div className="mt-4 px-2 md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger>
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent className="border-0 bg-[#1F386F]" side={"left"}>
            <SheetHeader className="text-left">
              <SheetTitle>
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
              </SheetTitle>
            </SheetHeader>
            <section className="container relative h-screen py-8">
              <p className="text-sm font-medium tracking-wide text-gray-200">
                Main Menu
              </p>
              <nav className="py-2">
                <ul className="flex h-screen flex-col">
                  {sideBarItems.map((item) => (
                    <SideBarListItem
                      key={item.name}
                      href={item.href}
                      title={item.name}
                      icon={item.icon}
                    />
                  ))}
                  <SideBarListItem
                    onClick={() => logout()}
                    className="cursor-pointer items-end"
                    title={"Logout"}
                    icon={<LogOut width={20} height={20} />}
                  />
                </ul>
              </nav>
            </section>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

interface SidebarListItemProps extends ComponentPropsWithoutRef<"div"> {
  title: string;
  icon: React.ReactElement;
  href?: string;
  className?: string;
}

function SideBarListItem({
  title,
  icon,
  href,
  className,
  ...props
}: SidebarListItemProps) {
  return (
    <li
      className={cn(
        `
        flex items-center 
        justify-start 
        space-x-2 rounded-lg 
        px-2 py-2 
        font-medium 
        text-zinc-400 
        transition-all 
        hover:bg-white 
        hover:text-[#153973]
        `,
        className,
      )}
    >
      {icon}
      {href != null ? (
        <Link href={href}>{title}</Link>
      ) : (
        <div className="w-full" {...props}>
          {title}
        </div>
      )}
    </li>
  );
}

export default Sidebar;
