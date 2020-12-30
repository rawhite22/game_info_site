const initState = {
  popular: [],
  newGames: [],
  upComing: [],
  searched: [],
};
const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_GAMES':
      return {
        ...state,
        popular: action.payload.popular,
        upComing: action.payload.upcoming,
        newGames: action.payload.newgames,
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
