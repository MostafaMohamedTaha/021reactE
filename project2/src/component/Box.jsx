import BoxData from '../utilities/BoxData'
import BoxItem from '../utilities/BoxItem'
import React from 'react'

const Box = () => {
    const [box, setBox] = React.useState(BoxData)
    function toggle(idProp) {
        // console.log(idProp)
        setBox (
            el=>{
                return el.map(square=>{
                    return square.id===idProp?{...square,on:!square.on}:square
                })
            }
        //     el=>{
        //     const newEl=[]
        //     for (let index = 0; index < el.length; index++) {
        //         const currentEl=el[index]
        //         if (currentEl.id===idProp) {
        //             const updateEl={
        //                 ...currentEl,
        //                 on:!currentEl.on
        //             }
        //             newEl.push(updateEl)
        //         }else{
        //             newEl.push(currentEl)
        //         }
        //     }
        //     return newEl
        // }
        )
    }
    const boxElement = box.map(el => (
        <BoxItem 
        className='flex flex-row flex-wrap' 
        onProp={el.on}
        key={el.id}
        idProp={el.id}
        toggleProp={toggle} />
    ))
    // box.on?darkMode=true?darkMode=false
    return (
        <div>
            <div className='flex flex-wrap'>
                {boxElement}
            </div>
        </div>
    )
}

export default Box