"use client";

import axios from "axios";
import { pages } from "next/dist/build/templates/app-page";

interface ProductProp {
  productCategory: string;
  checkedValues: [string];
  page: number;
  pageSize: number;
  signal?: string;
}

export const fetchAllProducts = async ({
  productCategory,
  checkedValues,
  page,
  pageSize,
}: ProductProp) => {
  const query = new URLSearchParams();

  if (productCategory) {
    query.append("category", productCategory);
  }

  if (checkedValues.length > 0) {
    query.append("price[gte]", checkedValues[0] + "");
    query.append("price[lte]", checkedValues[1] + "");
  }

  const response = await axios(
    `http://127.0.0.1:3000/api/v1/products?page=${page}&limit=${pageSize}&${query.toString()}`
  );

  const data = response.data.data.products;

  return data;
};
