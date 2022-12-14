import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { trpc } from "../utils/trpc";
import Footer from "../components/Footer";
import RestaurantTitle from "../components/restaurantTitle";
import axios from "axios";

const courseMenu = [
  {
    id: "first",
    dishName: "Patatas Bravas",
    description: "roasted potatoes with 3 sauces: spinach dip, aioli, tonnato",
  },
  {
    id: "second",
    dishName: "Unconventional Bibimbap",
    description:
      "rice with fried egg; gochujang tofu; reduced cabbage; pickled cucumbers, carrots",
  },
  {
    id: "third",
    dishName: "Gluten-free Beet Poundcake",
    description: "beets, almonds, powdered sugar, cinnamon, nutmeg",
  },
];

const coffeeMenu = [
  { name: "espresso" },
  { name: "americano" },
  { name: "cappuccino" },
  { name: "flat white" },
  { name: "latte" },
];

const teaMenu = [
  { name: "jasmine green tea / tea latte" },
  { name: "lemon ginger tea / tea latte" },
];

const cocktailMenu = [
  { name: "c: paloma" }, 
  { name: "m: mango mule" }];

function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}

function createCourseMenu(course: {id: string, dishName: string, description: string}){
  return (
    <div className="relative overflow-hidden pt-4">
      <div className="relative px-12 lg:px-16">
        <div className="max-w-prose text-lg">
          <h1>
            <span className="block text-left text-2xl font-bold leading-6 tracking-tight text-gray-900 sm:text-2xl">
              {course.id}
            </span>
          </h1>
          <p className="text-left text-lg leading-6">{course.dishName}</p>
          <p className="text-left text-lg leading-6">{course.description}</p>
        </div>
      </div>
    </div>
  );
}

function createDrinkMenu(drink:{name: string}){
  return (
    <p className="text-left text-lg leading-6">{drink.name}</p>
  );
}

const Home: NextPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [requestText, setRequestText] = useState({
    name: "",
    message: "",
  });
  
  function submitClick(){
    setSubmitClicked(true);
    setTimeout(() => setSubmitClicked(false),2000);

    const url = "https://api.emailjs.com/api/v1.0/email/send";
    const config = {
      service_id: 'service_vvbgyu8',
      template_id: 'template_bsszdnt',
      user_id: 'hBPrKO3PktefWm-h1',
      accessToken: process.env.EMAILJS_API_KEY,
      template_params: {
          'person': requestText.name,
          'message': requestText.message
      }
    }
    axios.post(url, config).then((response) => {
      console.log(response);
    });
  }

  function handleChange(event: { target: { name: any; value: any } }) {
    const {name, value} = event.target;
    setRequestText((prevValue: { name: string; message: string }) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <>
      <Head>
        <title>{RestaurantTitle()}</title>
      </Head>
      <div className="bg-stone-100">
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
                      className="-m-2 flex items-center justify-center rounded-md p-2 text-gray-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                        <Link
                          href="/eventHistory"
                          className="font-sans py-3 pl-6 pr-3 text-3xl text-white md:block"
                        >
                          Event History
                        </Link>
                        <div className="flex items-center md:ml-8">
                          <Link
                            href=""
                            className="font-sans py-3 pl-6 pr-3 text-3xl text-white md:block lg:text-lg"
                          >
                            Chef&apos;s Personal Website
                          </Link>
                        </div>
                        <div className="flex items-center md:ml-8">
                          <Link
                            href="/contactPage"
                            className="font-sans py-3 pl-6 pr-3 text-3xl text-white md:block"
                          >
                            Contact Me
                          </Link>
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
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div>
                    <div className="flex h-16 items-center justify-between">
                      {/* Logo (lg+) */}
                      <div className="hidden lg:flex lg:flex-1 lg:items-center ">
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
                      </div>

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
                      <div className="lg:hidden">
                        <span className="sr-only">Your Company</span>
                        <img
                          src="/images/logo.png"
                          alt=""
                          className="inline h-8 w-auto"
                        />
                        <p className="inline pl-2 font-sans text-xl font-medium text-white">
                          {RestaurantTitle()}
                        </p>
                      </div>
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
                            className="hidden font-sans text-base text-white md:block lg:text-lg"
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

          <div className="relative mx-auto flex max-w-xl md:max-w-5xl flex-col items-center py-32 px-6 text-center sm:py-64 lg:px-0">
            <h1 className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
              Welcome to the {RestaurantTitle()}.
            </h1>
            <p className="max-w-xl lg:max-w-2xl mt-4 text-xl text-white">
              Please take a look at the course menu and drink menu below.
            </p>
            <p className="max-w-xl lg:max-w-2xl mt-4 text-xl text-white">
              If you would like a drink or have any dietary restrictions, please
              submit a response below so I know about it in advance.
            </p>
          </div>
        </div>
        <main>
          <div>
            {/* Category section */}
            <section
              aria-labelledby="category-heading"
              className="pt-6 sm:pt-6 xl:mx-auto xl:max-w-7xl xl:px-8"
            >
              <h2 className="px-6 text-4xl font-bold tracking-tight text-gray-900 lg:px-8 xl:px-0">
                December 2022
              </h2>
              <div className="px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
                <h2
                  id="category-heading"
                  className="text-4xl font-bold tracking-tight text-gray-900"
                >
                  Course Menu...
                  <p className="text-lg">
                    ...based on{" "}
                    <Link
                      className="italic text-blue-500"
                      href="https://texasfarmersmarket.org/in-season/"
                    >
                      What&apos;s In Season.
                    </Link>
                  </p>
                </h2>
              </div>
              {courseMenu.map(createCourseMenu)}
            </section>
            <section
              aria-labelledby="category-heading"
              className="pt-4 xl:mx-auto xl:max-w-7xl xl:px-8"
            >
              <div className="px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
                <h2
                  id="category-heading"
                  className="text-4xl font-bold tracking-tight text-gray-900"
                >
                  Drink Menu
                </h2>
              </div>
              <div className="relative overflow-hidden py-4">
                <div className="px-12 lg:px-16">
                  <div className="max-w-prose text-lg">
                    <h1>
                      <span className="block text-left text-2xl font-bold leading-6 tracking-tight text-gray-900 sm:text-2xl">
                        Coffee + Tea{" "}
                        <p className="super inline font-normal">
                          *default: lactose-free dairy milk, optional: oatmilk
                        </p>
                      </span>
                    </h1>
                    {coffeeMenu.map(createDrinkMenu)}
                    {teaMenu.map(createDrinkMenu)}
                  </div>
                  <div className="mt-4 max-w-prose text-lg">
                    <h1>
                      <span className="block text-left text-2xl font-bold leading-6 tracking-tight text-gray-900 sm:text-2xl">
                        Cocktail + Mocktail
                      </span>
                    </h1>
                    {cocktailMenu.map(createDrinkMenu)}
                  </div>
                </div>
              </div>{" "}
            </section>
            <section className="pt-6 xl:mx-auto xl:max-w-7xl xl:px-8">
              <div className="relative">
                <h2 className="px-6 text-3xl font-bold tracking-tight text-gray-900 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
                  Drink / Dietary Restriction Request
                </h2>
              </div>
              <div className="relative px-8 pt-2">
                <p className="max-w-3xl block text-left text-lg leading-6 ">
                  Please submit a drink request at least an hour in advance, and
                  submit a dietary restriction request at least 2 days in
                  advance.
                </p>
              </div>
              <div className="mt-2 px-12 lg:px-16">
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
                        value={requestText.name}
                        onChange={handleChange}
                        className="block w-full rounded-md border-gray-300 py-2 px-4 shadow-sm md:w-1/2"
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
                        value={requestText.message}
                        rows={4}
                        className="block w-full rounded-md border-gray-300 py-2 px-4 shadow-sm md:w-1/2"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="mb-6 sm:col-span-2 lg:max-w-xl">
                    <button
                      type="button"
                      className={`${
                        submitClicked
                          ? "inline-flex w-full items-center justify-center rounded-md border border-transparent bg-green-400 px-6 py-3 text-base font-medium text-white shadow-sm md:w-1/2"
                          : "inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 md:w-1/2"
                      }`}
                      onClick={submitClick}
                    >
                      {submitClicked ? "Submitted!" : "Submit"}
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
