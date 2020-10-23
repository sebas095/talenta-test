import ApiService from '@services/api.service';

const useUpdateGame = ({ game, setError }) => async () => {
  if (!localStorage.getItem('gameId')) return;
  const data = await ApiService.updateGame(
    localStorage.getItem('gameId'),
    game,
  );
  if (data.message) {
    setError(data.message);
  }
};

export default useUpdateGame;
