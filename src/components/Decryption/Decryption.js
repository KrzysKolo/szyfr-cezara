import React from 'react';
import { Button } from '../Button/Button';
import './decryption.scss';

const Decryption = ({decryption, title, setDecryptionShow}) => {
  return (
    <div className='wrapper-encryprion' >
       <p>{decryption}</p>
       <div className='wrapper-encryprion__btn'>
        <Button onClick={() => setDecryptionShow(false)} title={title} />
       </div>
    </div>
  )
}

export default Decryption;