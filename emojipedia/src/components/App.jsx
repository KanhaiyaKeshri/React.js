import React from "react";
import Entry from "./Entry";
import emojipedi from "../emojipedi";

function createEmoji(emojipedi) {
  return (
    <Entry
      key={emojipedi.id}
      img={emojipedi.emoji}
      name={emojipedi.name}
      meaning={emojipedi.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedi.map(createEmoji)};</dl>
    </div>
  );
}

export default App;
