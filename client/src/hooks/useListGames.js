import ApiService from '@services/api.service';

const useListGames = ({ setLoading, setError, setGames, game }) => async () => {
  setLoading(true);
  const data = await ApiService.listGames();
  setLoading(false);

  if (data.message) {
    setError(data.message);
  } else if (data.started[0]._id === game.gameId) {
    setGames({ ...data, started: data.started.slice(1) });
  } else {
    setGames(data);
  }
};

export default useListGames;
