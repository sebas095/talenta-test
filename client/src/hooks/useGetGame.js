import ApiService from '@services/api.service';

const useGetGame = ({ game, setGame, setError }) => async () => {
  const data = await ApiService.getGame(game.gameId);
  if (data.message) {
    setError(data.message);
  } else {
    setGame({ ...game, ...data });
  }
};

export default useGetGame;
