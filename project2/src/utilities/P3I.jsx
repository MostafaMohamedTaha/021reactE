// import React, { Component } from 'react'
// export class P3I extends Component {
//   constructor() {
//     super()
//     this.state = { id: 1, name: 'mo', address: 'cairo', country: 'egypt', phone: '000-00000-0000', img: 'http://picsum.photos/40' }
//   }
//   render() {
//     return (
//       <div>

//         <div className='flex flex-center'>
//           <input type="text" className='p-2 mr-5 rounded-xl  border-2 mt-10 hover:border-purple-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none active:border-lime-400 ' placeholder='Top Meme' />
//           <input type="text" className='p-2 mr-5 rounded-xl  border-2 mt-10 hover:border-purple-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none active:border-lime-400'
//             placeholder='Bottom Meme' />
//         </div>
//         <div className="flex justify-center">
//           <button onClick={this.handleClick} className='bg-purple-600 text-slate-100 p-3 mx-5  rounded-xl m-3'>Get A New Meme Image</button>
//         </div>
//         <div>
//           <div className='flex flex-col text-3xl bg-orange-300 rounded-2xl p-3 m-2 justify-center text-center'><img src={this.state.img} alt={this.state.name} className='rounded-xl' /></div>
//           <div className='flex flex-col text-3xl bg-orange-300 rounded-2xl p-3 m-2'>{this.state.name} no</div>
//           <div className='flex flex-col text-3xl bg-orange-300 rounded-2xl p-3 m-2'>{this.state.id} no</div>
//         </div>
//       </div>
//     )
//   }
// }

// export default P3I

// import D3 from '../utilities/D3'

import React from 'react'

const P3I = () => {
  // function handleClick(){
  //   console.log('hi')
  // }
  // const [addImage,setAddImage]=React.useState('')
  // let image
  // function getImage(){
  //   let arrImage=D3.data.meme
  //   let random=Math.floor(Math.random()*arrImage.length)
  //   let image=arrImage[random].img
  //   setAddImage(image)
  // }
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://picsum.photos/2500/1667',
  })
  const [allMemeImage, setAllMemeImage] = React.useState([])
  React.useEffect(()=>{
    async function getMeme() {
      const res=await fetch('https://dog.ceo/api/breeds/image/random')
      const data=await res.json()
      setAllMemeImage(data.message)
    }
    getMeme()
    
    // .then(res=>res.json())
    // .then(data=>setAllMemeImage(data.message))
    
    // .then(data=>console.log(data.message))
    // console.log(setAllMemeImage.message)
    // .then(data=>setAllMemeImage(data.entries.category))
    // setAllMemeImage(data.entries.category)
  },[])
  function getImage() {
    // const memeArr = allMemeImage.data.meme
    // const random = Math.floor(Math.random() * allMemeImage.length)
    // console.log(allMemeImage)
    // console.log(randomCategory)
    const randomCategory = allMemeImage
    setMeme(el => { return { ...el, randomImage: randomCategory } })
  }
  function handleChange(event) {
    const { name, value } = event.target
    setMeme(el => {
      return {
        ...el, [name]: value
      }
    })
  }
  return (
    <div>
      <div className='flex flex-center justify-center'>
        <input type="text" className='p-2 mr-5 rounded-xl  border-2 mt-10 hover:border-purple-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none active:border-lime-400 ' placeholder='Top Meme' name='topText' value={meme.topText} onChange={handleChange} />
        <input type="text" className='p-2 mr-5 rounded-xl  border-2 mt-10 hover:border-purple-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none active:border-lime-400' placeholder='Bottom Meme' name='bottomText' value={meme.bottomText} onChange={handleChange}
        />
      </div>
      <div className="flex flex-col justify-center m-10">
        <button onClick={getImage} className='bg-purple-600 text-slate-100 p-3 mx-5  rounded-xl m-3'>Get A New Meme Image</button>

      </div>
      <div className='relative container flex justify-center text-center mx-auto'>
        <img src={meme.randomImage} alt={meme.randomImage} className='m-8 rounded-3xl absolute flex' />
        {/* <div>{meme.randomImage}</div> */}
        <h2 className='text-5xl text-teal-100 absolute display-block text-center my-[100px] uppercase drop-shadow-[0_3px_3px_rgba(0,0,0,0.8)] font-outline-2'>{meme.topText}</h2>
        <h2 className='text-5xl text-teal-100 absolute display-block text-center my-[600px] my-[200px] lg:my-[500px] md:my-[500px] sm:my-[400px] uppercase drop-shadow-[0_3px_3px_rgba(0,0,0,0.8)] font-outline-2'>{meme.bottomText}</h2>
      </div>
    </div>
  )
}

export default P3I