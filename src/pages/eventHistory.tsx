import { GetServerSideProps, type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Footer from "../components/Footer";
import RestaurantTitle from "../components/restaurantTitle";
import MobileMenuAndNavBar from "../components/MobileMenuAndNavBar";
import prisma from "../server/db/client";

type Props = {
  previousEvents: any;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const previousEvents = await prisma.events.findMany({
    orderBy: [{ event: "desc" }],
  });
  return { props: { previousEvents } };
};

const Home: NextPage<Props> = (props) => {
  const mainTitle = "Event History";
  return (
    <>
      <Head>
        <title>{RestaurantTitle()}</title>
      </Head>
      <div className="bg-stone-100">
        <MobileMenuAndNavBar mainTitle={mainTitle} />
        <main>
          {props.previousEvents.map((previousEvent: any) => (
            <div
              aria-labelledby="collection-heading"
              className="mx-auto max-w-xl px-4 pt-12 sm:px-6 sm:pt-12 lg:max-w-7xl lg:px-8"
              key={previousEvent.event}
            >
              <h2
                id="collection-heading"
                className="text-2xl font-bold tracking-tight text-gray-900"
              >
                {previousEvent.event}
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
