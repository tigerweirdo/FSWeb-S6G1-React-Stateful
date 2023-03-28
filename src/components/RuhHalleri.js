
import React,{useState} from 'react'; /* ADIM 0 */

const ilkRuhHali = 'Nasıl hissettiğimi bilmiyorum :-|';
const mutluRuhHali = 'Oldukça mutlu :)';
const uzgunRuhHali = 'Oldukça üzgün :(';

export default function RuhHalleri() {
  /* ADIM 1 */
	const [ruhHali,setRuhHali] = useState(ilkRuhHali);
	
  const mutluEt = () => {
    /* ADIM 4 */
    setRuhHali(mutluRuhHali);
  };
  const uZ = () => {
    /* ADIM 5 */
    setRuhHali(uzgunRuhHali);
  };
  const reset = () => {
    /* ADIM 6 */
    setRuhHali(ilkRuhHali);
  };

  const stil = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: ruhHali == mutluRuhHali? 'royalblue': "crimson" /* ADIM 2 */
  };


  return (
    <div className='widget-moods container'>
      <h2>RuhHalleri</h2>
	<div id='ruhHali' style={stil}>{ruhHali}</div> 
      <div>
        <button id='mutluEt' onClick={mutluEt}>Mutlu Et</button>
        <button id='uz' onClick={uZ}>Üz</button>
        <button id='resetRuhHali' onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
