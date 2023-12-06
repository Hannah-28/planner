import React from 'react'

export default function Card({title, header}) {
  return (
    <div style={{borderRadius: '5px', backgroundColor: '#FFF'}} className='p-3 w-full text-sm round hover:scale-105 transition-all ease-in-out delay-150'>
      <p style={{color: '#828282'}}>{title}</p>
      <p style={{color: '#0D6EFD'}}>{header}</p>
    </div>

  )
}
