import { useState } from "react";
import Editor from "@monaco-editor/react";
import { LiveProvider, LivePreview } from "react-live";

type CodePlaygroundProps = {
  code: string;
};

const CodePlayground = ({ code: defaultCode }: CodePlaygroundProps) => {
  const [code, setCode] = useState(defaultCode);

  function handleOnChange(value?: string) {
    setCode(value || "");
  }

  return (
    <div className="my-4 grid h-screen grid-cols-1 py-4 md:grid-cols-2">
      <div className="mx-8 w-[90%] bg-[#1e1e1e] py-6 md:px-0">
        <Editor
          className="h-screen"
          defaultLanguage="html"
          defaultValue={code.trim()}
          theme="vs-dark"
          options={{
            fontSize: 14,
            minimap: {
              enabled: false,
            },
            contextmenu: false,
          }}
          onChange={handleOnChange}
        />
      </div>
      <div className="max-w-3x flex justify-center p-6">
        <LiveProvider code={code}>
          <LivePreview />
        </LiveProvider>
      </div>
    </div>
  );
};

export default CodePlayground;
