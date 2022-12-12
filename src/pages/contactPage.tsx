import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  QuestionMarkCircleIcon,
  XMarkIcon,

} from '@heroicons/react/24/outline'
import { trpc } from "../utils/trpc";
import Footer from "../components/Footer";
import RestaurantTitle from "../components/restaurantTitle";

const Home: NextPage = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
    return (
      <>
        <Head>
          <title>{RestaurantTitle()}</title>
        </Head>
        <div className="bg-white">
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
                  <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
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
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          {/* Hero section */}
          <div className="relative bg-gray-900">
            {/* Decorative image and overlay */}
            <div
              aria-hidden="true"
              className="absolute inset-0 overflow-hidden"
            >
              <img
                src="images/LandscapeFallWinter.jpg"
                alt=""
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
                  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div>
                      <div className="flex h-16 items-center justify-between">
                        {/* Logo (lg+) */}
                        <div className="lg:flex lg:flex-1 lg:items-center ">
                          <a href="/">
                            <span className="sr-only">{RestaurantTitle()}</span>
                            <img
                              className="inline h-8 w-auto"
                              src="/images/logo.png"
                              alt=""
                            />
                            <p className="inline pl-2 font-sans text-xl font-medium text-white">
                              {RestaurantTitle()}
                            </p>
                          </a>
                        </div>
                        <div className="flex flex-1 items-center justify-end">
                          <Link
                            href="/eventHistory"
                            className="hidden font-sans text-lg text-white lg:block"
                          >
                            Event History
                          </Link>

                          <div className="flex items-center lg:ml-8">
                            {/* Help */}
                            <a href="#" className="p-2 text-white lg:hidden">
                              <span className="sr-only">Help</span>
                              <QuestionMarkCircleIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </a>
                            <Link
                              href="/contactPage"
                              className="hidden font-sans text-lg text-white lg:block"
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

            <div className="relative mx-auto flex max-w-3xl flex-col items-center py-32 px-6 text-center sm:py-64 lg:px-0">
              <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
                Contact Me!
              </h1>
              <p className="mt-4 text-xl text-white">
                See below for ways to contact me.
              </p>
            </div>
          </div>
          <main>
            {/* Category section */}
            <section
              aria-labelledby="category-heading"
              className="pt-6 sm:pt-6 xl:mx-auto xl:max-w-7xl xl:px-8"
            >
              {/* <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
                <h2
                  id="category-heading"
                  className="text-2xl font-bold tracking-tight text-gray-900"
                >
                  Social Media
                </h2>
              </div> */}
              <div className="py-2">
                <a
                  className="inline-block h-10 w-10"
                  href="https://www.instagram.com/pochichao/"
                >
                  <img
                    className="inline-block h-10 w-10"
                    src="https://cdn-icons-png.flaticon.com/512/4138/4138124.png"
                    alt="Instagram"
                  />
                </a>
                <p className="inline-block pl-2 font-sans text-xl font-medium">
                  Instagram
                </p>
              </div>
              <div className="py-2">
                <a
                  className="inline-block h-10 w-10"
                  href="https://github.com/PochiChao"
                >
                  <img
                    className="inline-block h-10 w-10"
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    alt="Github"
                  />
                </a>
                <p className="inline-block pl-2 font-sans text-xl font-medium">
                  Github
                </p>
              </div>
              <div className="pt-2 pb-6">
                <a
                  className="inline-block h-10 w-10"
                  href="mailto:19pochi94@gmail.com"
                >
                  <img
                    className="inline-block h-10 w-10"
                    src="/images/gmailLogo.webp"
                    alt="Gmail"
                  />
                </a>
                <p className="inline-block pl-2 font-sans text-xl font-medium">
                  Email
                </p>
              </div>
            </section>
          </main>

          <Footer />
        </div>
      </>
    );
  };
  
  export default Home;
  