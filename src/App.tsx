import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import car1 from './assets/car game/car card-1.png' 
import car2 from './assets/car game/car card.png' 
import car3 from './assets/car game/gallery-1.png' 
import car4 from './assets/car game/gallery.png' 

import shopify1 from './assets/shopify/gallary-1.png' 
import shopify2 from './assets/shopify/gallary.png' 
import shopify3 from './assets/shopify/shopify card.png' 
import shopify4 from './assets/shopify/shopify long.png' 

function App() {

  const [car, setCar] = useState(false)
  const [shopify, setShopify] = useState(false)

  return (
    <>
      <div>
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>portfolio gallery</h1>

     {/* car game */}
      <div>
        <button onClick={()=>setCar(!car)}>Car Game</button>
        {car &&  
          <div>
            <img src={car1} className='image' alt="" />
            <img src={car2} className='image' alt="" />
            <img src={car3} className='image' alt="" />
            <img src={car4} className='image' alt="" />
          </div>
          }
      </div>

     {/* car game */}
      <div>
        <button onClick={()=>setShopify(!shopify)}>shopify</button>
        {shopify &&  
          <div>
            <img src={shopify1} className='image' alt="" />
            <img src={shopify2} className='image' alt="" />
            <img src={shopify3} className='image' alt="" />
            <img src={shopify4} className='image' alt="" />
          </div>
          }
      </div>

    </>
  )
}

export default App
