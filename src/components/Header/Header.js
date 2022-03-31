import React from 'react';
import { Button } from '../Button/Button';
import './header.scss';

const Header = ({password, onChangePassword, step, onChangeStep, handleEncrypt, handleDecrypt, titleBtnEncryption, titleBtnDecryption}) => {
  return (
    <section className='wrapper-header'>
      <div className='wrapper-header__password'>
        <label>Wpisz hasło: </label>
        <input type='text' value={password} onChange={onChangePassword} placeholder="hasło..." />
      </div>
      <div className='wrapper-header__step'>
        <label>Wpisz krok szyfrowania: </label>
        <input type='text' value={step} onChange={onChangeStep} placeholder="krok..." />
      </div>
      <div className='wrapper-header__btn'>
        <Button onClick={handleEncrypt} title={titleBtnEncryption} />
        <Button onClick={handleDecrypt} title={titleBtnDecryption} />
      </div>
    </section>
  )
}

export default Header;