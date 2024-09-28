import { GrFavorite } from "react-icons/gr";
import Image from "next/image";
import Buttons from "./Buttons";
import CurrencyFormatter from "./CurrencyFormatter";

export interface Product {
  products: {
    _id: string;
    discount: string;
    category: string;
    name: string;
    discountPrice: number;
    imageCover: string;
  }[];
}

function Slideshow({ products }: Product) {
  function addProduct(product: {}[]) {
    console.log(product);
  }

  return (
    <>
      <ul className="trending-products list-type">
        {products.map((el) => (
          <li key={el._id} className="background-lightgrey relative">
            <div className="position padding-1">
              <div className="flex-between">
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
              className="img-product img"
            />
            <div className="padding-1 trending-space">
              <div>
                <p className="trending-name product-name">{el.name}</p>
                <p className="trend-price">
                  <CurrencyFormatter digit={el.discountPrice} />
                </p>
              </div>

              <Buttons button="btn-cart" onClick={() => addProduct(el)}>
                Add to cart
              </Buttons>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Slideshow;
