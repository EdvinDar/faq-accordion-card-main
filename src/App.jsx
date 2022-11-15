import { useState } from "react";
import { questions } from "./questions";

import "./App.css";
import mobile from "./images/illustration-woman-online-mobile.svg";
import desktop from "./images/illustration-woman-online-desktop.svg";
import SingleQuestion from "./SingleQuestion";
import React from "react";

function App() {
  const [quests] = useState(questions);

  return (
    <div className="container">
      <article>
        <picture>
          <source media="(min-width: 768px)" srcSet={desktop} />
          <img src={mobile} alt="" />
        </picture>
      </article>
      <article>
        <h1>FAQ</h1>
        {quests.map((quest, index) => (
          <SingleQuestion key={index} {...quest} />
        ))}
      </article>
    </div>
  );
}

export default App;
