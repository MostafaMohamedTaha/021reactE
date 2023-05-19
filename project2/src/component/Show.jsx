import React from 'react'
import ShowData from '../utilities/ShowData'
import ShowItem from '../utilities/ShowItem'

const Show = () => {
    const mapData=ShowData.map(el=>(
        <ShowItem 
            {...el}
        />
    ))
    
  return (
    <div>
        {mapData}
    </div>
  )
}

export default Show