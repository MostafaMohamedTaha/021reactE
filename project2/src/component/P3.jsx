// import React, { Component } from 'react'
// import P3I from '../utilities/P3I'
// import P3H from '../utilities/P3H'
// import D3 from '../utilities/D3'
// export class P3 extends Component {
//   constructor(){
//     super()
//     this.state={d3:D3}
//     this.handleClick=this.handleClick.bind(this)
//     this.show=this.show.bind(this)
//   }
//   handleClick(){
//     // this.api=this.state.d3.map(el=>{
//     //   return(
//     //     <P3I
//     //       key={el.id}
//     //       {...el}
//     //     />
//     //   )
//     // })
//   }
//   show(){
//     return(
//       this.state.d3.map(el=>{
//         return(
//           <P3I
//             key={el.id}
//             {...el}
//           />
//         )
//       })
//     )
//   }
//     render() {
//     // let third = D3.map(el => {
//     //   return (
//     //     <P3I
//     //       key={el.id}
//     //       {...el}
//     //     />
//     //   )
//     // })
//     // let api=this.state.d3.map(el=>{
//     //   return(
//     //     <P3I
//     //       key={el.id}
//     //       {...el}
//     //     />
//     //   )
//     // })
//     return (
//       <div>
//         <P3H />
//         <div className="flex justify-center m-t-10">
//           {this.show()}
//         </div>
//       </div>
//     )
//   }
// }

// export default P3

import P3H from '../utilities/P3H'
import P3I from '../utilities/P3I'
import React from 'react'

// import D3 from '../utilities/D3'

const P3 = () => {
  return (
    <div>
      <P3H />
      <P3I />
    </div>
  )
}

export default P3