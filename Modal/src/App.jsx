import { useRef, useState } from 'react';
import './App.css'

function App() {
  const inputRef = useRef(null);
  const inpuRef = useRef(null);
  const inptRef = useRef(null);


  const [updated, setUpdated] = useState('');
  const [name, setName] = useState('');
  const [state, setState] = useState('');


  const handle = () => {
    setUpdated(inputRef.current.value);
    setName(inpuRef.current.value);
    setState(inptRef.current.value);

  };

  return (
    <div className='App'>
      <div className="login"><h3>Login</h3></div>
      <input
        ref={inputRef}
        type="text"
        id="message"
        name="message"
        className='int1'
        placeholder='Name'
      />

      <input
        ref={inpuRef}
        type="text"
        id="message"
        name="message"
        className='int2'
        placeholder='Lastname'
      />

      <input
        ref={inptRef}
        type="text"
        id="message"
        name="message"
        className='int3'
        placeholder='Telnumber'
      />

      <div className="salam">
      <h2>Ism: {updated}</h2>
      <h2>Familiya: {name}</h2>
      <h2>Tel: {state}</h2>
      </div>


      <button onClick={handle}><p>Send data</p></button>
    </div>
  );
}

export default App