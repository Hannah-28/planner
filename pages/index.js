import React, { useState } from 'react';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Card from '@/components/Card';
import FlightCard from '@/components/FlightCard';
import Add from '@/components/Add';
import HotelCard from '@/components/HotelCard';
import ActivitiesCard from '@/components/ActivitiesCard';

export default function PlannerScreen() {
  const [add, setAdd] = useState('');
  return (
    <Layout>
      <main style={{ margin: '0 0.3em' }}>
        <h1
          style={{
            color: '#5A5A5A',
            textAlign: 'center',
            fontSize: '1.5em',
            fontWeight: '700',
          }}
        >
          My Trip{' '}
          <span style={{ color: '#0D6EFD', fontWeight: '500' }}>
            <i>Planner</i>
            <div
              style={{
                display: 'grid',
                justifyContent: 'center',
                marginLeft: '8em',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="73"
                height="26"
                viewBox="0 0 73 26"
                fill="none"
              >
                <g filter="url(#filter0_d_1_1089)">
                  <path
                    d="M6 16C6 12.4353 10.6231 10.496 13.6111 9.5C20.8595 7.08389 27.9886 4.75067 35.5556 3.77778C46.1456 2.41621 56.3275 2 67 2"
                    stroke="#0D6EFD"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1_1089"
                    x="0.5"
                    y="0.5"
                    width="72"
                    height="25"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_1089"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_1089"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="13"
                viewBox="0 0 42 13"
                fill="none"
              >
                <path
                  d="M2 11C2 8.70842 4.87995 7.46172 6.74135 6.82143C11.2567 5.26821 15.6978 3.76829 20.4117 3.14286C27.0087 2.26756 33.3516 2 40 2"
                  stroke="#0D6EFD"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </span>
        </h1>
        <div className="grid justify-around lg:grid-cols-4 sm:grid-cols-2 items-center px-2 space-y-4">
          <div
            className="flex justify-center align-center space-x-2 py-1 px-3 w-fit"
            style={{
              backgroundColor: '#F6F6F6',
              borderRadius: '5px',
              color: '#8B8B8B',
              fontWeight: '500',
            }}
          >
            <p>My Vacation Plan - Spring </p>
            <Image src="/Vector.svg" alt="Edit" width={8} height={8} />
          </div>
          <div className="lg:self-center text-white flex lg:justify-center justify-self-end">
            <div className="w-2 h-2 rounded-full bg-slate-300 green self-center"></div>
            <div className="self-center white -space-x-2">
              <span
                className="mx-1 rounded-full px-2 py-1 text-xs"
                style={{ backgroundColor: '#0D6EFD' }}
              >
                O
              </span>
              <span
                className="mx-1 rounded-full px-2 py-1 text-xs"
                style={{ backgroundColor: '#E4BA23' }}
              >
                A
              </span>
              <span
                className="mx-1 rounded-full px-2 py-1 text-xs"
                style={{ backgroundColor: '#FF7394' }}
              >
                SU
              </span>
              <span
                className="mx-1 rounded-full px-2 py-1 text-xs"
                style={{ backgroundColor: '#AF4DFD' }}
              >
                AS
              </span>
              <span
                className="mx-1 rounded-full px-2 py-1 text-xs"
                style={{ backgroundColor: '#9E9E9E' }}
              >
                +10
              </span>
            </div>
          </div>
          <p className="text-xs lg:justify-self-center">
            Okorie Emmanuel and 13 Others are Active
          </p>
          <div
            className="save flex justify-self-end justify-center align-center space-x-2 py-1 px-3 w-fit"
            style={{
              backgroundColor: '#DAEAFF',
              borderRadius: '5px',
              color: '#8B8B8B',
              fontWeight: '500',
            }}
          >
            <Image src="/Save alt.svg" alt="Save" width={12} height={12} />
            <p className="text-sm">Save</p>
            <Image src="/Vector 26.svg" alt="Arrow" width={12} height={12} />
          </div>
        </div>
        <div
          style={{ backgroundColor: '#F1F7FF', borderRadius: '5px' }}
          className="mx-2 mt-10 py-5"
        >
          <div
            className="flex justify-center text-center"
            style={{ color: '#828282' }}
          >
            <p style={{ borderBottom: '1px solid #BDBDBD' }} className="px-3">
              One-way
            </p>
            <p
              style={{ color: '#3A53AD', borderBottom: '2px solid #3A53AD' }}
              className="px-3"
            >
              Round trip
            </p>
            <p style={{ borderBottom: '1px solid #BDBDBD' }} className="px-3">
              Multi city
            </p>
          </div>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-2 justify-around px-2 my-5">
            <Card title="From" header="Lagos, Nigeria" />
            <Card title="To" header="Calgary, Canada" />
            <Card title="Depart" header="30/09/2023" />
            <Card title="Return" header="05/10/2023" />
            <Card title="Travellers" header="1 Adult" />
          </div>
          <div className="text-center">
            <button
              style={{
                backgroundColor: '#0D6EFD',
                color: '#FFF',
                borderRadius: '6px',
              }}
              className="py-2 px-6 button hover:scale-95"
            >
              Save
            </button>
          </div>
        </div>
        <h1
          style={{ color: '#8B8B8B', fontSize: '1.3em', fontWeight: '600' }}
          className="text-center mt-4 mb-2"
        >
          Trip itinerary
        </h1>
        <div
          style={{ border: '1px solid #D3D3D3', borderRadius: '5px' }}
          className="pt-5 px-3 mx-2 w-auto"
        >
          <div>
            <h2
              style={{ color: '#0D6EFD', fontWeight: '600' }}
              className="ml-2 py-3"
            >
              Flight
            </h2>
            <FlightCard
              source="/Logo.svg"
              price="8,481"
              name="Azerbaijan Airlines"
              type="Economy"
              duration="1h 35m"
              time="11:40 4 Sep - 04:30 30 Sep"
              stops="2"
              stop1="DOH"
              stop2="SEA"
              area1="GYD"
              area2="SJS"
              img="/arrow.svg"
              label="AI-984 AI-518"
            />
            <FlightCard
              source="/Logo.svg"
              price="8,481"
              name="Azerbaijan Airlines"
              type="Economy"
              duration="1h 35m"
              time="11:40 4 Sep - 04:30 30 Sep"
              stops="2"
              stop1="DOH"
              stop2="SEA"
              area1="GYD"
              area2="SJS"
              img="/arrow.svg"
              label="AI-984 AI-518"
            />
            {add === 'flight' && (
              <FlightCard
                source="/Logo.svg"
                price="8,481"
                name="Azerbaijan Airlines"
                type="Economy"
                duration="1h 35m"
                time="11:40 4 Sep - 04:30 30 Sep"
                stops="2"
                stop1="DOH"
                stop2="SEA"
                area1="GYD"
                area2="SJS"
                img="/arrow.svg"
                label="AI-984 AI-518"
              />
            )}
            <Add
              source="/Plus.svg"
              title="Transport"
              part={() => {
                setAdd('flight');
              }}
            />
          </div>
          <div style={{ borderTop: '1px solid #D3D3D3', margin: '2em 0' }}>
            <h2
              style={{ color: '#0D6EFD', fontWeight: '600' }}
              className="ml-2 py-3"
            >
              Hotel
            </h2>
            <HotelCard
              source="/Hotel.svg"
              price="8,481"
              name="BURUJ HOTEL"
              country="Dubai, UAE"
              datein="30, Sep, 2023"
              dateout="05, Oct, 2023"
            />
            {add === 'hotel' && (
              <HotelCard
                source="/Hotel.svg"
                price="8,481"
                name="BURUJ HOTEL"
                country="Dubai, UAE"
                datein="30, Sep, 2023"
                dateout="05, Oct, 2023"
              />
            )}
            <Add
              source="/Plus.svg"
              title="Hotel"
              part={() => {
                setAdd('hotel');
              }}
            />
          </div>

          <div style={{ borderTop: '1px solid #D3D3D3', margin: '2em 0' }}>
            <h2
              style={{ color: '#0D6EFD', fontWeight: '600' }}
              className="ml-2 py-3"
            >
              Activities
            </h2>
            <ActivitiesCard
              source="/image 228.svg"
              price="8,481"
              day="Day 1"
              country="Dubai, UAE"
              name="Lake Louise & Banff & Moraine Lake Tour from Calgary or Banff"
              duration="1h 35m"
              timein="11:00"
              timeout="12:35"
              date="30, Sep, 2023"
            />

            <ActivitiesCard
              source="/image 229.svg"
              price="8,481"
              day="Day 2"
              country="Dubai, UAE"
              name="Huwaei BIG DATA Training"
              duration="1h 35m"
              timein="11:00"
              timeout="12:35"
              date="30, Sep, 2023"
            />

            <ActivitiesCard
              source="/image 228.svg"
              price="8,481"
              day="Day 3"
              country="Dubai, UAE"
              name="Hour Bike Ride Through 
              Beautiful Calgary and the
              Bow River"
              duration="1h 35m"
              timein="11:00"
              timeout="12:35"
              date="30, Sep, 2023"
            />
            <ActivitiesCard
              source="/image 228.svg"
              price="8,481"
              day="Day 4"
              country="Dubai, UAE"
              name="Lake Louise & Banff & Moraine 
              Lake Tour from Calgary or Banff"
              duration="1h 35m"
              timein="11:00"
              timeout="12:35"
              date="30, Sep, 2023"
            />
            <ActivitiesCard
              source="/image 228.svg"
              price="8,481"
              day="Day 5"
              country="Dubai, UAE"
              name="Attending Microsoft 
              Azure Event"
              duration="1h 35m"
              timein="11:00"
              timeout="12:35"
              date="30, Sep, 2023"
            />
          </div>
        </div>

        <div className="w-auto flex grid grid-cols-1 lg:grid-cols-2 mx-2 gap-2 mt-8 text-xs lg:text-base">
          <div className="col-span-1">
            <div className="card hover:border-gray-200 hover:border-2 hover:scale-95">
              <p>
                This is the trip plan for my annual leave. I will appreciate it
                if my request is approved. I await your swift response.
              </p>
              <br />
              <br />
              <p>Thanks!</p>
              <div className="flex float-right items-center space-x-2">
                <Image src="/edit.svg" alt="Edit" width={8} height={8} />
                <p style={{ color: '#0D6EFD' }} className="self-center">
                  Edit
                </p>
              </div>
            </div>
            <div className="flex space-x-4 mt-3">
              <div className="">
                <button
                  style={{
                    color: '#8b8b8b',
                    borderRadius: '5px',
                  }}
                  className="lg:px-4 py-1 px-2 text-xs lg:text-base bg-blue-100 button hover:scale-105 flex space-x-2 items-center"
                >
                  <Image src="/rust.svg" alt="icon" width={15} height={15} />
                  <p>Invite Pal</p>
                </button>
              </div>
              <div>
                <button
                  style={{
                    color: '#8b8b8b',
                    borderRadius: '5px',
                  }}
                  className="lg:px-4 py-1 px-2 text-xs button hover:scale-105 lg:text-base bg-blue-100 flex space-x-2 items-center"
                >
                  <Image src="/share.svg" alt="icon" width={10} height={10} />
                  <p>Share Trip</p>
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="card hover:border-gray-200 hover:border-2 hover:scale-95">
              <div className="w-full grid grid-cols-2 space-between items-center">
                <p style={{ color: '#474747', fontWeight: '500' }}>Flight</p>
                <p
                  className="justify-self-end px-2 py-1 text-xs lg:text-sm"
                  style={{
                    color: '#0D6EFD',
                    fontWeight: '500',
                    backgroundColor: '#EAF3FF',
                    borderRadius: '18px',
                  }}
                >
                  NGN 100,000
                </p>
              </div>
              <div className="w-full grid grid-cols-2 space-between items-center mt-3">
                <p style={{ color: '#474747', fontWeight: '500' }}>Hotel</p>
                <p
                  className="justify-self-end px-2 py-1 text-xs lg:text-sm"
                  style={{
                    color: '#0D6EFD',
                    fontWeight: '500',
                    backgroundColor: '#EAF3FF',
                    borderRadius: '18px',
                  }}
                >
                  NGN 100,000
                </p>
              </div>
              <div className="w-full grid grid-cols-2 space-between items-center mt-3">
                <p style={{ color: '#474747', fontWeight: '500' }}>
                  Activities
                </p>
                <p
                  className="justify-self-end px-2 py-1 text-xs lg:text-sm"
                  style={{
                    color: '#0D6EFD',
                    fontWeight: '500',
                    backgroundColor: '#EAF3FF',
                    borderRadius: '18px',
                  }}
                >
                  NGN 100,000
                </p>
              </div>
              <div className="w-full grid grid-cols-2 space-between items-center mt-6">
                <p style={{ color: '#2D2D2D', fontWeight: '600' }}>Total</p>
                <p
                  className="justify-self-end px-2 py-1 text-sm"
                  style={{ color: '#0D6EFD', fontWeight: '700' }}
                >
                  NGN 1,000,000
                </p>
              </div>
            </div>
            <div className="flex space-x-4 mt-3">
              <div>
                <button
                  style={{
                    backgroundColor: '#FFF',
                    color: '#0D6EFD',
                    borderRadius: '5px',
                    border: '1px solid #0D6EFD',
                  }}
                  className="lg:px-4 py-1 px-2 text-xs lg:text-base button hover:scale-105"
                >
                  Split Pay
                </button>
              </div>
              <div>
                <button
                  style={{
                    backgroundColor: '#0D6EFD',
                    color: '#FFF',
                    borderRadius: '5px',
                  }}
                  className="lg:px-4 py-1 px-2 text-xs lg:text-base button hover:scale-105"
                >
                  Pay All
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card my-14 mx-2">
          <div className="flex space-x-4 items-center justify-center">
            <span
              className="mx-1 rounded-full p-1"
              style={{
                backgroundColor: '#9B5EFF',
                color: '#FFF',
                fontSize: '0.7em',
              }}
            >
              OE
            </span>

            <input
              type="text"
              placeholder="Comment..."
              className="w-full rounded-full pl-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-600 font-normal focus:opacity-50"
              name="name"
              id="name"
              required
              autoComplete="off"
              style={{ backgroundColor: '#F5F5F5', color: '#717171' }}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}
