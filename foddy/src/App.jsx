import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Headings from './components/Headings/Headings'
import Search from './components/searchbar/Search'
import Cards from './components/Cards/Cards'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import data from './utils/data';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Headings title="Authentic Indian Recipes For The Modern Kitchen" />
    <Search/> 
    <Cards data={data.slice(0,3)}/>
    <Headings title="Making Food great again and again"/>   

    <Cards data={data.slice(3,6)}/>
    </>
  )
}

export default App
