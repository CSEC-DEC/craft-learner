import React, { useRef } from 'react';
import { Editor } from '@monaco-editor/react';

function Playground() {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    alert(editorRef.current.getValue());
  }

  return (
    <div className="h-screen flex">
      <div className="w-3/5 p-4 relative">
        <h1 className="text-xl font-bold mb-4">Editor</h1>
        <Editor
          height="90vh"
          defaultLanguage="javascript"
          defaultValue="// code goes here"
          onMount={handleEditorDidMount}
        />
        <button
          className="absolute top-4 right-8 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={showValue}
        >
          Run
        </button>
      </div>
      <div className="w-2/5 p-4 border-l border-gray-300">
        <h1 className="text-xl font-bold">Output</h1>
      </div>
    </div>
  );
}

export default Playground;
