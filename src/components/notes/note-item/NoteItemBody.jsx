import React from 'react';
import PropTypes from 'prop-types';
import { content } from '../../../utils';

function NoteItemBody({ body }) {
	return (
		<p className='note-item__body'>
			{ content(body) }
		</p>
	)
};

NoteItemBody.propTypes = {
	body: PropTypes.string.isRequired
};

export default NoteItemBody;