import { useState } from "react";
import Editor from "@monaco-editor/react";
import { LiveProvider, LivePreview } from "react-live";
import CopyClipboard from "@/components/copy-clipboard";

type CodePlaygroundProps = {
  code: string;
};

const CodePlayground = ({ code: defaultCode }: CodePlaygroundProps) => {
  const [code, setCode] = useState(defaultCode);
  const [animateCopy, setAnimateCopy] = useState(false);

  function handleOnChange(value?: string) {
    setCode(value || "");
  }

  function handleCopy() {
    setAnimateCopy(true);
    navigator.clipboard.writeText(code);
  }

  return (
    <div className="my-4 grid grid-cols-1 py-4 md:grid-cols-2">
      <div className="relative mx-8 w-[90%] bg-[#1e1e1e] py-6 md:px-0">
        <CopyClipboard
          onAnimationEnd={() => setAnimateCopy(false)}
          onClick={handleCopy}
          copyAnimation={animateCopy}
        />
        <Editor
          className="max-h-[95dvh] overflow-hidden"
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
      <div className="mx-auto my-2 flex max-h-[90dvh] max-w-[35rem] justify-center overflow-scroll rounded-2xl border border-gray-400 p-6">
        <LiveProvider code={code}>
          <LivePreview />
        </LiveProvider>
      </div>
    </div>
  );
};

export default CodePlayground;
