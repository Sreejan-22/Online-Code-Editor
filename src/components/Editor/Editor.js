import React, { useState } from "react";

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

// import fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";

// note
// we need to store the code written in the code editor, otherwise it gets removed when the page is refreshed
// we will use localStorage for this purpose

export default function Editor(props) {
  const { value, language, displayName, onChange } = props;

  const [isOpen, setOpen] = useState(true);

  function handleChange(editor, data, value) {
    onChange(value);
  }
  return (
    <>
      <div className={`editor-container ${isOpen ? "" : "collapsed"}`}>
        <div className="editor-title">
          {displayName}
          <button
            onClick={() => setOpen((prevOpen) => !prevOpen)}
            className="expand-collapse-btn"
          >
            <FontAwesomeIcon icon={isOpen ? faCompressAlt : faExpandAlt} />
          </button>
        </div>
        {/* value attribute contains the code that we are going to write on the editor */}
        <ControlledEditor
          onBeforeChange={handleChange}
          value={value}
          className="code-mirror-wrapper"
          options={{
            lineWrapping: true,
            lint: true,
            mode: language,
            theme: "material",
            lineNumbers: true,
          }}
        />
      </div>
    </>
  );
}
