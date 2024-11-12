import React, { useRef, useState } from 'react';
import { Editor } from '@monaco-editor/react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

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
        setOutput('Error: ' + err.message);
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto p-4">
      <div className="w-full mb-4">
        <h1 className="text-center text-lg font-bold mb-2">Code Playground</h1>
        <Editor
          height="50vh"
          defaultLanguage="python"
          defaultValue="# Start coding..."
          onMount={handleEditorDidMount}
          className="border rounded"
        />
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 block w-full"
          onClick={executeCode}
        >
          Run
        </button>
      </div>

      <div className="w-full mt-4 border-t pt-4">
        <h2 className="text-center text-lg font-bold">Output</h2>
        <div className="p-2 border rounded bg-gray-50 ">
          {loading ? <p>...running...</p> : <pre className='overflow-hidden'>{output}</pre>}
        </div>
      </div>
    </div>
  );
}

export default Playground;
