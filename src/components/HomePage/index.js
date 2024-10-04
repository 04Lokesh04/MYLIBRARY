import './index.css'
import { useState, useEffect } from "react";
import Bookscard from '../BooksCard'
import { Link } from "react-router-dom";
import Booksdata from '../../Bookdata'

const HomePage=()=>{
    const [BooksList, setBooksList]=useState([])
    const [filteredBooks, setFilteredBooks]=useState([])
    const [searchInput, setSearchInput]=useState('')
    
    
    useEffect(() => {
        setBooksList(Booksdata.books)
        setFilteredBooks(Booksdata.books)
    }, [])

    const handleSearch=(e)=>{
        e.preventDefault()
        const searchvalue=searchInput.toLowerCase()
        const filterd=BooksList.filter(each=>
            each.title.toLowerCase().includes(searchvalue)||
            each.author.toLowerCase().includes(searchvalue)||
            each.genre.toLowerCase().includes(searchvalue)
        )
        setFilteredBooks(filterd)
    }

return(
        <div className="Main">
            <h1 className="main-heading">Virtual Book Store</h1>
            <p className="main-para">Search for any book you like <span><Link to='/library'><button className="library-button">My Library</button></Link></span></p>
            <form className='form' onSubmit={handleSearch}>
                <input className="input-element" placeholder='Enter title or author or genre' 
                type='search'
                value={searchInput}
                onChange={(e)=>setSearchInput(e.target.value)} />
                <button className="Search-button" type="submit">Find</button>
                
            </form>
            
            <ul className="books-list">
                {filteredBooks.map(each=>(
                    <Bookscard details={each} key={each.id} />
                ))}
            </ul>
        </div>

)
}

export default HomePage