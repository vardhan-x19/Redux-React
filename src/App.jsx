import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Display from './Comp/Display';
import Header from './Comp/header';
import Controls from './Comp/Controls';
import Privacy from './Comp/Privacy';
import { useSelector } from 'react-redux';
function App() {
  const check= useSelector(store=>store.privacy);
  return (
      <div>
        <div class="px-4 py-5 my-5 text-center">
          <Header></Header>
          { !check ? <Display/> : <Privacy/>}
          <Controls></Controls>
        </div>
      </div>

  )
}

export default App
