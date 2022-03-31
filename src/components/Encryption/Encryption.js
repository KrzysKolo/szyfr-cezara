import React from 'react';
import { Button } from '../Button/Button';
import './encryption.scss';

const Encryption = ({encryption, title, setEncryptionShow}) => {
  return (
    <div className='wrapper-encryprion' >
       <p>{encryption}</p>
       <div className='wrapper-encryprion__btn'>
        <Button onClick={() => setEncryptionShow(false)} title={title} />
       </div>
    </div>
  )
}

export default Encryption;