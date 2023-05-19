import React from 'react'

const Api1 = () => {
    const[data,setData]=React.useState({})
    const[count,setCount]=React.useState(0)
    React.useEffect(()=>{
        console.log('hi')
        fetch('https://catfact.ninja/fact').then(res=>res.json()).then(data=>setData(data))
    },[count])
  return (
    <div className='text-center'>
      {JSON.stringify(data,null,2)}
      <h1>{count}</h1>
      <button onClick={()=>setCount(el=>el+1)}>add</button>
    </div>
  )
}

export default Api1
