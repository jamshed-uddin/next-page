import {
  faBars,
  faBolt,
  faBoltLightning,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-100 h-16 w-full lg:w-4/5 mx-auto px-6 flex items-center justify-between">
      <Link to={"/"}>
        <div className="text-3xl font-bold text-blue-500">
          N
          <span className="text-xl text-amber-400">
            <FontAwesomeIcon icon={faBolt} />
          </span>
          xt page
        </div>
      </Link>
      <div className="page-links font-bold lg:space-x-10  text-gray-600 hidden lg:block">
        <Link className="link" to={"/"}>
          HOME
        </Link>
        <Link className="link" to={"/books"}>
          BOOKS
        </Link>
        <Link className="link" to={"/about"}>
          ABOUT
        </Link>
      </div>
      <div className="lg:hidden z-30 transition-all duration-1000">
        {!isOpen ? (
          <FontAwesomeIcon
            onClick={() => setIsOpen(true)}
            className="text-2xl cursor-pointer "
            aria-label="open menu"
            icon={faBars}
          >
            {" "}
          </FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon
            onClick={() => setIsOpen(false)}
            className="text-2xl cursor-pointer "
            aria-label="close menu"
            icon={faXmark}
          ></FontAwesomeIcon>
        )}
      </div>

      {/* mobile nav bar section */}
      <div
        className={`page-links font-bold lg:space-x-10  text-gray-600 flex flex-col space-y-4 lg:hidden border-2 p-20 transition-all duration-700 ${
          isOpen
            ? "absolute top-0 right-0 z-20"
            : "absolute top-0 -right-96 z-20"
        }  bg-white`}
      >
        <Link className="link" to={"/"}>
          HOME
        </Link>

        <Link className="link" to={"/books"}>
          BOOKS
        </Link>

        <Link className="link" to={"/about"}>
          ABOUT
        </Link>
      </div>
    </div>
  );
};

export default Header;
