import React from 'react'
import Admin_headr from './Component/Admin_headr.jsx'
import Admin_liset from './Component/Admin_liset.jsx';
import "./App.css";
import Admin_card from './Component/Admin_card.jsx';

function App() {
  return (
    <div>
      <Admin_headr />
      <Admin_liset />
      <Admin_card />
      {/* <h1 className='text-red-500 text-5xl'>hello, iron coding</h1> */}
    </div>
  );
}

export default App
