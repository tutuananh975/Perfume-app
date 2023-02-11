import { FC } from "react";
import { NavLink, Link } from "react-router-dom";
import Optional from "./Optional";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import { fab, faFacebook, faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';

// library.add(fab, faFacebook, faFacebookF, faGoogle)

const Navbar: FC = () => {
  return (
    <div className="navbar flex justify-between items-center">
      <ul className="flex text-base font-semibold">
        <li className="py-2 mr-4 md:hidden">
          <div className="flex items-center">
            <FontAwesomeIcon className="text-cdcac9 text-2xl" icon={faBars} />
            <h4 className="ml-2">MENU</h4>
          </div>
        </li>
        <li className="py-2 nav-link">
          <NavLink to="women">
            WOMEN'S
            <span className="hidden lg:inline"> PERFUME</span>
          </NavLink>
        </li>
        <li className="ml-4 py-2 nav-link">
          <NavLink to="men">
            MEN'S
            <span className="hidden lg:inline">COLOGNE</span>
          </NavLink>
        </li>
        <li className="ml-4 py-2 nav-link hidden xl:block">
          <NavLink to="best-sellers"> BEST SELLERS</NavLink>
        </li>
        <li className="ml-4 py-2 nav-link hidden xl:block">
          <NavLink to="gift">GIFT SETS</NavLink>
        </li>
        <li className="ml-4 py-2 nav-link hidden xl:block">
          <NavLink to="brands">BRANDS</NavLink>
        </li>
        <li className="ml-4 py-2 nav-link">
          <NavLink to="fragrance">JOIN THE CLUB</NavLink>
        </li>
      </ul>
      <ul className="flex navbar-right">
        <li className="cursor-pointer has-triangle hidden md:block sign-in-btn relative">
          <Link to="customeraccount">
            <div className="nav-right-text-link">SIGN IN</div>
            <div className="triangle absolute"></div>
          </Link>
          <div className="px-6 absolute z-10 top-0 left-0 w-56 action-sign-in">
            <button className="btn-modal-sign-in text-white py-1.5 w-full bg-081857 rounded">
              SIGN IN
            </button>
            <div className="pt-1 mb-5 text-md">
              <div className="pt-1 pb-2 leading-tight">New Customer?</div>
              <div className="pt-1 pb-2 leading-tight">Order Status</div>
              <div className="pt-1 pb-2 leading-tight">Need Help?</div>
            </div>
            <div className="other-login w-full">
              <p className="text-6d6c97">Or log in with:</p>
              <button className="w-full bg-5c79b1 text-xs p-1 text-white hover:opacity-90 rounded-sm mb-1">
                <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                <span className="ml-1 font-light">Sign in with </span>
                <span className="font-semibold">Facebook</span>
              </button>
              <button className="w-full bg-d95442 text-xs p-1 text-white hover:opacity-90 rounded-sm">
                <FontAwesomeIcon icon={["fab", "google"]} />
                <span className="ml-1 font-light">Sign in with </span>
                <span className="font-semibold">Google</span>
              </button>
            </div>
          </div>
        </li>
        <li className="ml-9 cursor-pointer hidden md:block">
          <Link to="help">
            <div className="nav-right-text-link">HELP</div>
          </Link>
        </li>
        <li className="relative ml-4 cursor-pointer has-triangle hidden md:block">
          <div>VND</div>
          <div className="triangle absolute"></div>
        </li>
        <li className="ml-4 cursor-pointer hidden sm:block">
          <Link to="cart">
            <Optional icon={faCartShopping} textLight="CART" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
