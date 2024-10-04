import { createContext } from "react";
import { useState } from "react";

export const LibraryContext=createContext()

export const LibraryProvider=({children})=>{

    const [librarybooks, setlibrarybooks]=useState([])

    const addBooks=(books)=>{
        setlibrarybooks([...librarybooks, books ])
    }

    const removeBooks=(bookid)=>{
        const filterd=librarybooks.filter(each=>each.id!==bookid)

        setlibrarybooks([...filterd])
    }

    return (
        <LibraryContext.Provider value={{librarybooks, addBooks, removeBooks}}>
            {children}
        </LibraryContext.Provider>
    )
}