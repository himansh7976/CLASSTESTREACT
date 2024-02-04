import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Headings from './components/Headings/Headings'
import Search from './components/searchbar/Search'
import Cards from './components/Cards/Cards'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import data from './utils/data';
import Img from './components/Imges/Img';

import data2 from './utils/data2';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Headings title="Authentic Indian Recipes For The Modern Kitchen" />
      <Search />
      <Cards data={data.slice(0, 3)} />
      <Headings title="Making Food great again and again" />

      <Cards data={data.slice(3, 6)} />
      <Headings title=" Traditional Indian Foods That Will Change Your Life Forever" />

      <Img data2={data2.slice(0, 1)} />
      <Cards data={data.slice(0, 2)} />
      <Headings title="yooyoyoo" />
      <Img data2={data2.slice(1, 3)} />
      <Headings title='hhhb' />
      <Circle  data2={data2.slice(0,3)}/>


    </>
  )
}

export default App
