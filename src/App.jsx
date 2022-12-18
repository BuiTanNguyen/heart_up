import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const[positionX, setPositionX] = useState()
   const[positionY, setPositionY] = useState()

   
   window.addEventListener('mousemove',(e)=>{
    const windowPlace = document.querySelector('.App')
    const x = e.offsetX
    const y = e.offsetY
    const span = document.createElement('span')
    const size = Math.random() * 100
    span.style.top = y + 'px'
    span.style.left = x + 'px'
    span.style.width = 50 + size +'px'
    span.style.height = 50 + size + 'px'
    windowPlace.appendChild(span)
    console.log(size);
    setTimeout(() => {
      span.remove()
    }, 2000);
  })



  return (
    <div className="App">
    </div>
  );
}

export default App;
