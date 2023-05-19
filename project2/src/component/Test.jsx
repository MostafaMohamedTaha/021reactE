import React from 'react'
import TestImage from '../utilities/TestImage'

// import TestCount from '../utilities/TestCount'


const Test = () => {

  // const a=['f','s','mohamed','toto','mo']
  // const b=a.map(el=><p key={el}>{el} </p>)
  // function add(){
  //   let str=`thing ${a.length+1}`
  //   a.push(str)
  //   console.log(a)
  // }

  // const [things,setThings]=React.useState(['Thing 1','Thing 2'])
  // const add=()=>{
  //   const d=`Thing ${things.length+1}`
  //   setThings(el=>[...el,d])
  // }
  // const element=things.map(thing=><p key={thing}>{thing}</p>)
  // const res=React.useState('hello')
  // console.log(res)
  // const [imp,setImp]=React.useState('yes')
  // const handleClick=()=>{
  //   setImp('no')
  // }

  // const [count, setCount] = React.useState(0)
  // const add = () => setCount(count + 1)
  // const sub = () => setCount(count - 1)

  // const [isOn,setIsOn]=React.useState(true)
  // const handleClick=()=>setIsOn(el=>!el)

  const [contact,setContact]=React.useState({
    fName:'mo',
    lName:'ta',
    age:36,
    address:'cairo',
    email:'email@gmail.com',
    isFav:true,
  })
  const fav=()=>{
    setContact(el=>{
      return{...el,isFav:!el.isFav}
    })
  }
  const {fName,lName,age,address,email,isFav}=contact
  // const favImage=isFav===true?'http://picsum.photos/20':'http://picsum.photos/21'
  return (
    <div>
      <div className='flex justify-center'>
        <div className='border-2 border-black flex flex-col justify-center text-center rounded-xl p-3 m-3 w-4/12 bg-neutral-800 text-teal-100'>
          <img src="http://picsum.photos/400" alt={fName} className='rounded-[50%] border-2 border-black' />
          
          <TestImage handleClick={fav} isFav={isFav} />
          <div>{isFav}</div>
          <div>{fName}</div>
          <div>{lName}</div>
          <div>{age}</div>
          <div>{address}</div>
          <div>{email}</div>
        </div>
      </div>
    </div>
  )
}
{/* <button onClick={sub} className='bg-slate-600 text-slate-100 p-3 mx-5 m-3 text-2xl rounded-xl'>-</button>
  <TestCount count ={count}/>
<button onClick={add} className='bg-slate-600 text-slate-100 p-3 mx-5 m-3 text-2xl rounded-xl'>+</button> */}


{/* <div>
  <div className='border-2 bg-orange-400 text-teal-100 m-4 p-4  border-white' onClick={handleClick}>
    <div >{isOn ? 'yes' : 'no'}</div>
  </div>
</div> */}

{/* <div className='bg-black m-auto text-white text-center text-3xl'>
  <button onClick={handleClick}>Click Me</button>
  <div className='bg-white rounded-3xl text-teal-700'>{imp}</div>
</div> */}
{/* <div>{res[0]}</div> */ }
// /* <div className='bg-black text-center text-teal-100 text-3xl uppercase flex justify-center p-3 m-3'>
// <button onClick={add}>Add Item</button>
// </div>
//   <div className='p-3 m-3 flex justify-center bg-slate-200 gap-2 flex-wrap'>{element}</div> */

export default Test