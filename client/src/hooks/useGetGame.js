import ApiService from '@services/api.service';

const useGetGame = ({ game, setGame, setError }) => async () => {
  if (!localStorage.getItem('gameId')) return;
  const data = await ApiService.getGame(localStorage.getItem('gameId'));
  if (data.message) {
    setError(data.message);
  } else {
    setGame({ ...game, ...data });
  }
};

export default useGetGame;
