import React from 'react';
import Image from 'next/image';

export default function FlightCard({
  source,
  price,
  name,
  type,
  duration,
  time,
  stops,
  stop1,
  stop2,
  area1,
  area2,
  img,
  label
}) {
  return (
    <div
      style={{
        borderRadius: '5px',
        backgroundColor: '#F6F6F6',
        border: '1px solid #F6F6F6',
      }}
      className="overflow-x-auto text-xs lg:text-base p-2 flex items-center justify-between mb-6 gap-2"
    >
      <Image src={`${source}`} alt="image" width={40} height={40} />
      <div className="flex text-center text-sm">
        <div>
          <p className="px-2" style={{ color: '#1A1A1A', fontWeight: '500' }}>
            {name}
          </p>
          <hr />
          <p className="px-2" style={{ color: '#4F4F4F', fontWeight: '400' }}>
            {type}
          </p>
        </div>
        <div>
          <p className="px-2" style={{ color: '#1A1A1A', fontWeight: '500' }}>
            {duration}
          </p>
          <hr />
          <p className="px-2" style={{ color: '#4F4F4F', fontWeight: '400' }}>
            {time}
          </p>
        </div>
        <div>
          <p className="px-2" style={{ color: '#1A1A1A', fontWeight: '500' }}>
            {stops} stops
          </p>
          <hr />
          <p className="px-2" style={{ color: '#4F4F4F', fontWeight: '400' }}>
            {stop1} , {stop2}
          </p>
        </div>
        <div>
          <p
            className="px-2 flex"
            
            style={{ color: '#1A1A1A', fontWeight: '500' }}
          >
            {area1} <Image src={`${img}`} alt="image" width={10} height={10} />{' '}
            {area2}
          </p>

          <hr />
          <p className="px-2" style={{ color: '#4F4F4F', fontWeight: '400' }}>
            {label}
          </p>
        </div>
      </div>
      <p style={{ color: '#1A1A1A', fontWeight: '600'}} className='lg:text-lg sm:text-xs'>
        NGN{price}
      </p>
      <div className='text-center'>
        <button
          style={{
            backgroundColor: '#3A53AD',
            color: '#FFF',
            borderRadius: '5px',
          }}
          className="lg:px-4 py-1 px-2 text-xs lg:text-base button hover:scale-105"
        >
          Change
        </button>
        <p style={{ color: '#3A53AD' }} className="text-xs  hover:underline hover:cursor-pointer">
          Flight details
        </p>
      </div>
    </div>
  );
}
