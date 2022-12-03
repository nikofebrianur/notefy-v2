import React, { useEffect, useState } from "react";
import Home from "../components/index/Home";
import NotesList from "../components/notes/NotesList";
import NotesListEmpty from "../components/notes/NotesListEmpty";
import { getActiveNotes } from "../utils/local-data";

export default function IndexPage() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  const onHandleSearch = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    if (search !== "") {
      setNotes(
        getActiveNotes().filter((note) =>
          note.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setNotes(getActiveNotes());
    }
  }, [search]);

  return (
    <div>
      <h2>Active Notes</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="What note are you looking for?"
          value={search}
          onChange={onHandleSearch}
        />
      </div>
      {notes.length > 0 && <NotesList notes={notes} />}
      {notes.length === 0 && <NotesListEmpty notes={notes} />}
      <Home />
    </div>
  );
}
