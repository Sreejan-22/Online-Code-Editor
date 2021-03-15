import { useState, useEffect } from "react";

const PREFIX = "code-editor-";
// the PREFIX variable allows us to identify the localStorage variables corresponding to our application as
// there might be many such variables

export default function useLocalStorage(key, initialValue) {
  // key identifies the editor - html, css or js
  const prefixedKey = PREFIX + key;
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue != null) {
      return JSON.parse(jsonValue);
    }

    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
}
