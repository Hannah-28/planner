import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function index() {
  return (
    <div>
      <menu className="flex flex-wrap text-xs md:text-sm w-full justify-around items-center top-0 fixed py-2 bg-red-100">
        <div>
          <Image
            src="/home/GOPADDI LOGO MARINE BLUE_ 1.svg"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
        <div className="flex space-x-3 items-center">
          <Link href="/" style={{ color: '#0D6EFD' }}>
            Home
          </Link>
          <Link href="/" className="flex items-center">
            Solutions
            <Image
              src="/home/ep_arrow-up-bold.svg"
              alt="logo"
              width={10}
              height={10}
              className="ml-2"
            />
          </Link>
          <Link href="/" className="flex items-center">
            Products
            <Image
              src="/home/ep_arrow-up-bold.svg"
              alt="logo"
              width={10}
              height={10}
              className="ml-2"
            />
          </Link>
          <Link href="/" className="flex items-center">
            Company
            <Image
              src="/home/ep_arrow-up-bold.svg"
              alt="logo"
              width={10}
              height={10}
              className="ml-2"
            />
          </Link>
        </div>
        <p className="px-6 rounded-2xl border flex items-center justify-center text-xs">
          Emmanuel
        </p>
      </menu>

      <div className="grid grid-cols-2 mt-24 px-12">
        <div className="grid items-center justify-center">
          <div>
            <h1
              style={{ color: '#0D6EFD', fontSize: '1.5em', fontWeight: '700' }}
            >
              GoFamily
            </h1>
            <h2
              style={{ color: '#383737', fontSize: '1.2em', fontWeight: '600' }}
            >
              Go Global with GoFamily
            </h2>
            <p style={{ color: '#5E5E5E', fontSize: '1em', fontWeight: '500' }}>
              Lorem ipsum dolor sit amet. Qui veniam enim ut voluptatem facilis
              eum iusto eligendi eum magnam voluptas et perspiciatis sequi qui
              molestiae nostrum
            </p>
            <button
              style={{ backgroundColor: '#0D6EFD', color: '#FFF' }}
              className="px-4 rounded-md w-fit flex items-center justify-center py-1 my-6"
            >
              Sign up
            </button>
          </div>
        </div>
        <div className="grid">
          <Image
            src="/home/Ellipse 470.svg"
            alt="icon1"
            width={100}
            height={100}
          />
          <div className="help w-fit px-1 py-1 justify-self-center ml-40 z-50">
            <div className="help w-fit px-1 py-1">
              <div className="help w-fit px-1 py-1">
                <Image
                  src="/home/Rectangle 1326.svg"
                  alt="icon1"
                  width={150}
                  height={100}
                />
                <div className="flex space-x-3 z-50">
                  <Image
                    src="/home/pin (1) 2.svg"
                    alt="icon1"
                    width={10}
                    height={10}
                  />
                  <div className="text-xs">
                    <p style={{ fontWeight: '500', fontSize: '0.8em' }}>
                      Six Flags Water Park{' '}
                    </p>
                    <p style={{ fontWeight: '400', fontSize: '0.8em' }}>
                      Miami, Florida.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-fit px-1 py-1 justify-self-center z-0 -mt-10 mr-24">
            <Image
              src="/home/Ellipse 467.svg"
              alt="icon1"
              width={200}
              height={200}
            />
          </div>
          <div className="w-fit px-1 py-1 justify-self-center z-0">
            <Image
              src="/home/Ellipse 503.svg"
              alt="icon1"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
