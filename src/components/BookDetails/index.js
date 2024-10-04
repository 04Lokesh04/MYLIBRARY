import './index.css'
import Booksdata from '../../Bookdata'
import { useParams } from 'react-router-dom'
import { LibraryContext } from '../../context/LibraryContext'
import { useContext } from 'react'

const BookDetails=()=>{
    const {id}=useParams()
    const book=Booksdata.books.find(each=>each.id===parseInt(id))
    const {addBooks}=useContext(LibraryContext)


    return (
        <div className='Book-details'>
            <div className='header'>
                <h1 className='heading-title'>{book.title}</h1>
                <button className='add-button' onClick={()=>addBooks(book)}>Add..</button>
            </div>
            <p className='para-author'>Author: {book.author}</p>
            <p className='para-genre'>{book.genre}</p>
            <p className='para-rating'>Rating - {book.rating}</p>
            <p className='para-description'>{book.description}</p>
            <p className='para-published'>Published on {book.publication_year}</p>
        </div>
    )
}

export default BookDetails
