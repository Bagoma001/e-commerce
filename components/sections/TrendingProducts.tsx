"use client";

import { useRef, useEffect, useState } from "react";

import axios from "axios";
import Link from "next/link";

import Buttons from "../utils/Buttons";
import Slideshow from "../utils/Slideshow";
import ErrorPage from "../utils/ErrorPage";
import { Product } from "../utils/Slideshow";

const TrendingProducts = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [product, setProduct] = useState<Product | []>([]);
  const [productCategory, setProductCategory] = useState("bedroom");
  const [isSelected, setIsSelected] = useState("bedroom");
  const [error, setError] = useState(false);
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    async function loadData() {
      // setLoadingState(true);
      let url = `http://127.0.0.1:3000/api/v1/products?category=${productCategory}`;

      try {
        const response = await axios(url);
        if (response.data.status !== "success") {
          console.log("something went wrong");
          throw new Error("Something went wrong, please check back");
        }
        const data = response.data.data.products;
        setProduct(data);
        setLoadingState(false);
      } catch (err) {
        console.log(err);
        setError(true);
      }
    }

    loadData();
  }, [setProduct, productCategory, setError]);

  function chooseCategory(category: string) {
    setProductCategory(category);
    setIsSelected(category);
  }

  return (
    <>
      <section className="container">
        <div className="flex-between">
          <div>
            <h3> Trending products for you</h3>
          </div>

          <div className="trending-link">
            <Buttons button="trend-button">
              <Link href={"/products"} className="link">
                View all Products
              </Link>
            </Buttons>
          </div>
        </div>

        <div className="flex-start flex">
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
        {loadingState ? (
          <h1> Loading requested data </h1>
        ) : (
          <div>{error ? <ErrorPage /> : <Slideshow products={product} />}</div>
        )}
      </section>
    </>
  );
};

export default TrendingProducts;
