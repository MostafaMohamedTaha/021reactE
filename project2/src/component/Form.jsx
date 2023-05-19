import React from 'react'

const Form = () => {
    // const[fName,setFName]=React.useState('')
    // console.log(fName)
    // function handleChange(event) {
    //     setFName(event.target.value)
    // }
    const[formData,setFormData]=React.useState({firstName:'',lastName:'',email:'',comment:'',checked:true,employment:'',favColor:''})
    function handleChange(event) {
        const {name,value,type,checked} =event.target
        setFormData(el=>{return{
            // ...el,[event.target.name]:event.target.value
            ...el,[name]:type==='checkbox'?checked:value
        }})
    }
    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
    }
    return(
    <div>
        <form className='flex flex-col justify-center text-center container bg-teal-800 text-teal-100' onSubmit={handleSubmit}>
            <input  type="text"
                    placeholder='first name'
                    onChange={handleChange}
                    name='firstName'
                    value={formData.firstName}
                    className='mx-auto m-2 text-white p-2 placeholder-gray-400 hover:bg-teal-100 focus:bg-teal-800 bg-teal-600 rounded-xl'
            />
            <input  type="text"
                    placeholder='last name'
                    onChange={handleChange}
                    name='lastName'
                    value={formData.lastName}
                    className='mx-auto m-2 text-white p-2 placeholder-gray-400 hover:bg-teal-100 focus:bg-teal-800 bg-teal-600 rounded-xl'
            />
            <input  type="text"
                    placeholder='email'
                    onChange={handleChange}
                    name='email'
                    value={formData.email}
                    className='mx-auto m-2 text-white p-2 placeholder-gray-400 hover:bg-teal-100 focus:bg-teal-800 bg-teal-600 rounded-xl'
            />
            <textarea  type="text"
                    placeholder='comment'
                    onChange={handleChange}
                    name='comment'
                    value={formData.comment}
                    className='mx-auto m-2 text-white p-2 placeholder-gray-400 hover:bg-teal-100 focus:bg-teal-800 bg-teal-600 rounded-xl'
            />
            <input  type="checkbox"
                    placeholder='comment'
                    onChange={handleChange}
                    name='checked'
                    value={formData.checked}
                    id='isFriendly'
                    className='m-auto m-7 p-2 placeholder-gray-400 hover:bg-teal-100 focus:bg-teal-100'
            />
            <label htmlFor="isFriendly">are you friendly play</label>
            <fieldset>
                <legend>Current Position</legend>
                <input  type="radio"
                    onChange={handleChange}
                    name='employment'
                    value='unemployed'
                    id='unemployed'
                    checked={formData.employment==='unemployed'}
            />
            <label htmlFor="unemployed" className='m-auto m-7 p-2 placeholder-gray-400 hover:bg-teal-100 focus:bg-teal-100'>Unemployed</label>
                <input  type="radio"
                    onChange={handleChange}
                    name='employment'
                    value='employed'
                    id='employed'
                    checked={formData.employment==='employed'}
            />
            <label htmlFor="employed" className='m-auto m-7 p-2 placeholder-gray-400 hover:bg-teal-100 focus:bg-teal-100'>employed</label>
                <input  type="radio"
                    onChange={handleChange}
                    name='employment'
                    value='freeLancer'
                    id='freeLancer'
                    checked={formData.employment==='freeLancer'}
            />
            <label htmlFor="freeLancer" className='m-auto m-7 p-2 placeholder-gray-400 hover:bg-teal-100 focus:bg-teal-100'>freeLancer</label>
            </fieldset>
            <select name="favColor" id="favColor" onChange={handleChange} value={formData.favColor} className='flex justify-center text-center bg-teal-800 text-teal-100'>
                <option className='m-auto m-7 p-2 placeholder-gray-400 hover:bg-teal-100 focus:bg-teal-100 text-center' value="">--Choose--</option>
                <option className='m-auto m-7 p-2 placeholder-gray-400 hover:bg-teal-100 focus:bg-teal-100 text-center' value="red">red</option>
                <option className='m-auto m-7 p-2 placeholder-gray-400 hover:bg-teal-100 focus:bg-teal-100 text-center' value="green">green</option>
                <option className='m-auto m-7 p-2 placeholder-gray-400 hover:bg-teal-100 focus:bg-teal-100 text-center' value="blue">blue</option>
                <option className='m-auto m-7 p-2 placeholder-gray-400 hover:bg-teal-100 focus:bg-teal-100 text-center' value="purple">purple</option>
                <option className='m-auto m-7 p-2 placeholder-gray-400 hover:bg-teal-100 focus:bg-teal-100 text-center' value="teal">teal</option>
                <option className='m-auto m-7 p-2 placeholder-gray-400 hover:bg-teal-100 focus:bg-teal-100 text-center' value="yellow">yellow</option>
            </select>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form