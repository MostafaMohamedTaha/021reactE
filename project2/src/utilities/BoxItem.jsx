import React from 'react'

const BoxItem = ({onProp,toggleProp,idProp}) => {
  // const[on,setOn]=React.useState(on1)
  const style={
    backgroundColor:onProp?'#222':'#ccc'
}
// function toggle() {
//   setOn(el=>!el)
// }
  return (
    <div>
        <div className='flex flex-wrap '>
            <div style={style} className=' w-[100px] h-[100px] border-2 p-5 m-3 rounded-xl' onClick={()=>toggleProp(idProp)}></div>
        </div>
    </div>
  )
}

export default BoxItem