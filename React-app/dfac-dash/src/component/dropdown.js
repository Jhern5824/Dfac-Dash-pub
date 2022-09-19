import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {useState, useEffect} from 'react'


function HomeDropDown() {
    const [movieData, setMovieData] = useState([]);
    const [searchType, setSearchType] = useState([])
    const [moviesID, setMoviesID] = useState({})
    const [toggle, setToggle] = useState(0)


    useEffect(() => {
      if (searchType == 1) {
        fetch(`http://localhost:3001/movies`)
          .then(res => res.json())
          .then(data => setMovieData(data))

      } else if (searchType == 5) {
        fetch(`http://localhost:3001/movies/${moviesID}`)
          .then(res => res.json())
          .then(data => setMovieData(data))
      } else if (searchType == 6) {
        fetch(`http://localhost:3001/movies`)
          .then(res => res.json())
          .then(data => {
            const filteredMovies = data.filter(movie => movie.title.toLowerCase().includes(moviesID.toLowerCase()))
            setMovieData(filteredMovies)
          })
      }
    }, [toggle])

    const switchFunc = (event) => {
      if (event.target.value == 1) {
        setToggle((toggle + 1))
      }
      setSearchType(event.target.value);
    }

    const onKeyDown = (event) => {
      if (event.key === 'Enter') {
        if (searchType == 5) {
          setMoviesID(event.target.value);
          setToggle((toggle + 1))
        } else if (searchType == 6) {
          setMoviesID(event.target.value);
          setToggle((toggle + 1))
        }
      }
    }

    return (
      <div>
        <div className="search-div">
          <div className='dropdown-menu'>
            <label htmlFor='search-select'>Choose Search Type: </label>
            <select
              onChange={(e) => switchFunc(e)}
              name='select-dropdown'
              id='search-select'
            >
              <option value={1}>Please choose an option </option>
              <option data='AllSearch' id="AllSearch" value={1} >Return a List of All movies</option>
              <option id="TitleMatch" value={6} >Return Movies with similar Titles</option>
            </select>
          </div>

          <div className='searchbar-div'>
            {searchType > 3 ? (
              <input
                id='search-bar'
                type='search'
                placeholder='Search movies here!'
                onKeyDown={(e) => onKeyDown(e)}
              />
            ) : (<></>)}
          </div>

        </div>
      </div>
    )
  }

  export default HomeDropDown;