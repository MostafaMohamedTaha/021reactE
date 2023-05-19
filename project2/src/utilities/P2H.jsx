import React, { Component } from 'react'

export class P2H extends Component {
  render() {
    return (
      <div>
        <div className="p-3 flex flex-initial bg-slate-600 text-white">
            <img src="http://picsum.photos/50" alt="react" className='rounded-2xl'/>
            <h1 className=' p-3'>React Project</h1>
            <ul className='list-none flex justify-center mx-auto'>
                <li className='p-3'>Profile</li>
                <li className='p-3'>About</li>
                <li className='p-3'>Contact</li>
            </ul>
        </div>
      </div>
    )
  }
}

export default P2H