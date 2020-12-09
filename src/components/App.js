import React from "react";
import Accordion from "./Accordion";
import Search from "./Search";

const items = [
  {
    title: "What is React?",
    content: "React is a JavaScript Frontend Framework.",
  },
  {
    title: "Why use React?",
    content: "React is a JS library among engineers.",
  },
  {
    title: "How do you use  React?",
    content: "React is use by creating components.",
  },
];

export default () => {
  return (
    <div>
      <Search />
    </div>
  );
};
