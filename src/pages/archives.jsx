import React, { useEffect, useState } from "react";
import Home from "../components/index/Home";
import NotesList from "../components/notes/NotesList";
import NotesListEmpty from "../components/notes/NotesListEmpty";
import { getArchivedNotes } from "../utils/local-data";

export default function ArchivesPage() {
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		setNotes(getArchivedNotes())
	}, [])

	return (
    <div className="homepage">
      <h2>Archived Notes</h2>
      <div className="search-bar">
        <input type="text" placeholder="Search archived notes by title..." />
      </div>
      {notes.length > 0 && <NotesList notes={notes} />}
      {notes.length === 0 && <NotesListEmpty />}
      <Home />
    </div>
  );
}
