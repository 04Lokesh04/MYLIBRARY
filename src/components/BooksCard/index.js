import './index.css'
import { Link } from 'react-router-dom'

const BooksCard=(props)=>{
    const {details}=props 
    const {title, id, author, genre, rating, description}=details
    return(
        <Link to={`/books/${id}`} className='book-link'>
            <li className='list'>
                <div className='card'>
                    <h1 className='book-title'>{title} </h1>
                    <p className='book-rating'>Rating - <span>{rating}</span></p>
                    <p className='book-author'>Author - {author} - published on <span>{details.publication_year}</span></p>
                    <p className='book-genre'>Genre - {genre}</p>
                    <p className='book-description'>{description}</p>    
                </div>
            </li>
        </Link>
    )
}

export default BooksCard
