import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import RestaurantTitle from "../components/restaurantTitle";
import MobileMenuAndNavBar from "../components/MobileMenuAndNavBar";

const Home: NextPage = () => {
  const mainTitle = "Contact Me!";
  const secondTitle = "See below for ways to contact me.";
  return (
    <>
      <Head>
        <title>{RestaurantTitle()}</title>
      </Head>
      <div className="bg-stone-100">
        <MobileMenuAndNavBar mainTitle={mainTitle} secondTitle={secondTitle} />
        <main>
          {/* Category section */}
          <section
            aria-labelledby="category-heading"
            className="px-8 pt-6 sm:pt-6 xl:mx-auto xl:max-w-7xl"
          >
            <div className="py-2">
              <Link
                className="inline h-10 w-10"
                href="https://www.instagram.com/pochichao/"
              >
                <img
                  className="inline h-10 w-10"
                  src="https://cdn-icons-png.flaticon.com/512/4138/4138124.png"
                  alt="Instagram"
                />
                <p className="inline pl-2 font-sans text-xl font-medium">
                  Instagram
                </p>
              </Link>
            </div>
            <div className="py-2">
              <Link
                className="inline h-10 w-10"
                href="https://github.com/PochiChao"
              >
                <img
                  className="inline h-10 w-10"
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  alt="Github"
                />
                <p className="inline pl-2 font-sans text-xl font-medium">
                  Github
                </p>
              </Link>
            </div>
            <div className="pt-2 pb-6">
              <Link
                className="inline h-10 w-10"
                href="mailto:19pochi94@gmail.com"
              >
                <img
                  className="inline h-10 w-10"
                  src="/images/gmailLogo.webp"
                  alt="Gmail"
                />
                <p className="inline pl-2 font-sans text-xl font-medium">
                  Email
                </p>
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Home;
