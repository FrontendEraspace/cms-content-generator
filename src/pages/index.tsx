import { Inter } from "next/font/google";
import Sidebar from "@/components/sidebar";
import CodePlayground from "@/components/code-playground";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} h-screen w-full md:overflow-hidden`}>
      <div className="h-screen w-full md:flex">
        <Sidebar />
        <div className="grid w-full">
          <CodePlayground
            code={`<h1 className="text-blue-400 font-bold px-4 py-2 bg-red-500">Hello world</h1>`}
          />
        </div>
      </div>
    </main>
  );
}
