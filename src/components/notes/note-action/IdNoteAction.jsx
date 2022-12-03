import React from 'react';
import PropTypes from 'prop-types';
import PageAction from '../../layout/PageAction';
import { FaArchive, FaEdit, FaTrash } from 'react-icons/fa';

function IdNoteAction({ isArchived, handleEdit, handleArchive, handleDelete }) {
  return (
    <PageAction page='detail-page'>
      <>
        <button
          className='action'
          type='button'
          title='Edit'
          onClick={() => handleEdit()}
        >
			<FaEdit />
		</button>
        <button
          className='action'
          type='button'
          title={isArchived ? 'Activate' : 'Archive'}
          onClick={() => handleArchive()}
        >
          {isArchived ? <FaArchive/> : <FaArchive/>}
        </button>
        <button
          className='action'
          type='button'
          title='Hapus'
          onClick={() => handleDelete()}
        >
			<FaTrash/>
		</button>
      </>
    </PageAction>
  );
};

IdNoteAction.propTypes = {
  isArchived: PropTypes.bool.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleArchive: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default IdNoteAction;