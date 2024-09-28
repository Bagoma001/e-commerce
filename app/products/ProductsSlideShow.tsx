"use client";

import { useEffect, useState, useCallback } from "react";
import Buttons from "@/components/utils/Buttons";
import Slideshow from "@/components/utils/Slideshow";
import { useQuery } from "@tanstack/react-query";
import { fetchAllProducts } from "@/components/utils/PageQuery/Http";

function ProductsSlideShow() {
  const [productCategory, setProductCategory] = useState("");
  const [checkedValues, setCheckedValues] = useState([]);
  const [page, setPage] = useState<number>(1);
  const [hasMorePages, setHasMorePages] = useState<boolean>(true);

  const pageSize = 12;

  const { data, isPending } = useQuery({
    queryKey: [
      "events",
      { search: productCategory },
      { checked: checkedValues },
      { pagination: page },
      { limit: pageSize },
    ],
    queryFn: ({ signal }) =>
      fetchAllProducts({ productCategory, checkedValues, page, pageSize }),
    staleTime: 5000,
  });

  const getPageSize = useCallback(() => {
    {
      data && data.length < pageSize
        ? setHasMorePages(false)
        : setHasMorePages(true);
    }
  }, [data, setHasMorePages]);

  useEffect(() => {
    getPageSize();
  }, [getPageSize]);

  function getCategory(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    setProductCategory(value);
  }

  function handleradioChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { min, max, checked } = event.target;

    if (checked) {
      setCheckedValues([min, max]);
    }
  }

  function nextPage() {
    if (hasMorePages) {
      setPage((prevPage) => prevPage + 1);
    }
  }

  function previousPage() {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  }

  return (
    <section className="relative container">
      <div className="product-filter-flex">
        <div className="products-filter">
          <h4>Category</h4>
          <div className="filter-flex">
            <input
              type="radio"
              name="category"
              value="bedroom"
              id="bedroom"
              onChange={getCategory}
            />
            <label htmlFor="bedroom"> Bedroom </label>
          </div>
          <br />
          <div className="filter-flex">
            <input
              type="radio"
              name="category"
              value="sofas"
              id="sofas"
              onChange={getCategory}
            />
            <label htmlFor="sofas">Sofas </label>
          </div>
          <br />
          <div className="filter-flex">
            <input
              type="radio"
              name="category"
              value="office chairs"
              id="office chairs"
              onChange={getCategory}
            />
            <label htmlFor="office chairs">Office Chairs </label>
          </div>
          <br />
          <div className="filter-flex">
            <input
              type="radio"
              name="category"
              value="dining tables"
              id="dining tables"
              onChange={getCategory}
            />
            <label htmlFor="dining tables">Dining Sets</label>
          </div>
          <br />
          <div className="filter-flex">
            <input
              type="radio"
              name="category"
              value="bathroom vanities"
              id="bathroom vanities"
              onChange={getCategory}
            />
            <label htmlFor="bathroom vanities">Bathroom Vanities </label>
          </div>
          <br />
          <br />

          {/* PRICE FILTER CATEGORY */}
          {/* /////////////////////////////// */}
          <h4> Price</h4>

          <div className="filter-flex">
            <input
              type="radio"
              name="price"
              min="0"
              max="500"
              id="under-500"
              onChange={handleradioChange}
            />

            <label htmlFor="under-500">Under $500</label>
          </div>

          <br />
          <div className="filter-flex">
            <input
              type="radio"
              name="price"
              min="500"
              max="1000"
              id="under-1000"
              onChange={handleradioChange}
            />

            <label htmlFor="under-1000">$500 to $1000</label>
          </div>

          <br />

          <div className="filter-flex">
            <input
              type="radio"
              name="price"
              min="1000"
              max="2000"
              id="under-2000"
              onChange={handleradioChange}
            />

            <label htmlFor="under-2000">$1000 to $2000</label>
          </div>
          <br />

          <div className="filter-flex">
            <input
              type="radio"
              name="price"
              value="3000"
              id="under-3000"
              onChange={handleradioChange}
            />

            <label htmlFor="under-3000">$2000 to $3000</label>
          </div>

          <br />
          <div className="filter-flex">
            <input
              type="radio"
              name="price"
              value="4000"
              id="under-4000"
              onChange={handleradioChange}
            />

            <label htmlFor="under-4000">$3000 to $4000</label>
          </div>
        </div>

        {data && <Slideshow products={data} />}
      </div>

      <div className="product-pagination margin-top">
        <Buttons
          button="btn-pagination"
          onClick={previousPage}
          disabled={page === 1}
        >
          Previous
        </Buttons>
        <Buttons
          button="btn-pagination"
          onClick={nextPage}
          disabled={!hasMorePages}
        >
          Next
        </Buttons>
      </div>
    </section>
  );
}

export default ProductsSlideShow;
