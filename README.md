# Cek Kodam Kamu

This is a simple React application that picks a random item from an array when a user clicks the "Submit" button. 

## Features

* Input field for entering your name.
* Button to pick a random item from an array.
* Display the randomly picked item.


## Installation

1. Clone the repository:
```
git clone https://github.com/yourusername/cek-kodam-kamu.git
cd cek-kodam-kamu
```

2. Install dependencies::
```
npm install
```

3. Start the development server:::
```
npm start
```
The application will open in your default web browser.


## Usage

1. Open the application in your web browser.
2. Enter your name in the input field.
3. Click the "Submit" button to pick a random item from the array.
4. The randomly picked item will be displayed below the button.

## Code Overview

src/Home.jsx

This is the main component of the application. It includes the following key parts:

* State Management: Uses the useState hook to manage the state for the random item.
* Array of Items: The items array contains the list of items to pick from.
* Pick Random Item Function: The pickRandomItem function picks a random item from the array and updates the state.
* JSX Structure: The JSX structure includes an input field, a button, and a paragraph to display the random item.

```
import React, { useState } from 'react';
import { Button } from 'react-daisyui';

const Home = () => {
    
    const kodam = ['macan putih', 'sanca bogor', 'elang botak', 'Hiu Madura','tidak punya', 'ular.py','kerang saus padang', 'teri pasar ciledug'];
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
```

## Dependencies

* React
* react-daisyui
* Tailwind CSS