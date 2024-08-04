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
    <div className="mockup-phone border-neutral mt-3">
      <div className="camera"></div>
      <div className="display">
      <div className="artboard artboard-demo phone-1">

      <img src="https://static.jojowiki.com/images/thumb/a/ad/latest/20201010224115/JotaroWStarPlatinum.png/400px-JotaroWStarPlatinum.png" alt="" className='w-24 rounded' />

      {/* Form */}
      <div className="App mt-10">
        <header className="App-header">        
        <h1 className='text-3xl font-semibold mt-5'> Cek Kodam Kamu</h1> 
        {/* {randomItem && <p className="mt-3">Kodam kamu: {randomItem}</p>} */}

        <input
          type="text"
          placeholder="Masukan Nama kamu"
          className="input input-bordered w-full max-w-xs mt-10"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        /><br />

        <input
          type="text"
          placeholder="Hasil"
          className="input input-bordered w-full max-w-xs mt-5"
          value={randomItem}
        readOnly
        /><br />

        
       
        <Button className="btn btn-primary mt-3" onClick={picker}>Submit</Button>&nbsp;&nbsp;
        <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Info</button>
    
      

      {/* Modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Khodam adalah istilah bahasa Arab yang berarti pembantu atau abdi. Istilah ini kemudian diserap dalam bahasa Indonesia menjadi khadam atau khadim yang artinya pelayan atau orang gajian.</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      </header>
    </div>
      


      </div>
      </div>
    </div>
  </center>
    
     );
}
 
export default Home;