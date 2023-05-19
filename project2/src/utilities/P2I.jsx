import React, { Component } from 'react'

export class P2I extends Component {
  render() {
    return (
      <div className='inline-flex m-auto justify-center'>
        <div className='card border border-spacing-1 rounded-2xl flex flex-col text-center p-2 m-4 relative'>
            {this.props.openSpot===0&&<div className="absolute p-2 m-3 rounded-xl bg-slate-500 text-slate-100">SOLD OUT</div>}
            <img src={this.props.img} alt={this.props.name} className='rounded-2xl' />
            <p className='text-3xl uppercase text-teal-600'>{this.props.id}</p>
            <p className='text-xl uppercase text-teal-900'>{this.props.star} {this.props.name}({this.props.rate}) </p>
            <p className='text-3xl uppercase text-teal-500'>{this.props.age}</p>
            <p className='text-3xl uppercase text-teal-700'>{this.props.address}</p>
            <p className=' uppercase text-teal-800'>{this.props.phone}</p>
        </div>
      </div>
    )
  }
}

export default P2I