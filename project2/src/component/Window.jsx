import React from 'react'
import WindowItem from '../utilities/WindowItem'

const Window = () => {
    const[show,setShow]=React.useState(true)
    function toggle() {
        setShow(el=>!el)
    }
  return (
    <div>
      <button onClick={toggle}>toggle show width</button>
      {show&&<WindowItem />}
    </div>
  )
}

export default Window
