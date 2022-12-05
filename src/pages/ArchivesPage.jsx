import React, { useEffect, useState } from 'react';
import Home from '../components/index/Home';
import NoteList from '../components/notes/NoteList';
import NoteListEmpty from '../components/notes/NoteListEmpty';
import { getArchivedNotes } from '../utils/network-data';
import Loading from '../components/layout/Loading';
import useInput from '../hooks/useInput';
import useLang from '../hooks/useLang';
import { appPage } from '../utils/content';

export default function ArchivesPage() {
  const [data, setData] = useState([]);
  const [init, setInit] = useState(false);
  const [notes, setNotes] = useState([]);

  const [search, setSearch] = useInput('');
  const [loading, setLoading] = useState(true);

  const text = useLang('archive');
  const textNote = useLang('note');

  const initNotesApi = () => {
    getArchivedNotes()
      .then((res) => {
        if (!res.error) {
          setData(res.data);
          setNotes(res.data);
          setInit(true);
          setLoading(false);
        }
      })
      .catch(() => {
        alert(text.msg.error);
      });
  };

  useEffect(() => {
    if (!init) {
      initNotesApi();
    }
    if (init) {
      let tempData = [...data];
      if (search !== '') {
        tempData = tempData.filter((data) =>
          data.title.toLowerCase().includes(search.toLowerCase())
        );
      }
      setNotes(tempData);
    }
  }, [search]);

  return (
    <div className='homepage'>
      <h2>{ text.header }</h2>
      <div className='search-bar'>
        <input
          type='text'
          placeholder='Search archived notes by title...'
          value={search}
          onChange={setSearch}
        />
      </div>
      {(notes.length > 0 && !loading) ? <NoteList notes={notes} /> : ''}
      {(notes.length === 0 && !loading) ? <NoteListEmpty /> : ''}
      {loading ? <Loading /> : ''}
      <Home />
    </div>
  );
}
