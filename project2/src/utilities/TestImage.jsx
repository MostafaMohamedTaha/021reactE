import React from 'react'

const TestImage = ({fName,isFav,handleClick}) => {
    const favImage=isFav===true?'http://picsum.photos/20':'http://picsum.photos/40'
    return (
        <div>
            {/* <img src="http://picsum.photos/400" alt={fName} className='rounded-[50%] border-2 border-black' /> */}
            <img src={favImage} alt={fName} className='border-2 border-black rounded-[50%] w-1/12' onClick={handleClick} />
            {/* <div>{isFav}</div>
            <div>{fName}</div>
            <div>{lName}</div>
            <div>{age}</div>
            <div>{address}</div>
            <div>{email}</div> */}
        </div>
    )
}

export default TestImage