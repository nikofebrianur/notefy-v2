import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Editor } from 'react-draft-wysiwyg';
import {
  ContentState,
  convertFromHTML,
  convertToRaw,
  EditorState,
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { editNote, getNote } from '../../utils/local-data';
import NotFoundMessage from '../../components/layout/NotFoundMessage';
import EditNoteAction from '../../components/notes/note-action/EditNoteAction';
import { FaArrowLeft } from 'react-icons/fa';

export default function IdEditNotePage() {
  const [form, setForm] = useState({
    id: '',
    isArchived: false,
    title: '',
    body: EditorState.createWithContent(
      ContentState.createFromBlockArray(
        convertFromHTML('Write down your note here...')
      )
    ),
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    setForm((data) => ({
      ...data,
      title: event.target.value,
    }));
  };

  const onEditorStateChangeHandler = (body) => {
    setForm((data) => ({
      ...data,
      body,
    }));
  };

  const onSaveHandler = () => {
    const { title } = form;
    const body = draftToHtml(convertToRaw(form.body.getCurrentContent()));
    editNote({ id, title, body });
    navigate(`/notes/${id}`);
  };

  useEffect(() => {
    const showNote = getNote(id);
    if (showNote) {
      const { title, isArchived, body } = showNote;
      setForm({
        id,
        title,
        isArchived,
        body: EditorState.createWithContent(
          ContentState.createFromBlockArray(convertFromHTML(body))
        ),
      });
    }
  }, (id));

  return (
    <div className='edit-page'>
      {form.id !== '' ? (
        <>
          <Link to='/' title='Back'>
            <FaArrowLeft /> Back
          </Link>
          <div className='edit-page__input'>
            <input
              className='edit-page__input__title'
              placeholder='Note Title'
              value={form.title}
              onChange={onChangeHandler}
            />
            <Editor
              editorState={form.body}
              onEditorStateChange={onEditorStateChangeHandler}
            />
          </div>
        </>
      ) : (
        <NotFoundMessage />
      )}

      <EditNoteAction handleSave={onSaveHandler} />
    </div>
  );
}
