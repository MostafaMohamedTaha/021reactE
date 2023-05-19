import './App.css'

import React from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Note from './component/Note'
import Window from './component/Window'
import P3 from './component/P3'
import Api1 from './component/Api1'
import Auth from './component/Auth'
// import Show from './component/Show'
import Form from './component/Form'
import Joke from './component/Joke'
import Box from './component/Box'
// import Test from './component/test'
import P1 from './component/P1'
import P2 from './component/P2'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Link to='/note'>Note</Link>
      <Link to='/window'>Window</Link>
      <Link to='/p3'>P3</Link>
      <Link to='/api1'>Api1</Link>
      <Link to='/auth'>Auth</Link>
      <Link to='/form'>Form</Link>
      <Link to='/joke'>Joke</Link>
      <Link to='/box'>Box</Link>
      <Link to='/p1'>P1</Link>
      <Link to='/p2'>P2</Link>
      <Routes>
        <Route path='/note' element ={<Note />} />
        <Route path='/window' element ={<Window />} />
        <Route path='/p3' element ={<P3 />} />
        <Route path='/api1' element ={<Api1 />} />
        <Route path='/auth' element ={<Auth />} />
        <Route path='/form' element ={<Form />} />
        <Route path='/joke' element ={<Joke />} />
        <Route path='/box' element ={<Box />} />
        <Route path='/p1' element ={<P1 />} />
        <Route path='/p2' element ={<P2 />} />
      </Routes>
        {/* <P1 /> */}
        {/* <P2 /> */}
        {/* <Test /> */}
        {/* <Box/> */}
        {/* <Joke /> */}
        {/* <Show /> */}
        {/* <Form /> */}
      {/* <Auth /> */}
        {/* <Api1 /> */}
        {/* <P3 /> */}
      {/* <Window /> */}
      </BrowserRouter>
      {/* <Note /> */}
    </div>
  )
}

export default App
