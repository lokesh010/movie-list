import React, { useEffect, useState } from 'react'
import FavouriteCard from 'components/FavouriteCard'
import { useSelector, useDispatch } from 'react-redux';
import { getFavourites, removeFav } from 'redux/favourite';
import { Empty, message } from 'antd';
import { fetchMoviesReq } from 'api/movie';

export default function Favourite() {
  const dispatch = useDispatch();
  const randomBool = (): Boolean => Math.random() < 0.5;
  const [movieList, setMovieList] = useState([]);
  const [loader, setLoader] = useState({
    initial: false,
    favourite: [] as any
  });
  // selectors
  const favourites = useSelector(getFavourites);

  const intersection = () => movieList.filter((movie: any) => favourites.includes(movie.id));

  // changes particular loader among the movie card list
  const favLoaderHandler = (i: number) =>
    setLoader(prevState => ({
      ...prevState,
      favourite: prevState.favourite.map((favBool: boolean, i2: number) => {
        if (i === i2) return !favBool
        else return favBool;
      })
    }))

  const removeFavouriteHandler = (e: Event, id: number, index: number) => {
    e.stopPropagation();
    favLoaderHandler(index);
    setTimeout(() => {
      if (randomBool()) {
        dispatch(removeFav(id));
        message.success('Movie removed from Favourites');
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

  async function fetchMovieHandler() {
    setLoader({ ...loader, initial: true });
    await fetchMoviesReq()
      .then((res: any) => {
        setMovieList(res.results);
        setLoader({
          initial: false,
          favourite: Array(favourites.length).fill(false)
        });
      })
      .catch((err: any) => {
        message.error(err?.response?.message || 'Error fetching movies, try again later');
        setLoader({ ...loader, initial: false });
      });
  }

  useEffect(() => {
    fetchMovieHandler();
  }, [])
  useEffect(() => {
    setLoader({ ...loader, favourite: Array(favourites.length).fill(false) });
  }, [favourites])

  return (
    <>{renderMovies()}</>
  )

  function renderMovies() {
    if (!favourites.length) return <Empty description={"No Favourite Movies"} />;
    else {
      return (
        <>
          {intersection().map((movie: any, index: number) =>
            <FavouriteCard
              key={movie.id}
              index={index}
              movie={movie}
              removeFavourite={removeFavouriteHandler}
              isFavourite={isFavourite}
              isLoading={loader.favourite[index]}
            />
          )}
        </>
      )
    }
  }
}
