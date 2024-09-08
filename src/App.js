import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg"
import MovieCard from "./MovieCard";

//58315575
const API_URL = "http://www.omdbapi.com?apikey=58315575";


const App = () => {

  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const searchMovies = async (title) => {
  const response = await fetch(`${API_URL}&s=${title}`)
  const data = await response.json()

  setMovies(data.Search)
  console.log(data.Search)
 }


 {/*Hook*/}
  useEffect(() =>  searchMovies('superman'),[])

  return(
    <div className="app"> 
      <h1>MovieLand</h1>

      <div className="search">
        
        {/* The input search bar */}
        <input
          placeholder="search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          {/* The search icon */}
          <img
            src = {SearchIcon}
            alt = "search"
            onClick={() => {searchMovies(searchTerm)}}
            />
      </div>

      {movies?.length > 0 ?
        (
          <div className="container">
          {movies.map(movie => (
            <MovieCard movie = {movie} />
          ))}
          </div>
        ) : 
        (
          <div className="empty">
            <h2> No movies Found</h2>
          </div>
        )
      }


    </div>
  );
}

export default App;