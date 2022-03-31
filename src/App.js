import React, { useState} from 'react';
import './App.scss';
import { Encryption, Decryption, Header } from './components/';

function App() {
const [encryptionShow, setEncryptionShow] = useState(false);
const [decryptionShow, setDecryptionShow] = useState(false);
const [password, setPassword] = useState("");
const [step, setStep] = useState("");
//SZYFROWANIE
const [encryption, setEnryption] = useState("")
const [decryption, setDecryption] = useState("")
const alphabetBig = 'AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŹŻ1234567890';
const alphabetSmall = alphabetBig.toLowerCase();
const lettersCount = alphabetBig.length;
let finalString = '';
//FUNKCJA SZYFRUJĄCA
const handleEncrypt = () => {
  let stringArray = password.split('');
  stringArray.forEach(function(letter) {
    let alphabet = alphabetBig;
    if (letter === letter.toLowerCase()) {
        alphabet = alphabetSmall;
      }
    if (letter.match(/[A-Z1234567890ĄĆĘŁŃÓŚŹŻa-ząćęłńóśźż]/)) {
      let letterInitialPosition = alphabet.indexOf(letter);
      let letterPosition = parseInt(letterInitialPosition) + parseInt(step);
    if (letterPosition > lettersCount - 1) {
      let letterFinalPosition = letterPosition - lettersCount;
        finalString += alphabet.charAt(letterFinalPosition);
      } else {
          finalString += alphabet.charAt(letterPosition);
          }
      } else {
          finalString += letter;
      }
      let tabCharOfPassword = finalString.split('');
      tabCharOfPassword.forEach((el, index) => {
        if (el === "!") {
          tabCharOfPassword[index] = '|'
        }
        if (el === "?") {
          tabCharOfPassword[index] = '%'
        }
        if (el === ".") {
          tabCharOfPassword[index] = '*'
        }
        if (el === ";") {
          tabCharOfPassword[index] = '$'
        }
        if (el === ",") {
          tabCharOfPassword[index] = '&'
        }
        if (el === "-") {
          tabCharOfPassword[index] = '~'
        }
        if (el === "_") {
          tabCharOfPassword[index] = '-'
        }
        if (el === ":") {
          tabCharOfPassword[index] = '#'
        }
        if (el === '"') {
          tabCharOfPassword[index] = '^'
        }
      });
      let finalStringWithPunctuation = tabCharOfPassword.join('');
      setEncryptionShow(!encryptionShow);
      setPassword("");
      setStep("");
      setEnryption(finalStringWithPunctuation)
     });
  }
//FUNKCJA DESZYFRUJĄCA
const handleDecrypt = () => {
  let stringArray = password.split('');
  stringArray.forEach(function(letter) {
    let alphabet = alphabetBig;
    if (letter === letter.toLowerCase()) {
        alphabet = alphabetSmall;
      }
    if (letter.match(/[A-Z1234567890ĄĆĘŁŃÓŚŹŻa-ząćęłńóśźż]/)) {
      let letterInitialPosition = alphabet.indexOf(letter);
      let letterPosition = parseInt(letterInitialPosition) - parseInt(step);
    if (letterPosition > lettersCount - 1) {
      let letterFinalPosition = letterPosition - lettersCount;
        finalString += alphabet.charAt(letterFinalPosition);
      } else {
          finalString += alphabet.charAt(letterPosition);
          }
      } else {
          finalString += letter;
      }
      let tabCharOfPassword = finalString.split('');
      tabCharOfPassword.forEach((el, index) => {
        if (el === "|") {
          tabCharOfPassword[index] = '!'
        }
        if (el === "%") {
          tabCharOfPassword[index] = '?'
        }
        if (el === "*") {
          tabCharOfPassword[index] = '.'
        }
        if (el === "$") {
          tabCharOfPassword[index] = ';'
        }
        if (el === "&") {
          tabCharOfPassword[index] = ','
        }
        if (el === "~") {
          tabCharOfPassword[index] = '-'
        }
        if (el === "-") {
          tabCharOfPassword[index] = '_'
        }
        if (el === "#") {
          tabCharOfPassword[index] = ':'
        }
        if (el === '^') {
          tabCharOfPassword[index] = '"'
        }
      });
      let finalStringWithPunctuation = tabCharOfPassword.join('');
      setDecryptionShow(!decryptionShow);
      setPassword("");
      setStep("");
      setDecryption(finalStringWithPunctuation)
     });
  }
 return (
    <section className="App">
      <div className='container'>
        <h1>Szyfr Cezara</h1>
        <div className='container-cypher'>
          <Header
            password={password}
            onChangePassword={e => setPassword(e.target.value)}
            step={step}
            onChangeStep={e => setStep(e.target.value)}
            handleEncrypt={handleEncrypt}
            handleDecrypt={handleDecrypt}
            titleBtnEncryption="Szyfruj!"
            titleBtnDecryption="Odszyfruj!"
           />
          { encryptionShow && <Encryption
                                encryption={encryption}
                                title="Reset"
                                setEncryptionShow={setEncryptionShow}
                               />
          }
          { decryptionShow && <Decryption
                                decryption={decryption}
                                title="Reset"
                                setDecryptionShow={setDecryptionShow}
                              />
          }
        </div>
      </div>
    </section>
  );
}

export default App;
