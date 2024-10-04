import './index.css'
import { LibraryContext } from '../../context/LibraryContext'
import { useContext } from 'react'
import BooksCard from '../BooksCard'

const Library=()=>{
    const {librarybooks, removeBooks} =useContext(LibraryContext)
    console.log(librarybooks)
    return (
        <div className='library-card'>
            <h1 className='librabry-heading'>My Library</h1>
            {librarybooks.length === 0 ?(
                <p className='no-books'>Your Library is Empty...</p>
            ):(
                <div className='my-books'>
                    {librarybooks.map(each=>(
                        <div className='library-book' key={each.id}>
                            <BooksCard details={each} />
                            <button className='remove-book-button'  onClick={()=>removeBooks(each.id)}>Remove</button>
                        </div>
                    ))}
                </div>
            )
            }
        </div>
    )
}

export default Library