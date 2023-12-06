import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Head from 'next/head';

export default function Layout({children }) {
  return (
    <div className="body">
      <Head>
        <title>
          TRIP PLANNER
        </title>
        <meta name="description" content="Planner Website" />
      </Head>
      {/* side bar */}
      <nav>
        <Link className='nav' href='/'>
          <Image
            src="/pie-chart.svg"
            alt="Dashboard Icon"
            width={15}
            height={15}
          />
          <h1>Dashboard</h1>
        </Link>
        <Link className='nav' href='/'>
          <Image
            src="/graduation-hat.svg"
            alt="Graduation Icon"
            width={15}
            height={15}
          />
          <h1>About Business</h1>
        </Link>
        <Link className='nav' href='/'>
          <Image
            src="/teamwork.svg"
            alt="Profile Icon"
            width={15}
            height={15}
          />
          <h1>Employees</h1>
          <span className="mx-1 rounded-full bg-gray-100 px-2 py-1 text-xs">
            0
          </span>
        </Link>

        <Link className='nav' href='/'>
          <Image src="/history.svg" alt="Planner Icon" width={15} height={15} />
          <h1>Trip Planner</h1>
          <span className="mx-1 rounded-full bg-gray-100 px-2 py-1 text-xs">
            0
          </span>
        </Link>

        <Link className='nav' href='/'>
          <Image
            src="/two-arrows.svg"
            alt="Request Icon"
            width={15}
            height={15}
          />
          <h1>Payment Requests</h1>
          <span className="mx-1 rounded-full bg-gray-100 px-2 py-1 text-xs">
            0
          </span>
        </Link>
        <Link className='nav' href='/'>
          <Image src="/history.svg" alt="History Icon" width={15} height={15} />
          <h1>Transaction History</h1>
          <span className="mx-1 rounded-full bg-gray-100 px-2 py-1 text-xs">
            0
          </span>
        </Link>
        <Link className='nav' href='/'>
          <Image src="/unlink.svg" alt="Unlink Icon" width={15} height={15} />
          <h1>Unlink Requests</h1>
          <span className="mx-1 rounded-full bg-gray-100 px-2 py-1 text-xs">
            0
          </span>
        </Link>
      </nav>
      <div>
        <header>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
          src='/header.svg'
          alt='Header logo'
          style={{width: '100%'}}
          />
        </header>
        {children}
      </div>
    </div>
  );
}
