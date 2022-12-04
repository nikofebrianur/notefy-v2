import React, { useEffect, useState } from 'react';
import Home from '../components/index/Home';
import NoteList from '../components/notes/NoteList';
import NoteListEmpty from '../components/notes/NoteListEmpty';
import { getArchivedNotes } from '../utils/local-data';

export default function ArchivesPage() {
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		setNotes(getArchivedNotes())
	}, [])

	return (
    <div className='homepage'>
      <h2>Archived Notes</h2>
      <div className='search-bar'>
        <input type='text' placeholder='Search archived notes by title...' />
      </div>
      {notes.length > 0 && <NoteList notes={notes} />}
      {notes.length === 0 && <NoteListEmpty />}
      <Home />
    </div>
  );
}
