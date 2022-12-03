import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NotesItem';

function NotesList({ notes }) {
	return (
		<div className='notes-list'>
			{notes.map((note) => <NoteItem key={note.id} note={note}/> )}
		</div>
	)
}

NotesList.propTypes = {
    notes: PropTypes.oneOfType([PropTypes.array]).isRequired,
};

export default NotesList;