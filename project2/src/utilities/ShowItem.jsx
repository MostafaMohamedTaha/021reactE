import React from 'react'

const ShowItem = ({id,line}) => {
    const[show,setShow]=React.useState(false)
    function toggle() {
        setShow(el=>!el)
    }
  return (
    <div>
        {show&&id}
        {show&&line}
        <button onClick={toggle}>{show?'hide':'show'} text</button>
    </div>
  )
}

export default ShowItem