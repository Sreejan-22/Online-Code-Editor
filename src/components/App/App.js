import React, { useState } from "react";
import Editor from "../Editor/Editor";
import "./App.css";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  return (
    <>
      <div className="pane top-pane">
        {/* for html editor we need to specify the language as xml(rule of codemirror) */}
        <Editor
          className="html-editor"
          displayName="HTML"
          language="xml"
          value={html}
          onChange={setHtml}
        />
        <Editor
          className="css-editor"
          displayName="CSS"
          language="css"
          value={css}
          onChange={setCss}
        />
        <Editor
          className="js-editor"
          displayName="Javascript"
          language="javascript"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="botttom-pane">
        <iframe
          src=""
          title="output"
          width="100%"
          height="100%"
          sandbox="allow-scripts"
        />
      </div>
    </>
  );
}

export default App;
