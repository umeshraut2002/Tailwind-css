import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='mt-0 mb-0 w-full h-full fixed top-0 bottom-0 left-0 right-0'>
      <header className='flex flex-col'>
        <nav className='p-3 bg-orange-700 h-12 w-full m-4 rounded-lg fixed top-0 left-0 bot\ right-0'>
          <a className='mt-6 mb-6 p-5 text-white hover:text-black'>home</a>
          <a className='p-5 text-white hover:text-black'>about</a>
          <a className='p-5 text-white hover:text-black'>contact</a>
          <a className='p-5 text-white hover:text-black'>blogs</a>
        </nav>
      </header>
    </div>
    </>
  )
}

export default App
