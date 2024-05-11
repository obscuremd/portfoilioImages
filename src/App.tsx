import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Images } from './Images'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';


function App() {

  return (
    <>
      <div>
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>portfolio gallery</h1>

     {/* data */}
    
      <div>
        {Images.map(image=><LazyLoadImage key={image} loading='lazy' effect='blur' src={image} className='image' alt="pp" />)}
            
      </div>


    </>
  )
}

export default App
