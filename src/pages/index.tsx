import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { trpc } from "../utils/trpc";
import Footer from "../components/Footer";
import RestaurantTitle from "../components/restaurantTitle";

// NOTE: use Baskerville for course menu and drink menu

const courseMenu = {
  first: "",
  firstDescription: "",
  second: "",
  secondDescription: "",
  third: "",
  thirdDescription: "",
}

const drinkMenu = {
  coffee: ["espresso", "americano", "cappuccino", "flat white", "latte"],
  tea: ["jasmine green tea / tea latte", "lemon ginger tea / tea latte"],
  cocktail: "",
  mocktail: ""
}
const collections = [
  {
    name: 'Handcrafted Collection',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg',
    imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
    description: 'Keep your phone, keys, and wallet together, so you can lose everything at once.',
  },
  {
    name: 'Organized Desk Collection',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg',
    imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
    description: 'The rest of the house will still be a mess, but your desk will look great.',
  },
  {
    name: 'Focus Collection',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg',
    imageAlt: 'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
    description: 'Be more productive than enterprise project managers with a single piece of paper.',
  },
]

function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}

const Home: NextPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
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
                      {/* Logo (lg-) */}
                      <div className="flex flex-1 items-center justify-end">
                        <Link
                          href="/eventHistory"
                          className="hidden font-sans text-lg text-white md:block"
                        >
                          Event History
                        </Link>
                        <div className="flex items-center md:ml-8">
                          <Link
                            href=""
                            className="hidden font-sans text-lg text-white md:block"
                          >
                            Chef's Personal Website
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

          <div className="relative mx-auto flex max-w-5xl flex-col items-center py-32 px-6 text-center sm:py-64 lg:px-0">
            <h1 className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
              Welcome to the {RestaurantTitle()}.
            </h1>
            <p className="mt-4 text-xl text-white">
              Please take a look at the course menu and drink menu below.
              <br></br>
              <br></br>
              If you would like a drink or have any dietary restrictions, please{" "}
              <br></br>
              submit a response below so I know about it in advance.
            </p>
          </div>
        </div>
        <main>
          {/* Category section */}
          <section
            aria-labelledby="category-heading"
            className="pt-6 sm:pt-6 xl:mx-auto xl:max-w-7xl xl:px-8"
          >
            <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
              <h2
                id="category-heading"
                className="text-4xl font-bold tracking-tight text-gray-900"
              >
                Course Menu...
                <p className="text-lg">
                  ...based on{" "}
                  <a
                    className="italic text-blue-500"
                    href="https://texasfarmersmarket.org/in-season/"
                  >
                    What's In Season.
                  </a>
                </p>
              </h2>
            </div>
            <div className="relative overflow-hidden bg-white py-4">
              <div className="relative px-8 sm:px-8 lg:px-10">
                <div className="max-w-prose font-Baskervville text-lg">
                  <h1>
                    <span className="block text-left text-2xl font-bold leading-6 tracking-tight text-gray-900 sm:text-2xl">
                      First Course
                    </span>
                  </h1>
                  <p className="text-left text-lg leading-6">Dish Name</p>
                  <p className="text-left text-base leading-6">
                    Ingredients + Description
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section
            aria-labelledby="category-heading"
            className="pt-2 sm:pt-2 xl:mx-auto xl:max-w-7xl xl:px-8"
          >
            <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
              <h2
                id="category-heading"
                className="text-4xl font-bold tracking-tight text-gray-900"
              >
                Drink Menu
              </h2>
            </div>
            <div className="relative overflow-hidden bg-white py-4">
              <div className="relative px-8 sm:px-8 lg:px-10">
                <div className="max-w-prose font-Baskervville text-lg">
                  <h1>
                    <span className="block text-left text-2xl font-bold leading-6 tracking-tight text-gray-900 sm:text-2xl">
                      Coffee + Tea
                    </span>
                  </h1>
                  <p className="text-left text-lg leading-6">Drink</p>
                  <p className="text-left text-base leading-6">
                    Ingredients + Description if applicable
                  </p>
                </div>
                <div className="mt-2 max-w-prose font-Baskervville text-lg">
                  <h1>
                    <span className="block text-left text-2xl font-bold leading-6 tracking-tight text-gray-900 sm:text-2xl">
                      Cocktail + Mocktail
                    </span>
                  </h1>
                  <p className="text-left text-lg leading-6">Drink</p>
                  <p className="text-left text-base leading-6">
                    Ingredients + Description if applicable
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="pt-6 sm:pt-6 xl:mx-auto xl:max-w-7xl xl:px-8">
            <div className="relative">
              <h2 className="text-3xl px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0 font-bold tracking-tight text-gray-900 sm:text-3xl">
                Drink / Dietary Restriction Request
              </h2>
            </div>
            <div className="relative pt-2 px-8 sm:px-8 lg:px-10">
              <p className="block text-left text-lg leading-6 ">
                Please submit a drink request at least an hour in advance, and
                submit a dietary restriction request at least 2 days in advance.
              </p>
            </div>
            <div className="mt-2 px-8 sm:px-8 lg:px-10">
              <form
                action="#"
                method="POST"
                className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 sm:gap-x-8"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-base font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="block w-full rounded-md border-gray-300 py-2 px-4 shadow-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-base font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md border-gray-300 py-2 px-4 shadow-sm"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 lg:max-w-xl mb-6">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Home;
