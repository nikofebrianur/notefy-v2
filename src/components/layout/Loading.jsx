import React from 'react';
import useLang from '../../hooks/useLang';

export default function LoadingIndicator() {
  const text = useLang('app');

  return (
    <p className='loading-indicator'>{ text.msg.loading }</p>
  )
};