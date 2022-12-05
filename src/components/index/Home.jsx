import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import useLang from '../../hooks/useLang';
import PageAction from '../layout/PageAction';

export default function Home() {
  const text = useLang('app');
  const navigate = useNavigate();

  return (
    <PageAction page='homepage'>
      <button
        className='action'
        type='button'
        title={text.add}
        onClick={() => navigate('/notes/new')}
      >
        <FaPlus />
      </button>
    </PageAction>
  );
}
