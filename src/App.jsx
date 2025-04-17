import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from "./components/hero";
import Projects from './components/projects';
import Skills from './components/Skills';


function App() {  
  return (
    <>
     <div className='bg-black text-white'>
      <Hero />
      <Projects />
      <Skills />
     </div>
    </>
  );
}

export default App
