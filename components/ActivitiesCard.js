import React, {useState} from 'react';
import Image from 'next/image';

export default function ActivitiesCard({
  source,
  price,
  day,
  country,
  name,
  timeout,
  timein,
  duration,
  date,
}) {
  const [isRemoved, setIsRemoved] = useState(false)
  return (
    <div
      style={{
        borderRadius: '5px',
        backgroundColor: '#F6F6F6',
        border: '1px solid #F6F6F6',
      }}
      className={`overflow-x-auto p-2 flex items-center justify-between mb-6 gap-2 text-xs lg:text-base ${isRemoved && 'hidden'}`}
    >
      <Image src={`${source}`} alt="image" width={40} height={40} />
      <div className='text-sm'>
        <p className="px-2" style={{ color: '#1A1A1A', fontWeight: '500' }}>
          {day}
        </p>

        <p className="px-2" style={{ color: '#4F4F4F', fontWeight: '400' }}>
          {country}
        </p>
      </div>
      <div className="w-24 text-sm" style={{ color: '#1A1A1A', fontWeight: '500' }}>
        <p>{name}</p>
      </div>
      <div className="flex text-center  text-sm">
        <div>
          <p className="px-2" style={{ color: '#1A1A1A', fontWeight: '500' }}>
            {timein}
          </p>
          <p className="px-2" style={{ color: '#4F4F4F', fontWeight: '400' }}>
            AM
          </p>
        </div>
        <div>
          <p className="px-2" style={{ color: '#4F4F4F', fontWeight: '400' }}>
            {duration}
          </p>
          <hr />
          <p className="px-2" style={{ color: '#4F4F4F', fontWeight: '400' }}>
            {date}
          </p>
        </div>
        <div>
          <p className="px-2" style={{ color: '#1A1A1A', fontWeight: '500' }}>
            {timeout}
          </p>
          <p className="px-2" style={{ color: '#4F4F4F', fontWeight: '400' }}>
            PM
          </p>
        </div>
      </div>
      <p style={{ color: '#1A1A1A', fontWeight: '600' }} className='lg:text-lg sm:text-xs'>
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
        <p style={{ color: '#3A53AD' }} className="text-xs hover:underline hover:cursor-pointer">
          Activities details
        </p>
      </div>
      <p onClick={() =>setIsRemoved(true)} className={`self-start text-lg text-red-600 hover:cursor-pointer`}>&times;</p>
    </div>
  );
}
