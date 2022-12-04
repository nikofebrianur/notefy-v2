import React, { useEffect, useState } from 'react';
import Home from '../components/index/Home';
import NoteList from '../components/notes/NoteList';
import NoteListEmpty from '../components/notes/NoteListEmpty';
import { getActiveNotes } from '../utils/local-data';

export default function IndexPage() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState('');

  const onSearchHandler = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    if (search !== '') {
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
    <div className='homepage'>
      <h2>Active Notes</h2>
      <div className='search-bar'>
        <input
          type='text'
          placeholder='What note are you looking for?'
          value={search}
          onChange={onSearchHandler}
        />
      </div>
      {notes.length > 0 && <NoteList notes={notes} />}
      {notes.length === 0 && <NoteListEmpty notes={notes} />}
      <Home />
    </div>
  );
}
