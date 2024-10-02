import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-orange-700 text-white mt-0 mb-0 h-full w-screen'>
      <nav className='p-4 m-4'>
          <a className='p-4 decoration-none text-white uppercase hover:text-black'>Home</a>
          <a className='p-4 decoration-none text-white uppercase hover:text-black'>About</a>
          <a className='p-4 decoration-none text-white uppercase hover:text-black'>Contact</a>
        </nav>
      </div>
    </>
  )
}

export default App
