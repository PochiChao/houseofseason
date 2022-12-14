import Link from "next/link";
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import RestaurantTitle from "./restaurantTitle";


function MobileMenuAndNavBar(props: any) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
      <div>
        {/* Mobile menu */}
        <Transition.Root show={mobileMenuOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileMenuOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-gray-500 pb-12 shadow-xl">
                  <div className="flex px-4 pt-5 pb-2">
                    <button
                      type="button"
                      className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <Link
                    href="/eventHistory"
                    className="py-3 pl-6 pr-3 font-sans text-3xl text-white md:block"
                  >
                    Event History
                  </Link>
                  <Link
                    href="https://personalspotlight.vercel.app/"
                    className="py-3 pl-6 pr-3 font-sans text-3xl text-white md:block lg:text-lg"
                  >
                    Chef&apos;s Personal Website
                  </Link>
                  <Link
                    href="/contactPage"
                    className="py-3 pl-6 pr-3 font-sans text-3xl text-white md:block"
                  >
                    Contact Me
                  </Link>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
        {/* Hero section */}
        <div className="relative">
          {/* Decorative image and overlay */}
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
            <img
              src="/images/LandscapeFallWinter.jpg"
              alt="fancy restaurant background"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gray-900 opacity-50"
          />
          {/* Navigation */}
          <header className="relative z-10">
            <nav aria-label="Top">
              {/* Secondary navigation */}
              <div className="bg-white bg-opacity-10 backdrop-blur-md backdrop-filter">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div>
                    <div className="flex h-16 items-center justify-between">
                      {/* Logo (lg+) */}
                      <Link href="/" className="hidden lg:flex lg:items-center">
                        <div>
                          <span className="sr-only">{RestaurantTitle()}</span>
                          <img
                            className="inline h-8 w-auto"
                            src="/images/logo.png"
                            alt=""
                          />
                          <p className="inline pl-2 font-sans text-xl font-medium text-white">
                            {RestaurantTitle()}
                          </p>
                        </div>
                      </Link>

                      <div className="flex flex-1 items-center md:hidden">
                        <button
                          type="button"
                          className=" text-white "
                          onClick={() => setMobileMenuOpen(true)}
                        >
                          <span className="sr-only">Open menu</span>
                          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                      {/* Logo (lg-) */}
                      <Link href="/" className="lg:hidden">
                        <span className="sr-only">{RestaurantTitle()}</span>
                        <img
                          src="/images/logo.png"
                          alt=""
                          className="inline h-8 w-auto"
                        />
                        <p className="inline pl-2 font-sans text-xl font-medium text-white">
                          {RestaurantTitle()}
                        </p>
                      </Link>
                      <div className="flex flex-1 items-center justify-end">
                        <Link
                          href="/eventHistory"
                          className="hidden font-sans text-lg text-white md:block"
                        >
                          Event History
                        </Link>
                        <div className="flex items-center md:ml-8">
                          <Link
                            href="https://personalspotlight.vercel.app/"
                            className="hidden font-sans text-base text-white md:block lg:text-lg"
                          >
                            Chef&apos;s Personal Website
                          </Link>
                        </div>
                        <div className="flex items-center md:ml-8">
                          <Link
                            href="/contactPage"
                            className="hidden font-sans text-lg text-white md:block"
                          >
                            Contact Me
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          <div className="relative mx-auto flex max-w-xl flex-col items-center py-32 px-6 text-center sm:py-64 md:max-w-5xl lg:px-0">
            <h1 className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
              {props.mainTitle}
            </h1>
            <p className="mt-4 max-w-xl text-xl text-white lg:max-w-2xl">
              {props.secondTitle}
            </p>
            <p className="mt-4 max-w-xl text-xl text-white lg:max-w-2xl">
              {props.thirdTitle}
            </p>
          </div>
        </div>
      </div>
    );
}

export default MobileMenuAndNavBar;