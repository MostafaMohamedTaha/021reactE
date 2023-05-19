import React, { Component } from 'react'
import P2I from '../utilities/P2I'
import P2H from '../utilities/P2H'
import Api from '../utilities/Api'
export class P2 extends Component {
  render() {
    let apiShow=Api.map(el=>{
      return(
        <P2I 
          key={el.id}
          {...el}
          // img={el.img}
          // name={el.name}
          // age={el.age}
          // address={el.address}
          // rate={el.rate}
          // phone={el.phone}
          // star={el.star}
          // openSpot={el.openSpot}
        />
      )
    })
    return (
      <div>
        <P2H />
        <div className='flex justify-center flex-wrap'>
        {apiShow}
        {/* <P2I 
            img='http://picsum.photos/400'
            name='mo'
            age='26'
            address='cairo'
            phone='000-0000-00000'
            star='🌟'
            rate='(7)'
        /> */}
        {/* <P2I 
            img='http://picsum.photos/400'
            name='mo'
            age='26'
            address='cairo'
            phone='000-0000-00000'
            star='🌟'
            rate='(7)'
        />
        <P2I 
            img='http://picsum.photos/400'
            name='mo'
            age='26'
            address='cairo'
            phone='000-0000-00000'
            star='🌟'
            rate='(7)'
        />
        <P2I 
            img='http://picsum.photos/400'
            name='mo'
            age='26'
            address='cairo'
            phone='000-0000-00000'
            star='🌟'
            rate='(7)'
        />
        <P2I 
            img='http://picsum.photos/400'
            name='mo'
            age='26'
            address='cairo'
            phone='000-0000-00000'
            star='🌟'
            rate='(7)'
        /> */}
        
        </div>
      </div>
    )
  }
}

export default P2