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
          <a className='mt-6 mb-6 p-5 text-white hover:text-black uppercase decoration-solid'>home</a>
          <a className='mt-6 mb-6 p-5 text-white hover:text-black uppercase decoration-solid'>about</a>
          <a className='mt-6 mb-6 p-5 text-white hover:text-black uppercase decoration-solid'>contact</a>
          <a className='mt-6 mb-6 p-5 text-white hover:text-black uppercase font decoration-solid'>blogs</a>
        </nav>
      </header>
    </div>
    <div>
      <main>
        <div>
          <h2>Hi there...</h2>
          <h2>I am Your Full Stack Developer</h2>
          <h3><p>I design and develope multiple large application for top giant companies and 
          i am very happy to say you are our next happy client guaranteed !
          </p></h3>
        </div>
        <div>
          <img src='https://media.istockphoto.com/id/1438133166/photo/confident-mature-business-man-with-arms-crossed-looking-at-camera-smiling-standing-in-modern.jpg?s=612x612&w=0&k=20&c=a-SfGhlYEqjA9rTg3HELBdnjShXh5HN2ANAStur7xyo='></img>
        </div>

          <div>
            <img src='https://img.freepik.com/premium-vector/stunning-embossed-yellow-coding-icon_462839-5599.jpg?size=626&ext=jpg' ></img>
            <img src='https://img.freepik.com/premium-vector/stunning-embossed-yellow-coding-icon_462839-5599.jpg?size=626&ext=jpg' ></img>
            <img src='https://img.freepik.com/premium-vector/stunning-embossed-yellow-coding-icon_462839-5599.jpg?size=626&ext=jpg' ></img>
            <img src='https://img.freepik.com/premium-vector/stunning-embossed-yellow-coding-icon_462839-5599.jpg?size=626&ext=jpg' ></img>
            <img src='https://img.freepik.com/premium-vector/stunning-embossed-yellow-coding-icon_462839-5599.jpg?size=626&ext=jpg' ></img>
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
