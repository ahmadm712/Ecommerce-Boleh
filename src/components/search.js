import { createContext } from "react";
import { useState, useEffect } from "react";

const initialState = [];
export const searchContext = createContext(initialState);
export function SearchProvider(props) {
  const [search, setSearch] = useState(initialState);

  const getDataSearch = async () => {
    const response = await fetch(
      "https://oleh-oleh-skilvul.000webhostapp.com/api/product"
    );
    const data = await response.json();
    const search = data.slice(0, 8);
    setSearch(search);
  };
  console.log(getDataSearch());

  useEffect(() => {
    getDataSearch();
  }, []);

  return <div></div>;
}
