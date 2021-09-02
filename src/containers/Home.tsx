import React, { useEffect, useState } from 'react'
import { fetchMoviesReq } from 'api/movie'
import MovieCard from 'components/MovieCard'

export default function Home() {
  const [movieList, setMovieList] = useState([]);
  const [loader, setLoader] = useState({
    initial: false,
    favourite: false
  });

  async function fetchMovieHandler() {
    setLoader({ ...loader, initial: true });
    await fetchMoviesReq()
      .then((res: any) => {
        setMovieList(res.results);
        setLoader({ ...loader, initial: false });
      })
      .catch((err: any) => {
        console.log(err.response)
        setLoader({ ...loader, initial: false });
      });
  }

  useEffect(() => {
    fetchMovieHandler();
  }, [])

  return (
    <>
      {renderMovies()}
    </>
  )

  function renderMovies() {
    if (loader.initial) {
      return (
        <div>Loading</div>
      )
    } else if (!movieList.length) {
      return <div>No Movies</div>
    } else {
      return (
        <>
          {movieList.map((movie: any) => <MovieCard movie={movie} key={movie.id} />)}
        </>
      )
    }
  }
}
