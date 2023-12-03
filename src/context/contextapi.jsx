/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { fetchDataFromApi } from "../utils/api";

export const Context=React.createContext()

export const AppContext=(props)=>{
    const[loading,setLoading]=useState(false)
    const[searchResult,setSearchResult]=useState('')
    const[selectedCategories,setSelectedCategories]=useState('New')

    const contextValues={
        loading,
        setLoading,
        searchResult,
        setSearchResult,
        selectedCategories,
        setSelectedCategories
    }
    return (
        <Context.Provider value={contextValues}>
            {props.children}
        </Context.Provider>
    )
}
