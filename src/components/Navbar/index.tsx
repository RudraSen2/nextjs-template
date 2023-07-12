import React from "react";
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from 'next/router';
// import ColorModeToggle from '@src/components/ColorModeToggle';
import { DocSearch } from '@docsearch/react';
import '@docsearch/css';
export default function Navbar() {
    const router = useRouter();
    const act = "block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white";
    const inact = "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700";
    return (
        <>
            <header>
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <Link href="/" className="flex items-center">
                            <Image src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" width="35" height="36" alt="Tech Fiddle Logo" />
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Tech Fiddle</span>
                        </Link>
                        <div className="flex items-center lg:order-2">
                            <DocSearch
                                appId="7LEIQ4QK6M"
                                apiKey="d0a38351663330eccb11548d292f41bd"
                                indexName="complabs"
                            />
                            {/* <ColorModeToggle /> */}
                            <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <Link href="/docs" className={`${router.pathname === '/docs' ? act : inact}`} aria-current="page">Docs</Link>
                                </li>
                                <li>
                                    <Link href="/blog" className={`${router.pathname === '/blog' ? act : inact}`}>Blog</Link>
                                </li>
                                <li>
                                    <Link href="/apps" className={`${router.pathname === '/apps' ? act : inact}`}>Apps</Link>
                                </li>
                                <li>
                                    <Link href="/products" className={`${router.pathname === '/products' ? act : inact}`}>Products</Link>
                                </li>
                                <li>
                                    <Link href="/contact" className={`${router.pathname === '/contact' ? act : inact}`}>Contact</Link>
                                </li>
                                <li>
                                    <Link href="/legal" className={`${router.pathname === '/legal' ? act : inact}`}>Legal</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            {/* <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight">My Website</span>
                </div>
                <div className="block lg:hidden">
                    <button
                        className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
                        onClick={() => console.log('Clicked!')}
                    >
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 5h20v2H0V8zm0 5h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <Link href="/">
                            <p className={`block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 ${router.pathname === '/' ? 'text-gray-900' : 'text-gray-900'}`}>Home</p>
                        </Link>
                        <Link href="/about">
                            <p className={`block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 ${router.pathname === '/about' ? 'text-gray-900' : 'text-gray-900'}`}>About</p>
                        </Link>
                        <Link href="/contact">
                            <p className={`block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white ${router.pathname === '/contact' ? 'text-gray-900' : 'text-gray-900'}`}>Contact</p>
                        </Link>
                    </div>
                </div>
            </nav> */}
        </>
    );
};