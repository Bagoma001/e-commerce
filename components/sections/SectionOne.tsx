import React from "react";

import Image from "next/image";
import Link from "next/link";
import { CiDeliveryTruck } from "react-icons/ci";
import { RiShoppingBag2Line } from "react-icons/ri";
import { RiCustomerService2Line } from "react-icons/ri";
import { PiArrowsCounterClockwise } from "react-icons/pi";

import sofa from "@/app/assets/img/feranti-sofa.png";
import officeChair from "@/app/assets/img/office-chair.png";

export default function SectionOne() {
  return (
    <>
      <section className="section-container">
        <div className="features-flex-container">
          <div className="feature-flex">
            <CiDeliveryTruck className="feature-icon" />
            <h3>Fast and Free Shipping</h3>
          </div>

          <div className="feature-flex">
            <RiShoppingBag2Line className="feature-icon" />
            <h3>Easy to Shop</h3>
          </div>

          <div className="feature-flex">
            <RiCustomerService2Line className="feature-icon" />
            <h3>24/7 Customer Support</h3>
          </div>

          <div className="feature-flex">
            <PiArrowsCounterClockwise className="feature-icon" />
            <h3>Hassle Free Returns</h3>
          </div>
        </div>

        {/* NEW COLLECTIONS */}
        <div className="collection-grid-container">
          <div className="collection-one collection-flex ">
            <div className="text">
              <p className="paragraph collection-heading ">New Collection</p>

              <h3>Authentic Sofa</h3>

              <p>Golden sofa</p>
              <p>Soft Sofa</p>
              <p>Italian Sofa</p>
              <p> American Sofa </p>

              <Link href="products" className="link">
                View All
              </Link>
            </div>

            <div className="collection-image">
              <Image src={sofa} alt="An authentic sofa" className="img" />
            </div>
          </div>

          {/* SECOND GRID COLLECTION */}
          <div>
            <p className="paragraph collection-heading">New Collection</p>
            <h3>Authentic Sofa</h3>
            <div className="collection-two collection-two-flex text">
              <div className="text">
                <p>Golden sofa</p>
                <p>Soft Sofa</p>
                <p>Italian Sofa</p>
                <p> American Sofa </p>

                <Link href="products" className="link">
                  View All
                </Link>
              </div>

              <div className="collection-image-position">
                <Image
                  src={officeChair}
                  alt="An authentic Office chair"
                  className="img"
                />
              </div>
            </div>
          </div>

          {/* THIRD GRID COLLECTION */}
          <div className="collection-three background-second-collection">
            <div>
              <p className="paragraph paragraph-heading">New Collection</p>
              <h3>Lighting Lamp</h3>
              <p>Tripod Lamps</p>
              <p>Table Lamps</p>
              <p>Flore Lamps</p>
              <p>Study Lamps</p>
            </div>
          </div>

          {/* FOURTH GRID COLLECTION */}
          <div className="collection-four">
            <div>
              <h3>Get Discount</h3>
              <p>20% Off</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
