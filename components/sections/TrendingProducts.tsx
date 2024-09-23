"use client";

import { useRef, useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";

import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import Buttons from "../utils/Buttons";

interface DataType {
  _id: string;
  category: string;
  imageCover: string;
  name: string;
  discountPrice: number;
  discount: number;
}

const TrendingProducts = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [product, setProduct] = useState<DataType[]>([]);
  const [productCategory, setProductCategory] = useState("bedroom");
  const [isSelected, setIsSelected] = useState("bedroom");

  useEffect(() => {
    async function loadData() {
      let url = `http://127.0.0.1:3000/api/v1/products?category=${productCategory}`;

      try {
        const response = await axios(url);

        if (!response.status) {
          throw new Error("Something went wrong");
        }
        const data = response.data.data.products;
        setProduct(data);
      } catch (err) {
        console.log(err);
      }
    }

    loadData();
  }, [setProduct, productCategory]);

  function chooseCategory(category: string) {
    setProductCategory(category);
    setIsSelected(category);
  }

  return (
    <>
      <section className="trending-space">
        <div className="trending-flex">
          <div>
            <h2> Trending products for you</h2>
          </div>

          <div className="trending-link">
            <Buttons button="trend-button">
              <Link href={"/products"} className="link">
                View all Products
              </Link>
            </Buttons>
          </div>
        </div>

        <div className="dining-flex">
          <Buttons
            ref={buttonRef}
            onClick={() => chooseCategory("bedroom")}
            className={isSelected === "bedroom" ? "active-btn" : ""}
            button="category-btn"
          >
            Bedroom
          </Buttons>
          <Buttons
            ref={buttonRef}
            onClick={() => chooseCategory("living room set")}
            className={isSelected === "living room set" ? "active-btn" : ""}
            button="category-btn"
          >
            Living Room
          </Buttons>
          <Buttons
            ref={buttonRef}
            onClick={() => chooseCategory("dining tables")}
            className={isSelected === "dining tables" ? "active-btn" : ""}
            button="category-btn"
          >
            Dining Set
          </Buttons>
          <Buttons
            ref={buttonRef}
            onClick={() => chooseCategory("sofas")}
            className={isSelected === "sofas" ? "active-btn" : ""}
            button="category-btn"
          >
            Sofas
          </Buttons>
          <Buttons
            ref={buttonRef}
            onClick={() => chooseCategory("office chairs")}
            className={isSelected === "office chairs" ? "active-btn" : ""}
            button="category-btn"
          >
            Office Chairs
          </Buttons>
        </div>

        <div>
          <ul className="trending-products">
            {product.map((el) => (
              <li key={el._id} className="trending_products-feature">
                <div className="position">
                  <div className="discount-wishlist">
                    <div className="discount">
                      <p>{`-${el.discount}%`} </p>
                    </div>

                    <div className="wishlist">
                      <Buttons>
                        <GrFavorite />
                      </Buttons>
                    </div>
                  </div>
                </div>
                <Image
                  src={`http://127.0.0.1:3000/${el.imageCover}`}
                  alt={el.category}
                  width="450"
                  height="200"
                  className="img-product"
                />
                <div className="trending-details">
                  <div>
                    <p className="trending-name">{el.name}</p>
                    <p className="trend-price">
                      {" "}
                      {`$${el.discountPrice.toFixed(2)}`}
                    </p>
                  </div>

                  <Buttons>
                    <FaShoppingCart className="trend-cart" />
                  </Buttons>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default TrendingProducts;
