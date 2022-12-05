import React from 'react';
import useLang from '../../hooks/useLang';

export default function NoteListEmpty() {
  const text = useLang('note');

  return (
    <section className='notes-list-empty'>
      <p className='notes-list__empty'>
        {text.empty}
      </p>
    </section>
  );
}
