import React, { useState, useEffect } from "react";
import Editor from "../Editor/Editor";
import "./App.css";
import useLocalStorage from "../../hooks/useLocalStorage";

function App() {
  // const [html, setHtml] = useState("");
  // const [css, setCss] = useState("");
  // const [js, setJs] = useState("");

  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");

  const [srcDoc, setSrcDoc] = useState(``);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>${html}</html>
      <style>${css}</style>
      <script>${js}</script>
    `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

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
      <div className="pane botttom-pane">
        <iframe
          srcDoc={srcDoc}
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
