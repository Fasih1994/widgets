import React, { useState } from "react";
import Convert from "./Convert";
import DropDown from "./DropDown";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabics",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

const Translate = () => {
  const [Language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label className="label">Enter Text</label>
          <input
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
      </div>
      <DropDown
        options={options}
        selected={Language}
        label="Select a language"
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={Language} />
    </div>
  );
};

export default Translate;
