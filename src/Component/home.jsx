import React, { useState } from 'react';
import { Button } from 'react-daisyui';

const Home = () => {
    
    const kodam = ['macan putih', 'sanca bogor', 'elang botak', 'Hiu Madura'];
    const [randomItem, setRandomItem] = useState('');

    const picker = () => {
        const randomIndex = Math.floor(Math.random() * kodam.length);
        setRandomItem(kodam[randomIndex]);
    }
    return ( 

      <div className="App">
        <header className="App-header">
        <h1> Cek Kodam Kamu</h1> 
        <input type="text" placeholder="Masukan Nama kamu" className="input input-bordered w-full max-w-xs mt-2" /><br />
        <Button className="btn btn-primary mt-3" onClick={picker}>Submit</Button>
        {randomItem && <p className="mt-3">Kodam kamu adalah: {randomItem}</p>}
        </header>
      </div>
     );
}
 
export default Home;