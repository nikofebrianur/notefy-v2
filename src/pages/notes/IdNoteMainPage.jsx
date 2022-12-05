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
} from '../../utils/network-data';
import NotFoundMessage from '../../components/layout/NotFoundMessage';
import IdNoteAction from '../../components/notes/note-action/IdNoteAction';
import Loading from '../../components/layout/Loading';
import useLang from '../../hooks/useLang';

export default function IdNoteMainPage() {
  const [note, setNote] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const textApp = useLang('app');
  const textNote = useLang('noteId');

  const onEditHandler = () => {
    navigate(`/notes/${id}/edit`);
  };

  const onArchiveHandler = () => {
    if (window.confirm(textApp.msg.confirm)) {
      let methods = null;
      if (note.isArchived) {
        methods = unarchiveNote(id);
        navigate('/archives');
      } else {
        methods = archiveNote(id);
      }
      methods
        .then((res) => {
          if (!res.error) {
            navigate('/');
          }
        })
        .catch(() => {
          alert(textApp.msg.error);
        });
    }
  };

  const onDeleteHandler = () => {
    if (window.confirm(textApp.msg.confirm)) {
		deleteNote(id).then(res => {
			if (!res.error) {
				navigate('/')
			}
		})
		.catch(() => {
			alert(textApp.msg.error);
		})
	};
  };

  useEffect(() => {
	getNote(id)
    .then((res) => {
		if (!res.error) {
			setNote(res.data);
		} else {
			alert(textNote.notFound);
		}
		setLoading(false);
	})
	.catch(() => {
		alert(textApp.msg.error);
	})
  }, [id]);

  return (
    <div className='detail-page'>
      {'id' in note && !loading ? (
        <>
          <Link to='/' title='Back'>
            <FaArrowLeft /> {textApp.back}
          </Link>
          <h3 className='detail-page__title'>{note.title}</h3>
          <p className='detail-page__createdAt'>
            {showFormattedDate(note.createdAt)}
          </p>
          <div className='detail-page__body'>{parser(note.body)}</div>
          <IdNoteAction
            isArchived={note.isArchived || false}
            handleEdit={onEditHandler}
            handleArchive={onArchiveHandler}
            handleDelete={onDeleteHandler}
          />
        </>
      ) : ''}
	  {(!('id' in note) && !loading) ? <NotFoundMessage /> : ''};
	  {loading ? <Loading /> : ''};
    </div>
  );
};
