import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowLeft, FaPlus } from 'react-icons/fa';
import PageAction from '../../layout/PageAction';
import { useNavigate } from 'react-router-dom';

function AddNoteAction({ handleSave }) {
  const navigate = useNavigate();

  return (
    <PageAction page='add-new-page'>
      <>
        <button
          className='action'
          type='button'
          title='Back'
          onClick={() => navigate('/')}
        >
          <FaArrowLeft />
        </button>
        <button
          className='action'
          type='button'
          title='Add'
          onClick={() => handleSave()}
        >
			<FaPlus/>
		</button>
      </>
    </PageAction>
  );
}

AddNoteAction.propTypes = {
  handleSave: PropTypes.func.isRequired,
};

export default AddNoteAction;
