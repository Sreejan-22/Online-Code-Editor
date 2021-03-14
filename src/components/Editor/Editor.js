import React from "react";

// main css for editor
import "codemirror/lib/codemirror.css";
// theme css for editor
import "codemirror/theme/material.css";

// languages to be used in the editor

// html
import "codemirror/mode/xml/xml";
// javascript
import "codemirror/mode/javascript/javascript";
// css
import "codemirror/mode/css/css";

// import the editor module
// this a controlled editor which means we can control through our own eventhandlers and values
import { Controlled as ControlledEditor } from "react-codemirror2";

export default function Editor(props) {
  const onChange = props.onChange;
  function handleChange(editor, data, value) {
    onchange(value);
  }
  return (
    <>
      <div className="editor-container">
        <div className="editor-title">{props.displayName}</div>
        <button>O/C</button>
        {/* value attribute contains the code that we are going to write on the editor */}
        <ControlledEditor
          onBeforeChange={handleChange}
          value={props.value}
          className="code-mirror-wrapper"
          options={{
            lineWrapping: true,
            lint: true,
            mode: props.language,
            theme: "material",
            lineNumbers: true,
          }}
        />
      </div>
    </>
  );
}
