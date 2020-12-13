import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const [Translated, setTranslated] = useState("");
  const [DebounceText, setDebounceText] = useState(text);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounceText(text);
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const do_translations = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: DebounceText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    do_translations();
  }, [language, DebounceText]);

  return (
    <div>
      <h1 className="ui header">{Translated}</h1>
    </div>
  );
};

export default Convert;
