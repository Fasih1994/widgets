import React, { useState } from "react";
import Accordion from "./Accordion";
import DropDown from "./DropDown";
import Search from "./Search";
import Translate from "./Translate";
import Route from "./Route";
import Header from "./Header";

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

const App = () => {
  const [Selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <DropDown
          label="Select a color"
          options={options}
          selected={Selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
