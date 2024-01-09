import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteArr, setNoteArr] = useState([]);
  function addNote(inputNote) {
    setNoteArr((prevValue) => {
      return [...prevValue, inputNote];
    });
  }
  function deleteNote(id) {
    setNoteArr((prevNote) => {
      return prevNote.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onClickAdd={addNote} />

      {noteArr.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onClickDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
