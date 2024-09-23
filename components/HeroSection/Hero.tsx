import Image from "next/image";
import Link from "next/link";
import Buttons from "../utils/Buttons";
import { IoArrowForwardCircle } from "react-icons/io5";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";

import livingRoom from "@/app/assets/img/living-room.jpg";

function Hero() {
  return (
    <section>
      <div className="hero-flex">
        <div className="hero-text">
          <h1>Modern interior Studio Design</h1>

          <p>
            Choosing the right furniture for your home will add elegance and
            functionality to your interior while also being cost effective and
            long lasting.
          </p>

          <Buttons button="btn-color">
            <span className="icon-flex">
              <Link href="/products" className="link">
                Shop Now
              </Link>

              <IoArrowForwardCircle className="icons" />
            </span>
          </Buttons>
        </div>

        {/* HERO IMAGE LANDING PAGE */}
        <div className="hero-image">
          <Image
            src={livingRoom}
            alt="Living room interior decoration"
            width="1280"
            height="1919"
            className="img img-radius"
            priority
          />
        </div>
      </div>

      <div className="button-flex">
        <Buttons button="back-button">
          <HiOutlineArrowLongLeft className="btn" />
        </Buttons>

        <Buttons button="forward-button">
          <HiOutlineArrowLongRight className="btn" />
        </Buttons>
      </div>
    </section>
  );
}

export default Hero;
