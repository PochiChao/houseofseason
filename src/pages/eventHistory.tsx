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

const previousEvents = [
  {
    date: "November 2022",
    courseOne: 
    {
      dishName: "Mashed Potatoes, Broccoli with Balsamic Glaze, Roasted Garlic Dip",
      description: "",
      img: "/images/cookingportfolio/11_5_22_First.JPG"
    },
    courseTwo:
    {
      dishName: "Curry-Soy Spiced Chicken with Lemon-Miso Kale Salad with Pecans",
      description: "",
      img: ""
    },
    courseThree:
    {
      dishName: "Lemon-Cornmeal Poundcake with Powdered Sugar",
      description: "",
      img: ""
    },
  },
  {
    date: "August 2022",
    courseOne: 
    {
      dishName: "",
      description: "",
      img: ""
    },
    courseTwo:
    {
      dishName: "Japanese Curry with Velveted Chicken",
      description: "Sides: Kelp Noodle Salad, Spinach Ohitaishi, Korean Greens Salad, Zucchini with Fish Sauce Glaze",
      img: "/images/cookingportfolio/8_27_22_Overall.jpg"
    },
    courseThree:
    {
      dishName: "Lemon Peel Panna Cotta",
      description: "",
      img: ""
    },
  },
  {
    date: "July 2022 Dinner",
    courseOne: 
    {
      dishName: "Poached Egg, Charred Green Beans, Squash Bed",
      description: "",
      img: "/images/cookingportfolio/7_16_22_First.jpg"
    },
    courseTwo:
    {
      dishName: "Beet Greens, Walnuts, Pine Nuts Galette with Roasted Beets, Cucumber Salad",
      description: "",
      img: "/images/cookingportfolio/7_16_22_Second.jpg"
    },
    courseThree:
    {
      dishName: "White Chocolate Banana Oatmeal Bread with Espresso Affogato",
      description: "",
      img: "/images/cookingportfolio/7_16_22_Third.jpg"
    },
  },
  {
    date: "July 2022 Brunch",
    courseOne: 
    {
      dishName: "",
      description: "",
      img: ""
    },
    courseTwo:
    {
      dishName: "Tacos - Chicken Chile Verde, Carnitas, Refried Beans, Eggs, Roasted Potatoes",
      description: "Components - Avocadoes, Cucumbers, Cilantro, Limes, Pickled Onions",
      img: "/images/cookingportfolio/7_9_22_Overall.jpg"
    },
    courseThree:
    {
      dishName: "",
      description: "",
      img: ""
    },
  },
  {
    date: "March 2022",
    courseOne: 
    {
      dishName: "Crudités with Hummus, Baba Ghanoush, and Chimichurri",
      description: "",
      img: "/images/cookingportfolio/3_19_22_First.jpg"
    },
    courseTwo:
    {
      dishName: "Yorkshire Pudding with Fried Eggs, Sausages, Chives",
      description: "Sides - Charred Radishes, Pistachio-Arugula Salad with Tahini Dressing, Roasted Pork Tenderloin",
      img: "/images/cookingportfolio/3_19_22_Second.jpg"
    },
    courseThree:
    {
      dishName: "Coffee Cake with Cinnamon Crumb",
      description: "",
      img: "/images/cookingportfolio/3_19_22_Third.jpg"
    },
  },
];

function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}

const Home: NextPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <Head>
        <title>{RestaurantTitle()}</title>
      </Head>
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
          <div className="relative mx-auto flex max-w-3xl flex-col items-center py-32 px-6 text-center sm:py-64 lg:px-0">
            <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
              Previous Events
            </h1>
            <p className="mt-4 text-xl text-white"></p>
          </div>
        </div>
        <main>
          {previousEvents.map((previousEvent) => (
            <section
              aria-labelledby="collection-heading"
              className="mx-auto max-w-xl px-4 pt-12 sm:px-6 sm:pt-12 lg:max-w-7xl lg:px-8"
            >
              <h2
                id="collection-heading"
                className="text-2xl font-bold tracking-tight text-gray-900"
              >
                {previousEvent.date}
              </h2>
              <div className="mt-4 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
                <div className="group block">
                  <div
                    aria-hidden="true"
                    className="overflow-hidden rounded-lg group-hover:opacity-75"
                  >
                    {previousEvent.courseOne.img === "" ? (
                      ""
                    ) : (
                      <img
                        src={previousEvent.courseOne.img}
                        alt={
                          previousEvent.courseOne.dishName +
                          " " +
                          previousEvent.courseOne.description
                        }
                        className="h-full w-full object-cover object-center"
                      />
                    )}
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-gray-900">
                    {previousEvent.courseOne.dishName}
                  </h3>
                  <p className="mt-2 mb-6 text-sm text-gray-500">
                    {previousEvent.courseOne.description}
                  </p>
                </div>
                <div className="group block">
                  <div
                    aria-hidden="true"
                    className="overflow-hidden rounded-lg group-hover:opacity-75"
                  >
                    {previousEvent.courseTwo.img === "" ? (
                      ""
                    ) : (
                      <img
                        src={previousEvent.courseTwo.img}
                        alt={
                          previousEvent.courseTwo.dishName +
                          " " +
                          previousEvent.courseTwo.description
                        }
                        className="h-full w-full object-cover object-center"
                      />
                    )}
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-gray-900">
                    {previousEvent.courseTwo.dishName}
                  </h3>
                  <p className="mt-2 mb-6 text-sm text-gray-500">
                    {previousEvent.courseTwo.description}
                  </p>
                </div>
                <div className="group block">
                  <div
                    aria-hidden="true"
                    className="overflow-hidden rounded-lg group-hover:opacity-75"
                  >
                    {previousEvent.courseThree.img === "" ? (
                      ""
                    ) : (
                      <img
                        src={previousEvent.courseThree.img}
                        alt={
                          previousEvent.courseThree.dishName +
                          " " +
                          previousEvent.courseThree.description
                        }
                        className="h-full w-full object-cover object-center"
                      />
                    )}
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-gray-900">
                    {previousEvent.courseThree.dishName}
                  </h3>
                  <p className="mt-2 mb-6 text-sm text-gray-500">
                    {previousEvent.courseThree.description}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
