import axios from 'axios';
import { popularGamesUrl } from '../api';
import { FETCHGAMES } from './actionTypes';

export const loadGames = () => async (dispacth) => {
  const popularGameData = await axios.get(popularGamesUrl());
  dispacth({
    type: FETCHGAMES,
    payload: { popular: popularGameData.data.results },
  });
};
