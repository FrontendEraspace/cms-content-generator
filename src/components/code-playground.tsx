import { useState } from "react";
import Editor from "@monaco-editor/react";
import { LiveProvider, LivePreview } from "react-live";
import CopyClipboard from "@/components/copy-clipboard";
import PreviewContainer from "@/components/preview-container";

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
    <div className="my-4 grid h-screen grid-cols-1 space-y-4 py-4 md:grid-cols-2">
      <div className="container relative mt-2.5 max-h-[38rem] min-h-[20rem] w-[90%] rounded-xl bg-[#1e1e1e] py-6">
        <CopyClipboard
          onAnimationEnd={() => setAnimateCopy(false)}
          onClick={handleCopy}
          animateCopy={animateCopy}
        />
        <Editor
          className="overflow-hidden rounded-lg"
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
