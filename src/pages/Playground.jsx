import React, { useRef, useState } from 'react';
import { Editor } from '@monaco-editor/react';
import axios from 'axios';

function Playground() {
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  const executeCode = () => {
    setLoading(true);
    const code = editorRef.current.getValue();
    axios
      .post('https://emkc.org/api/v2/piston/execute', {
        language: 'python',
        version: '3',
        files: [
          {
            name: 'test.py',
            content: code,
          },
        ],
      })
      .then((res) => {
        const result = res.data.run.output;
        setOutput(result);
        setLoading(false);
      })
      .catch((err) => {
        setOutput(err);
        setLoading(false);
      });
  };

  return (
    <div className="h-screen flex flex-col lg:flex-row">
      <div className="w-full lg:w-3/5 p-4 relative">
        <h1 className="text-xl font-bold mb-4">Editor</h1>

        {/* only python for now */}
        <Editor
          height="70vh"
          defaultLanguage="python"
          defaultValue="# code goes here"
          onMount={handleEditorDidMount}
        />
        <button
          className="absolute top-4 right-8 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={executeCode}
        >
          Run
        </button>
      </div>

      <div className="w-full lg:w-2/5 p-4 border-t lg:border-l lg:border-gray-300 mt-4 lg:mt-0">
        <h1 className="text-xl font-bold">Output</h1>
        {loading ? <p>...running...</p> : <p>{output}</p>}
      </div>
    </div>
  );
}

export default Playground;
