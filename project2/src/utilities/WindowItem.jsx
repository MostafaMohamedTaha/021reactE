import React from 'react'

const WindowItem = () => {
    const [windowWid,setWindowWid]=React.useState(window.innerWidth)
    React.useEffect(()=>{
        function watchWidth() {
            setWindowWid(window.innerWidth)
        }
        window.addEventListener('resize',<watchWidth />)
        return function () {
            window.removeEventListener('resize',<watchWidth />)
        }
    },[])
  return (
    <div>
      <div>
        Window Width : {windowWid}
      </div>
    </div>
  )
}

export default WindowItem
