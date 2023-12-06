import React, {useState} from 'react';
import Image from 'next/image';


export default function Add({ title, source, part }) {
  return (
    <div
      style={{
        borderRadius: '5px',
        border: '1px dashed #8F8F8F',
        textAlign: 'center',
        display: 'grid',
        justifyItems: 'center',
      }}
      className="py-2 w-full"
    >
      <Image
        onClick={part}
        src={`${source}`}
        alt="image"
        width={40}
        height={40}
        className="hover:cursor-pointer"
      />
      <p style={{ color: '#9B9B9B', fontWeight: '400' }}>Add {title}</p>
    </div>
  );
}
