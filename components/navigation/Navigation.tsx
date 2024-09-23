import NavigationLinks from "./NavigationLinks";

import { FaInstagram } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { PiPhoneOutgoingThin } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { BsCart4 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";

export default function Navigation() {
  return (
    <nav>
      <div className="nav-starter-flex">
        <div className="socials">
          <p>Follow us</p>
          <FaInstagram className="icons" />
          <ImFacebook className="icons" />
          <FaXTwitter className="icons" />
        </div>

        <div className="sign-up-discount">
          <p>Sign up and get 20% off for all collections</p>
        </div>

        <div className="business-phone socials">
          <PiPhoneOutgoingThin className="phone-icon" />

          <p>1(100)954-2789</p>
        </div>
      </div>

      <div className="navigation-flex-container">
        <div className="logo">
          <h2>Logo</h2>
        </div>

        <div className="links">
          <NavigationLinks href="/">Home</NavigationLinks>
          <NavigationLinks href="/products">Products</NavigationLinks>
          <NavigationLinks href="/categories">Categories</NavigationLinks>
          <NavigationLinks href="/company">About Us</NavigationLinks>
          <NavigationLinks href="/contact">Contact Us</NavigationLinks>
          <NavigationLinks href="/blog">Blog</NavigationLinks>
        </div>

        <div>
          <FaSearch className="user_icon" />
          <GrFavorite className="user_icon" />
          <BsCart4 className="user_icon" />
          <FaRegUser className="user_icon" />
        </div>
      </div>
    </nav>
  );
}
