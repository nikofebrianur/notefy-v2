import React from 'react';
import PropTypes from 'prop-types';
import PageAction from '../layout/PageAction';
import { FaCheck } from 'react-icons/fa';

function EditNoteAction({ handleSave }) {
	return (
		<PageAction page='detail-page'>
			<button
				className='action'
				type='button'
				title='Save'
				onClick={() => handleSave()}
			>
				<FaCheck/>
			</button>
		</PageAction>
	)
};

EditNoteAction.propTypes = {
	handleSave: PropTypes.func.isRequired,
};

export default EditNoteAction;