import ApiService from '@services/api.service';

const useCreateGame = ({ setError, setGame, game }) => async () => {
  const data = await ApiService.createGame({ board: Array(9).fill(null) });
  if (data.message) {
    setError(data.message);
  } else {
    localStorage.setItem('gameId', data._id);
    setGame({ ...game, ...data, gameId: data._id });
  }
};

export default useCreateGame;
