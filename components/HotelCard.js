import React from 'react';
import Image from 'next/image';

export default function HotelCard({
  source,
  price,
  name,
  country,
  datein,
  dateout,
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
      <div className="flex text-center text-xs">
        <div>
          <p className="px-2" style={{ color: '#1A1A1A', fontWeight: '500' }}>
            {name}
          </p>

          <p className="px-2" style={{ color: '#4F4F4F', fontWeight: '400' }}>
            {country}
          </p>
        </div>
        <div>
          <p className="px-2" style={{ color: '#1A1A1A', fontWeight: '500' }}>
            Check-in
          </p>

          <p className="px-2" style={{ color: '#4F4F4F', fontWeight: '400' }}>
            {datein}
          </p>
        </div>
        <div
          style={{ borderBottom: '1px solid #BDBDBD' }}
          className="w-20 lg:w-32 h-2"
        ></div>
        <div>
          <p className="px-2" style={{ color: '#1A1A1A', fontWeight: '500' }}>
            Check-out
          </p>

          <p className="px-2" style={{ color: '#4F4F4F', fontWeight: '400' }}>
            {dateout}
          </p>
        </div>
      </div>
      <p
        style={{ color: '#1A1A1A', fontWeight: '600' }}
        className="lg:text-lg sm:text-xs"
      >
        NGN{price}
      </p>
      <div className="text-center">
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
        <p
          style={{ color: '#3A53AD' }}
          className="text-xs  hover:underline hover:cursor-pointer"
        >
          Hotel details
        </p>
      </div>
    </div>
  );
}
