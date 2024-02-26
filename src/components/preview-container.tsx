import { LiveError } from "react-live";

export default function PreviewContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container py-6">
      <div className="mx-auto h-[44rem] w-full max-w-lg rounded-lg border">
        <div className="flex h-[600px] flex-col">
          <div className="flex items-center justify-start border-b p-2 px-4">
            <h1 className="text-center text-xl font-bold">Preview</h1>
          </div>
          <div className="w-full flex-1 p-4">{children}</div>
          <div className="overflow-scroll border-t p-2 text-sm">
            <LiveError />
          </div>
        </div>
      </div>
    </section>
  );
}
