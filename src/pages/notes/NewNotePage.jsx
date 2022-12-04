import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddNoteAction from '../../components/notes/note-action/AddNoteAction';
import { addNote } from '../../utils/local-data';
import { Editor } from 'react-draft-wysiwyg';
import {
  ContentState,
  convertFromHTML,
  EditorState,
  convertToRaw,
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default function NewNotePage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: '',
    body: EditorState.createWithContent(
      ContentState.createFromBlockArray(
        convertFromHTML('Write down your note here...')
      )
    ),
  });

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
    addNote({ title, body });
    navigate('/');
  };

  return (
    <div className='add-new-page'>
      <div className='add-new-page__input'>
        <input
          className='add-new-page__input__title'
          placeholder='Write down the note title here...'
          value={form.title}
          onChange={onChangeHandler}
        />
      </div>
      <Editor
        editorState={form.body}
        onEditorStateChange={onEditorStateChangeHandler}
      />
      <AddNoteAction handleSave={onSaveHandler} />
    </div>
  );
}
