import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Images } from './Images'


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
        {Images.map(image=><img src={image} className='image' alt="" />)}
            
      </div>


    </>
  )
}

export default App
