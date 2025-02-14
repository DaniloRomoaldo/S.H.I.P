/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export default function OutputQuery ({editorRef}) {

    const runCode = async () => {
        const sourceCode = editorRef.current.getValue()
        if (!sourceCode) return;
        console.log(sourceCode.replace(/\s+/g, " ").trim())
    }



    return(
        <div className="">
            
        </div>
    )
}