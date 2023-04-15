import { Component } from "react";
import './search-box.styles.css';

const Searchlist = ({className,placeholder,onChangeHandler}) =>(
            <input 
            className={`search-box ${className}`} 
            type= 'search' 
            placeholder={placeholder} 
            onChange={onChangeHandler}/>
       
);
export default Searchlist;