import React from 'react'

const JokeItem = ({idProp,textProp,graphProp,toggleProp,showProp}) => {
    const style={
        backgroundColor:showProp?'orange':'black'
    }
  return (
    <div>
        <div className='text-3xl text-teal-100 p-3 m-3 border-2 w-5/12 bg-teal-800 text-center'> {idProp}</div>
        <h1 className='text-3xl text-teal-100 p-3 m-3 border-2 w-5/12 bg-teal-500'>  {textProp}</h1>
        <p className='text-3xl text-teal-100 p-3 m-3 border-2 w-5/12 bg-orange-300 text-center' style={style}>  {graphProp} {graphProp} {graphProp} {graphProp}</p>
        <button className='text-3xl text-teal-100 p-3 m-3 border-2 w-2/12 bg-teal-800 text-center' onClick={toggleProp}>  {graphProp}</button>
    </div>
  )
}

export default JokeItem