import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage'
import BookDetails from './components/BookDetails'
import Library from './components/Library'
import {LibraryProvider} from './context/LibraryContext'

const App=()=>{
  return (
   <LibraryProvider>
     <Routes>
      <Route exact path='/' element={<HomePage/>}/>
      <Route exact path='/books/:id' element={<BookDetails/>}/>
      <Route exact path='/library' element={<Library/>}/>
    </Routes>
   </LibraryProvider>
  )
}
export default App;
