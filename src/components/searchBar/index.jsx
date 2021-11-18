import React, { useState, useEffect, useRef} from 'react'
import styled from "styled-components"
import { IoClose, IoSearch } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { useClickOutside } from "react-click-outside-hook";
import MoonLoader from "react-spinners/MoonLoader";
import { useDebounce } from '../../hooks/debounceHook';
import axios from 'axios';
import { ProductShows } from '../product';
import { useHistory } from "react-router";

const WarningMessage = styled.span`
  color: #a1a1a1;
  font-size: 14px;
  display: flex;
  align-self:center;
  justify-self:center;
`;

const SearchBarContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 30em;
    height: 2em;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0px 2px 5px 3px rgba(0, 0 ,0.14);

   `;

const SearchInputContainer = styled(motion.div)`
    widht: 100%;
    min-height: 2em;
    display: flex;
    align-items: center;
    position: relative;
    padding: 2px 15px;
    
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  font-size: 17px;
  color: #12112e;
  font-weight: 500;
  border-radius: 6px;
  background-color: transparent;
  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }
  &::placeholder {
    color: #bebebe;
    transition: all 250ms ease-in-out;
  }
`;

const SearchIcon = styled.span`
  color: #bebebe;
  font-size: 20px;
  margin-right: 10px;
  margin-top: 2px;
  vertical-align: middle;
`;

const CloseIcon = styled(motion.span)`
  color: #bebebe;
  font-size: 23px;
  vertical-align: middle;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  &:hover {
    color: #dfdfdf;
  }
`;

const containerVariants = {
    expanded: {
      height: "30em",
    },
    collapsed: {
      height: "2em",
    },
  };
  const containerTransition = { type: "spring", damping: 22, stiffness: 150 };

const LineSeperator = styled.span`
  display: flex;
  min-width: 100%;
  min-height: 2px;
  background-color: #d8d8d878;
`;

const SearchContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;
const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 1em;
  align-items: center;
  justify-content: center;
`;

export default function SearchBar(props) {
    const [isExpanded, setExpanded] = useState(false);
    const [parentRef, isClickedOutside] = useClickOutside();
    const inputRef = useRef();
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setLoading] = useState(false)
    const [productShow, setProductShow] = useState();
    const [noProductShow, setNoProductShow] = useState(false);

    const isEmpty = !productShow || productShow.length === 0;
    const history = useHistory();

    const chageHandle = (e) => {
      e.preventDefault();
      if (e.target.value.trim() === "") setNoProductShow(false);
      setSearchQuery(e.target.value);
    }

    const expandContainer = () => {
        setExpanded(true);
      };

      const collapseContainer = () => {
        setExpanded(false);
        setSearchQuery("")
        setLoading(false)
        setProductShow([]);
        setNoProductShow(false);
        if (inputRef.current) inputRef.current.value = "";
      };

      useEffect(() => {
        if (isClickedOutside) collapseContainer();
      }, [isClickedOutside]);

      const prepareSearchQuery = (query) => {
        const url = `https://oleh-oleh-skilvul.000webhostapp.com/api/product/name/${query}`;
    
        return encodeURI(url);
      };

      const searchProduct = async () => {
        if(!searchQuery || searchQuery.trim() === "")
        return;

        setLoading(true)
        setNoProductShow(false);

        const URL = prepareSearchQuery(searchQuery);
        const response = await axios.get(URL).catch((err)=>{
          console.log("Error : ",err)
        });

      
        if (response) {
          console.log("Response: ", response.data.product);
          if (response.data.product && response.data.product.length === 0) setNoProductShow(true);
          
          setProductShow(response.data.product)
        }


        setLoading(false)
      }


      useDebounce(searchQuery, 500, searchProduct)
      // console.log("value : ", searchQuery)

    return(
    <SearchBarContainer 
      animate={isExpanded ? "expanded" : "collapsed"} variants={containerVariants} 
      transition={containerTransition}
      ref={parentRef} 
      
    >
        <SearchInputContainer>
            <SearchIcon>
                <IoSearch />
            </SearchIcon>
            <SearchInput 
            placeholder="Cari Produk..."
            onFocus={expandContainer}
            ref={inputRef}
            value={searchQuery}
            onChange={chageHandle}
            />
            <AnimatePresence>
                {isExpanded && (
                <CloseIcon 
                key="close-icon"
                initial={{opacity: 0}}
                animate={{opacity: 1}} 
                exit={{opacity: 0}} 
                onClick={collapseContainer}
                transition={{duration: 0.2}}
                >
                    <IoClose  />
                </CloseIcon>
                )}
            </AnimatePresence>
        </SearchInputContainer>
        {isExpanded && <LineSeperator />}
        {isExpanded && (
        <SearchContent>
            {isLoading && (
            <LoadingWrapper>
                <MoonLoader loading color="#000" size={20} />
            </LoadingWrapper>
             )}

              {!isLoading && isEmpty && !noProductShow && (
                <LoadingWrapper>
                  <WarningMessage>Start typing to Search</WarningMessage>
                </LoadingWrapper>
              )}

             {!isLoading && noProductShow && (
                <LoadingWrapper>
                  <WarningMessage>
                    Produk tidak ditemukan!
                  </WarningMessage>
                </LoadingWrapper>
              )}
            {!isLoading && !isEmpty && (
            <div>
              {productShow.map(( product ) => (
                <ProductShows 
                  key={product.product_id}
                  product_id={product.product_id}
                  image={product.product_image}
                  name={product.product_name}
                  price={product.product_price}
                />
              ))}
            </div>
          )}
        </SearchContent>
      )}
    </SearchBarContainer>
    );
}
