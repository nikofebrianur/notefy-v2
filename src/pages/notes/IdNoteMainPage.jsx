import React, { useEffect, useState } from 'react';
import parser from 'html-react-parser';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { showFormattedDate } from '../../utils';
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from '../../utils/local-data';
import NotFoundMessage from '../../components/layout/NotFoundMessage';
import IdNoteAction from '../../components/notes/note-action/IdNoteAction';

export default function IdNoteMainPage() {
  const [note, setNote] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const onEditHandler = () => {
    navigate(`/notes/${id}/edit`);
  };

  const onArchiveHandler = () => {
    if (note.isArchived) {
      unarchiveNote(id);
      navigate('/archives');
    } else {
      archiveNote(id);
      navigate('/');
    }
  };

  const onDeleteHandler = () => {
    deleteNote(id);
    navigate('/');
  };

  useEffect(() => {
    const showNote = getNote(id);
    if (showNote) {
      setNote(showNote);
    }
  }, [id]);

  return (
    <div className='detail-page'>
      {'id' in note ? (
        <>
          <Link to='/' title='Back'>
            <FaArrowLeft /> Back
          </Link>
          <h3 className='detail-page__title'>{note.title}</h3>
          <p className='detail-page__createdAt'>
            {showFormattedDate(note.createdAt)}
          </p>
          <div className='detail-page__body'>{parser(note.body)}</div>
        </>
      ) : (
        <NotFoundMessage />
      )}
      <IdNoteAction
        isArchived={note.isArchived || false}
        handleEdit={onEditHandler}
        handleArchive={onArchiveHandler}
        handleDelete={onDeleteHandler}
      />
    </div>
  );
}
