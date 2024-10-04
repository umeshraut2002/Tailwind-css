import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='fixed top-0 bottom-0 left-0 right-0 w-full h-full mt-0 mb-0 '>
      <header className='flex flex-col'>
        <nav className='fixed top-0 bottom-0 left-0 right-0 w-full h-12 p-3 m-4 bg-orange-700 rounded-lg'>
          <a className='p-5 mt-6 mb-6 text-white uppercase hover:text-black decoration-solid'>home</a>
          <a className='p-5 mt-6 mb-6 text-white uppercase hover:text-black decoration-solid'>about</a>
          <a className='p-5 mt-6 mb-6 text-white uppercase hover:text-black decoration-solid'>contact</a>
          <a className='p-5 mt-6 mb-6 text-white uppercase hover:text-black font decoration-solid'>blogs</a>
        </nav>
      </header>
    </div>
    <div>
      <main className='flex flex-col items-center w-full h-full'>
        <div className='p-10 m-10'>
          <h2 className='italic font-bold capitalize'>Hi there...</h2>
          <h2 className='italic font-bold capitalize'>I am Your Full Stack Developer</h2>
          <h3 className='italic font-bold capitalize'><p>I design and develope multiple large application for top giant companies and 
          i am very happy to say you are our next happy client guaranteed !
          </p></h3>
        </div>
        <div>
          <img className='m-5 rounded-xl size-100' src='https://media.istockphoto.com/id/1438133166/photo/confident-mature-business-man-with-arms-crossed-looking-at-camera-smiling-standing-in-modern.jpg?s=612x612&w=0&k=20&c=a-SfGhlYEqjA9rTg3HELBdnjShXh5HN2ANAStur7xyo='></img>
        </div>

          <div className='item-center'>
            <img className='m-5 border-2 rounded-xl size-80 ' src='https://img.freepik.com/premium-vector/stunning-embossed-yellow-coding-icon_462839-5599.jpg?size=626&ext=jpg' ></img>
            <img className='m-5 border-2 rounded-xl size-80 ' src='https://img.freepik.com/premium-vector/stunning-embossed-yellow-coding-icon_462839-5599.jpg?size=626&ext=jpg' ></img>
            <img className='m-5 border-2 rounded-xl size-80 ' src='https://img.freepik.com/premium-vector/stunning-embossed-yellow-coding-icon_462839-5599.jpg?size=626&ext=jpg' ></img>
            <img className='m-5 border-2 rounded-xl size-80 ' src='https://img.freepik.com/premium-vector/stunning-embossed-yellow-coding-icon_462839-5599.jpg?size=626&ext=jpg' ></img>
            <img className='m-5 border-2 rounded-xl size-80 ' src='https://img.freepik.com/premium-vector/stunning-embossed-yellow-coding-icon_462839-5599.jpg?size=626&ext=jpg' ></img>
          </div>
          
          <div>
            <p>HI there is this your fronten and backend developer as well as and one of the thing is to say a system and ui ux designer as i shown my grasping in above blogs you lookout first before gave me a project or choosing me your on of the developer its danger some times LoL i am jus kidding 😂😂</p>
          </div>
      </main>

      <footer>All rights reserved &copy; xyz.com </footer>
    </div>
    </>
  )
}

export default App
