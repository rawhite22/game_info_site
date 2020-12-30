import axios from 'axios';
import { popularGamesUrl, newGamesUrl, upcomingGamesUrl } from '../api';
import { FETCHGAMES } from './actionTypes';

export const loadGames = () => async (dispacth) => {
  const popularGameData = await axios.get(popularGamesUrl());
  const newGameData = await axios.get(newGamesUrl());
  const upcomingGameData = await axios.get(upcomingGamesUrl());
  dispacth({
    type: FETCHGAMES,
    payload: {
      popular: popularGameData.data.results,
      upcoming: upcomingGameData.data.results,
      newgames: newGameData.data.results,
    },
  });
};
