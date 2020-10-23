import ApiService from '@services/api.service';

const useUpdateGame = ({ game, setGame, setError }) => async () => {
  const data = await ApiService.updateGame(game.gameId, game);
  if (data.message) {
    setError(data.message);
  } else {
    setGame({ ...game, ...data });
  }
};

export default useUpdateGame;
