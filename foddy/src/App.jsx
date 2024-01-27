import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Headings from './components/Headings/Headings'
import Search from './components/searchbar/Search'
import Cards from './components/Cards/Cards'

import './App.css'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Headings/>
    <Search/> 
    <Cards/>
  

     
    </>
  )
}

export default App
