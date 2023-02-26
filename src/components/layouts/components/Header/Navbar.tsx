import { FC, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Optional from "./Optional";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import NavbarMobile from "./NavbarMobile";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../pages/Customeraccount/featurnes/useSlice";
import { useDispatch } from "react-redux";
import { logout } from "../../../../pages/Customeraccount/featurnes/useSlice";

const Navbar: FC = () => {
  const { isLogin, userName } = useSelector(selectUser);

  const [isOpenNavbarMobile, setIsOpenNavbarMobile] = useState(false);
  const dispath = useDispatch()

  const handleLogout = () => {
    dispath(logout())
  }
  return (
    <div className="navbar flex justify-between items-center">
      <ul className="flex text-base font-semibold">
        <li className="py-2 mr-4 xl:hidden">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setIsOpenNavbarMobile(true)}
          >
            <FontAwesomeIcon className="text-cdcac9 text-2xl" icon={faBars} />
            <h4 className="ml-2">MENU</h4>
          </div>
        </li>
        <li className="py-2 nav-link">
          <NavLink to="/women">
            WOMEN'S
            <span className="hidden lg:inline"> PERFUME</span>
          </NavLink>
        </li>
        <li className="ml-4 py-2 nav-link">
          <NavLink to="/men">
            MEN'S
            <span className="hidden lg:inline"> PERFUME</span>
          </NavLink>
        </li>
        <li className="ml-4 py-2 nav-link hidden xl:block">
          <NavLink to="/search">SEARCH</NavLink>
        </li>
        <li className="ml-4 py-2 nav-link hidden xl:block">
          <NavLink to="/gift">GIFT SETS</NavLink>
        </li>
        <li className="ml-4 py-2 nav-link hidden xl:block">
          <NavLink to="/brands">BRANDS</NavLink>
        </li>
        <li className="ml-4 py-2 nav-link">
          <NavLink to="/fragrance">JOIN THE CLUB</NavLink>
        </li>
      </ul>
      <ul className="flex navbar-right">
        <li className="cursor-pointer has-triangle hidden md:block sign-in-btn relative">
          {isLogin ? (
            <div>
              <div className="nav-right-text-link">{userName}</div>
              <div className="triangle absolute"></div>
            </div>
          ) : (
            <Link to="/customeraccount">
              <div className="nav-right-text-link">SIGN IN</div>
              <div className="triangle absolute"></div>
            </Link>
          )}
          {isLogin ? (
            <div className="px-6 absolute z-10 top-10 w-56 action-sign-in text-center">
              <button className=" bg-red-400 hover:bg-red-300 text-white py-2 px-4 rounded-md flex w-full items-center text-center justify-center" onClick={handleLogout}>
                <AiOutlineLogout />
                <span className="ml-4">Logout</span>
              </button>
            </div>
          ) : (
            <div className="px-6 absolute z-10 top-10 w-56 action-sign-in">
              <button className="btn-modal-sign-in text-white py-1.5 w-full bg-blue-081857 rounded">
                SIGN IN
              </button>
              <div className="pt-1 mb-5 text-md">
                <div className="pt-1 pb-2 leading-tight">New Customer?</div>
                <div className="pt-1 pb-2 leading-tight">Order Status</div>
                <div className="pt-1 pb-2 leading-tight">Need Help?</div>
              </div>
              <div className="other-login w-full">
                <div className="triangle-up"></div>
                <p className="text-6d6c97">Or log in with:</p>
                <button className="w-full bg-5c79b1 text-xs p-1 text-white hover:opacity-90 rounded-sm mb-1 flex items-center justify-center">
                  <FaFacebookF />
                  <span className="ml-1 font-light">Sign in with </span>
                  <span className="font-semibold">Facebook</span>
                </button>
                <button className="w-full bg-d95442 text-xs p-1 text-white hover:opacity-90 rounded-sm flex items-center justify-center">
                  <FaGoogle />
                  <span className="ml-1 font-light">Sign in with </span>
                  <span className="font-semibold">Google</span>
                </button>
              </div>
            </div>
          )}
        </li>

        <li className="ml-9 cursor-pointer hidden md:block">
          <Link to="/help">
            <div className="nav-right-text-link">HELP</div>
          </Link>
        </li>
        <li className="relative ml-4 cursor-pointer has-triangle hidden md:block">
          <div>VND</div>
          <div className="triangle absolute"></div>
        </li>
        <li className="ml-4 cursor-pointer hidden sm:block">
          <Link to="/cart">
            <Optional icon={faCartShopping} textLight="CART" />
          </Link>
        </li>
      </ul>
      {isOpenNavbarMobile && (
        <NavbarMobile
          onCloseNavbarMobile={() => {
            setIsOpenNavbarMobile(false);
          }}
        />
      )}
    </div>
  );
};

export default Navbar;
