import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([])

  function deleteNote(id) {
    setNotes(prevValue => {
      return prevValue.filter((item, index) => {
        return id !== index
      })
    })
  }


  function makeNote(newNote) {
    setNotes(prevValue => {
      return [...prevValue, newNote]
    })

  }

  return (
    <div>
      <Header />
      <CreateArea
        onAdd={makeNote}
      />
      {notes.map((note, index) => {
        return <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      })}
      <Footer />
    </div>
  );
}

export default App;
