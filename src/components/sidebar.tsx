import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import useAuth from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";

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
        <section className="container h-screen py-8">
          <p className="text-sm text-gray-500">Main Menu</p>
          <nav className="py-2">
            <ul className="space-y-4">
              <li className="font-medium text-zinc-400">lorem</li>
              <li className="font-medium text-zinc-400">lorem</li>
              <li className="font-medium text-zinc-400">lorem</li>
              <li className="font-medium text-zinc-400">lorem</li>
              <li className="">
                <Button
                  className="bg-[#692fd0] hover:bg-[#6a2fd0d3]"
                  onClick={() => logout()}
                >
                  Logout
                </Button>
              </li>
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
              <SheetDescription>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
                vero autem recusandae odit delectus sequi distinctio sed
                voluptatum aperiam consectetur.
              </SheetDescription>
            </SheetHeader>
            <section className="container h-screen py-8">
              <p className="text-sm text-gray-500">Main Menu</p>
              <nav className="py-2">
                <ul className="space-y-4">
                  <li className="font-medium text-zinc-400">lorem</li>
                  <li className="font-medium text-zinc-400">lorem</li>
                  <li className="font-medium text-zinc-400">lorem</li>
                  <li className="font-medium text-zinc-400">lorem</li>
                  <li className="">
                    <Button
                      className="bg-[#692fd0] hover:bg-[#6a2fd0d3]"
                      onClick={() => logout()}
                    >
                      Logout
                    </Button>
                  </li>
                </ul>
              </nav>
            </section>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Sidebar;
