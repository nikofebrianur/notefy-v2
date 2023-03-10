import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddNoteAction from '../../components/notes/note-action/AddNoteAction';
import { addNote } from '../../utils/network-data';
import { Editor } from 'react-draft-wysiwyg';
import {
  ContentState,
  convertFromHTML,
  EditorState,
  convertToRaw,
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import useInput from '../../hooks/useInput';
import useLang from '../../hooks/useLang';

export default function NewNotePage() {
  const textApp = useLang('app');
  const textNote = useLang('notesNew');
  const navigate = useNavigate();

  const [title, setTitle] = useInput('');
  const [body, setBody] = useState(
    EditorState.createWithContent(
      ContentState.createFromBlockArray(
        convertFromHTML(textNote.bodyPlaceholder)
      )
    )
  );

  const onEditorStateChange = (body) => {
    setBody(body)
  };

  const onSaveHandler = () => {
    const bodyParsed = draftToHtml(convertToRaw(body.getCurrentContent()));
    addNote({ title, body: bodyParsed })
      .then((res) => {
        if (!res.error) {
          alert(textNote.msgSuccess);
          navigate('/');
        }
      })
      .catch(() => {
        alert(textApp.msg.error);
      })
  };

  return (
    <div className='add-new-page'>
      <div className='add-new-page__input'>
        <input
          className='add-new-page__input__title'
          placeholder={textNote.titlePlaceholder}
          value={title}
          onChange={setTitle}
        />
      </div>
      <Editor
        editorState={body}
        onEditorStateChange={onEditorStateChange}
      />
      <AddNoteAction handleSave={onSaveHandler} />
    </div>
  );
}
