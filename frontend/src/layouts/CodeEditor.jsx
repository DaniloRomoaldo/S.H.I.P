/* eslint-disable react/prop-types */
import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";
import { rawQuery } from "../api/rawQuery";

export default function CodeEditor({setDataTable}) {
    const editorRef = useRef();
    const [value, setValue] = useState('');

    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    };

    const runCode = async () => {
        const sourceCode = editorRef.current.getValue();
        if (!sourceCode) return;
        const handleQuery = sourceCode.replace(/\s+/g, " ").trim();

        
        try {

            
            const { sucess, data: { rows, command , fields} = {} ,error = null } = await rawQuery(handleQuery);
            

            setDataTable({sucess,rows, command, error, fields})

        } catch (err) {
            console.error("Erro ao executar a consulta:", err);
        }
    };

    return (
        <div className="h-full w-full flex">
            {/* Botão de Executar (Rotacionado) */}
            <div className="flex items-start justify-center pt-2">
                <button
                    onClick={runCode}
                    type="button"
                    className="rotate-90 text-green-700 hover:text-white border border-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-1 py-1.5 mx-2 text-center cursor-pointer dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                >
                    <svg
                        viewBox="0 0 24 24"
                        width="8"
                        height="8"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="css-i6dzq1"
                    >
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    </svg>
                </button>
            </div>

            {/* Editor de Código */}
            <div className="flex-grow h-[50vh] sm:h-full overflow-hidden">
                <Editor
                    defaultLanguage="sql"
                    height="100%"
                    width="100%"
                    theme="vs-dark"
                    defaultValue=""
                    onMount={onMount}
                    value={value}
                    onChange={(value) => setValue(value)}
                    options={{
                        automaticLayout: true, // Ajusta o layout automaticamente
                    }}
                />
            </div>
        </div>
    );
}