import React, { useState } from "react";
//import DropDown from "./DropDown";
//import Accordion from "./Accordion";
//import Search from "./Search";
import Tranlate from "./Translate";

// const items = [
//   {
//     title: "What is React?",
//     content: "React is a JavaScript Frontend Framework.",
//   },
//   {
//     title: "Why use React?",
//     content: "React is a JS library among engineers.",
//   },
//   {
//     title: "How do you use  React?",
//     content: "React is use by creating components.",
//   },
// ];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

export default () => {
  return (
    <div>
      <Tranlate />
    </div>
  );
};
