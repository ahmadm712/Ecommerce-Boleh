import axios from "axios";
import { createContext, useEffect, useState } from "react";

// "product_id": 12,
//             "product_name": "Nopia",
//             "product_stock": "100",
//             "product_price": "20000",
//             "product_weight": "100",
//             "product_image": "https://i.ibb.co/r3G73WR/nopia.jpg",
//             "product_origin_category": "Banyumas",
//             "product_category": "Makanan",
//             "product_favorite_status": "0",
//             "product_description": "Nopia merupakan mak

function createNewProduct(product) {
  return {
    product_id: product.product_id,
    product_name: product.product_name,
    product_stock: product.product_stock,
    product_price: product.product_price,
    product_weight: product.product_weight,
    product_image: product.product_image,
    product_origin_category: product.product_origin_category,
    product_category: product.product_category,
    product_favorite_status: product.product_favorite_status,
    product_description: product.product_description,
  };
}

const defaultValue = [];

export const ProductContext = createContext(defaultValue);

export function ProductProvider({ children }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const url = "https://oleh-oleh-skilvul.000webhostapp.com/api/product";
    axios
      .get(url)
      .then((respone) => respone.data.product)
      .then((data) => data.map(createNewProduct))
      .then(setProduct);
  }, []);

  const contextValue = {
    product: product.slice(0, 5),
  };

  console.log("Context", contextValue);

  return <ProductContext.Provider value={contextValue}>{children}</ProductContext.Provider>;
}
