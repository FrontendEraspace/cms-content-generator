import { useState } from "react";
import Editor from "@monaco-editor/react";
import { LiveProvider, LivePreview } from "react-live";
import CopyClipboard from "@/components/copy-clipboard";
import PreviewContainer from "./preview-container";

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
    <div className="my-4 grid h-screen grid-cols-1 py-4 md:grid-cols-2">
      <div className="relative mx-8 w-[90%] rounded-xl bg-[#1e1e1e] py-6 md:px-0">
        <CopyClipboard
          onAnimationEnd={() => setAnimateCopy(false)}
          onClick={handleCopy}
          animateCopy={animateCopy}
        />
        <Editor
          className="max-h-[90vh] overflow-hidden rounded-lg"
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
      <LiveProvider code={code}>
        <PreviewContainer>
          <LivePreview />
        </PreviewContainer>
      </LiveProvider>
    </div>
  );
};

export default CodePlayground;
