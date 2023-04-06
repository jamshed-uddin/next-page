import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Player } from "@lottiefiles/react-lottie-player";

import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="my-container ">
      <div className="lg:hidden">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          A reader lives a <br className="hidden md:block" /> thousand lives{" "}
          <span className="inline-block text-blue-500">before he dies</span>
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between ">
        <div className="mb-10 lg:max-w-lg  lg:pr-5 ">
          <div className="max-w-xl mb-6 lg:mt-8">
            <div className="hidden lg:inline-block">
              <p className="badge  ">ON SALE!</p>
            </div>
            <h2 className="hidden lg:block max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              A reader lives a <br className="hidden md:block" /> thousand lives{" "}
              <span className="inline-block text-blue-500">before he dies</span>
            </h2>
            <div className="inline-block lg:hidden">
              <p className="badge">ON SALE!</p>
            </div>

            <p className="text-base text-gray-700 md:text-lg">
              Books are a uniquely portable magic. Books serve to show a man
              that those original thoughts of his aren’t very new after all. The
              man who does not read good books is no better than the man who
              can’t.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <Link to="/books" className=" md:w-auto md:mr-4">
              <div className="inline-flex items-center justify-center w-full h-full">
                <p className="mr-3 bg-blue-600 hover:bg-blue-500 transition-all text-white px-6 py-3 rounded-lg text-lg">
                  Visit Store <FontAwesomeIcon icon={faShoppingCart} />
                </p>
              </div>
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center font-semibold text-lg text-gray-800 transition-colors duration-200 hover:text-blue-700 py-3"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="order-first lg:order-last mb-4 lg:mb-0">
          <Player
            autoplay
            loop
            src="https://assets2.lottiefiles.com/packages/lf20_ybiszbil.json"
          ></Player>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
