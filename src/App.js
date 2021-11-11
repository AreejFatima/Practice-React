import React from "react";
import "./App.css";
import SortedArticles from "./components/SortedArticles";
import { ARTICLES } from "./components/mockArticles";
import TextEditor from "./components/TextEditor";

const App = () => {
  return (
    <>
      {/* <SortedArticles articles={ARTICLES} />  */}
      <TextEditor />
    </>
  );
};

export default App;
