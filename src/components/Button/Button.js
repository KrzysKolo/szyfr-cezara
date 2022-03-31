import React from 'react';
import './button.scss';

export const Button = ({title, onClick}) => {
  return (
    <div className='btn' onClick={onClick}>{title}</div>
  )
}
