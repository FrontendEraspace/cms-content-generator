import { Inter } from "next/font/google";
import { Menu } from "lucide-react";
import Sidebar from "@/components/sidebar";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  return (
    <main
      className={`${inter.className} h-screen w-full overflow-hidden bg-gray-100/50 dark:bg-gray-800/50`}
    >
      <div className="h-screen w-full md:flex">
        <Sidebar />
        {/* responsive sidebar */}
        <div className="mt-4 px-2 md:hidden">
          <Sheet open={isActive} onOpenChange={setIsActive}>
            <SheetTrigger>
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side={"left"}>
              <SheetHeader className="text-left">
                <SheetTitle>CMS</SheetTitle>
                <SheetDescription>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Totam vero autem recusandae odit delectus sequi distinctio sed
                  voluptatum aperiam consectetur.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <div className="container mt-5 grid w-full grid-cols-1 md:grid-cols-2">
          <section>section 1</section>
          <section>section 2</section>
        </div>
      </div>
    </main>
  );
}
