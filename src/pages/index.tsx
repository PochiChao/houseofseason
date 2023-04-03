import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Footer from "../components/Footer";
import RestaurantTitle from "../components/restaurantTitle";
import CreateCourseMenu from "../components/CreateCourseMenu";
import CreateDrinkMenu from "../components/CreateDrinkMenu";
import MobileMenuAndNavBar from "../components/MobileMenuAndNavBar";
import axios from "axios";

const courseMenu = [
  {
    id: "first",
    dishName: "Egg Drop Soup",
    description:
      "topped with fried shallots and scallion curls, and paired with pork meatballs.",
  },
  {
    id: "second",
    dishName: "Non-Traditional Bibimbap",
    description:
      "bean sprouts, lemon-miso kale, miso turnips, baby bok choy, pork belly",
  },
  {
    id: "third",
    dishName: "Basil Pistachio Cookies",
    description: "with lemon zest and basil infused powdered sugar",
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

// const cocktailMenu = [{ name: "c: paloma" }, { name: "m: mango mule" }];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Home: NextPage = () => {
  const [submitClicked, setSubmitClicked] = useState(false);
  const [requestText, setRequestText] = useState({
    name: "",
    message: "",
  });
  const monthYear = new Date().toLocaleString("en-us", {
    month: "long",
    year: "numeric",
  });

  const mainTitle = `Welcome to the ${RestaurantTitle()}`;
  const secondTitle =
    "Please take a look at the course menu and drink menu below.";
  const thirdTitle =
    "If you would like a drink or have any dietary restrictions, please submit a response below so I know about it in advance.";

  function submitClick() {
    setSubmitClicked(true);
    setTimeout(() => setSubmitClicked(false), 2000);

    const url = "https://api.emailjs.com/api/v1.0/email/send";
    const config = {
      service_id: "service_vvbgyu8",
      template_id: "template_bsszdnt",
      user_id: "hBPrKO3PktefWm-h1",
      accessToken: process.env.EMAILJS_API_KEY,
      template_params: {
        person: requestText.name,
        message: requestText.message,
      },
    };
    axios.post(url, config).then((response) => {
      console.log(response);
    });
  }

  function handleChange(event: { target: { name: any; value: any } }) {
    const { name, value } = event.target;
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
        <MobileMenuAndNavBar
          mainTitle={mainTitle}
          secondTitle={secondTitle}
          thirdTite={thirdTitle}
        />

        <main>
          <div>
            {/* Category section */}
            <section
              aria-labelledby="category-heading"
              className="pt-6 sm:pt-6 xl:mx-auto xl:max-w-7xl xl:px-8"
            >
              <h2 className="px-6 text-4xl font-bold tracking-tight text-gray-900 lg:px-8 xl:px-0">
                {monthYear}
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
              {courseMenu.map(CreateCourseMenu)}
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
                    {coffeeMenu.map(CreateDrinkMenu)}
                    {teaMenu.map(CreateDrinkMenu)}
                  </div>
                  <div className="mt-4 max-w-prose text-lg">
                    <h1>
                      <span className="block text-left text-2xl font-bold leading-6 tracking-tight text-gray-900 sm:text-2xl">
                        Cocktail + Mocktail
                      </span>
                    </h1>
                    {/* {cocktailMenu.map(CreateDrinkMenu)} */}
                    None offered this time, unfortunately.
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
                <p className="block max-w-3xl text-left text-lg leading-6 ">
                  Please submit a drink request at least 2 hours in advance, and
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
