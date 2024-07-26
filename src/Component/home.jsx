import React, { useState } from 'react';
import { Button } from 'react-daisyui';

const Home = () => {
    
    const kodam = ['macan putih', 'sanca bogor', 'elang botak', 'Penyu Madura','tidak punya', 'ular.py','kerang saus padang', 'teri pasar ciledug', 'lelelawar', 'pindang patin', 'hiu gawr gura'];
    const [inputName, setInputName] = useState('');
    const [randomItem, setRandomItem] = useState('');


    const hashString = (str) => {
      let hash = 0;
      for (let i = 0; i <str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0;
      }
      return hash;
    }



    const picker = () => {
        const hashValue = hashString(inputName);
        const randomIndex = Math.abs(hashValue) % kodam.length;
        setRandomItem(kodam[randomIndex]);
    }


    return ( 

    <center>
      <div className="App mt-10">
        <header className="App-header">
        <h1 className='text-3xl font-semibold'> Cek Kodam Kamu</h1> 
        <input
          type="text"
          placeholder="Masukan Nama kamu"
          className="input input-bordered w-full max-w-xs mt-10"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        /><br />
        <Button className="btn btn-primary mt-3" onClick={picker}>Submit</Button>
        {randomItem && <p className="mt-3">Kodam kamu: {randomItem}</p>}
        </header>
      </div>
      </center>
     );
}
 
export default Home;