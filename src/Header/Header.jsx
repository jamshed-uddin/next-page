import { faBolt, faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
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
      <div className="page-links font-bold space-x-10 text-gray-600">
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
