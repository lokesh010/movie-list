import React, { useEffect, useState } from 'react'
import { fetchMoviesReq } from 'api/movie'
import MovieCard from 'components/MovieCard'
import { useSelector, useDispatch } from 'react-redux';
import { addFav, getFavourites, removeFav } from 'redux/favourite';
import { Skeleton, Empty, message } from 'antd';

export default function Home() {
  const dispatch = useDispatch();
  const randomBool = (): Boolean => Math.random() < 0.5;
  const [movieList, setMovieList] = useState([]);
  const [loader, setLoader] = useState({
    initial: false,
    favourite: [] as any
  });
  // selectors
  const favourites = useSelector(getFavourites);

  // changes particular loader among the movie card list
  const favLoaderHandler = (i: number) =>
    setLoader(prevState => ({
      ...prevState,
      favourite: prevState.favourite.map((favBool: boolean, i2: number) => {
        if (i === i2) return !favBool
        else return favBool;
      })
    }))

  async function fetchMovieHandler() {
    setLoader({ ...loader, initial: true });
    await fetchMoviesReq()
      .then((res: any) => {
        setMovieList(res.results);
        setLoader({
          initial: false,
          favourite: Array(res.results.length).fill(false)
        });
      })
      .catch((err: any) => {
        message.error(err?.response?.message || 'Error fetching movies, try again later');
        setLoader({ ...loader, initial: false });
      });
  }

  const addFavouriteHandler = (e: Event, id: number, index: number) => {
    e.stopPropagation();
    favLoaderHandler(index);
    setTimeout(() => {
      if (randomBool()) {
        dispatch(addFav(id));
        message.success('Movie added to Favourites');
        favLoaderHandler(index);
      } else {
        message.error('Movie cannot be added to Favourites');
        favLoaderHandler(index);
      }
    }, 1000)
  }
  const removeFavouriteHandler = (e: Event, id: number, index: number) => {
    e.stopPropagation();
    favLoaderHandler(index);
    setTimeout(() => {
      if (randomBool()) {
        dispatch(removeFav(id));
        message.success('Movie removed from Favourites');
        favLoaderHandler(index);
      } else {
        message.error('Movie cannot be removed from Favourites');
        favLoaderHandler(index);
      }
    }, 1000)
  }

  const isFavourite = (id: number) => {
    const findFav = favourites.find(fav => fav === id);
    return findFav;
  }

  useEffect(() => {
    fetchMovieHandler();
  }, [])

  return (
    <>{renderMovies()}</>
  )

  function renderMovies() {
    if (loader.initial) return <Skeleton active />;
    else if (!movieList.length) return <Empty description={"No Movies"} />;
    else {
      return (
        <div>
          {movieList.map((movie: any, index: number) =>
            <MovieCard
              key={movie.id}
              index={index}
              movie={movie}
              addFavourite={addFavouriteHandler}
              removeFavourite={removeFavouriteHandler}
              isFavourite={isFavourite}
              isLoading={loader.favourite[index]}
            />
          )}
        </div>
      )
    }
  }
}
