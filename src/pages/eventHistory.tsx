import { type NextPage } from "next";
import Head from "next/head";
import { useState } from 'react'
import Footer from "../components/Footer";
import RestaurantTitle from "../components/restaurantTitle";
import MobileMenuAndNavBar from "../components/MobileMenuAndNavBar";

const previousEvents = [
  {
    key: "November 2022",
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
    key: "August 2022",
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
    key: "July 2022 Dinner",
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
      img: "/images/cookingportfolio/7_16_22_Second.JPG"
    },
    courseThree:
    {
      dishName: "White Chocolate Banana Oatmeal Bread with Espresso Affogato",
      description: "",
      img: "/images/cookingportfolio/7_16_22_Third.jpg"
    },
  },
  {
    key: "July 2022 Brunch",
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
    key: "March 2022",
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
      img: "/images/cookingportfolio/3_19_22_Third.JPG"
    },
  },
];

function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}

const Home: NextPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mainTitle="Event History"
  return (
    <>
      <Head>
        <title>{RestaurantTitle()}</title>
      </Head>
      <div className="bg-stone-100">
        <MobileMenuAndNavBar mainTitle={mainTitle}/>
        <main>
          {previousEvents.map((previousEvent) => (
            <div
              aria-labelledby="collection-heading"
              className="mx-auto max-w-xl px-4 pt-12 sm:px-6 sm:pt-12 lg:max-w-7xl lg:px-8"
              key={previousEvent.key}
            >
              <h2
                id="collection-heading"
                className="text-2xl font-bold tracking-tight text-gray-900"
              >
                {previousEvent.key}
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
            </div>
          ))}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
