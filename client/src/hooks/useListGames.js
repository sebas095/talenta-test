import ApiService from '@services/api.service';

const useListGames = ({ setLoading, setError, setGames }) => async () => {
  setLoading(true);
  const data = await ApiService.listGames();
  setLoading(false);

  if (data.message) {
    setError(data.message);
  } else {
    setGames(data);
  }
};

export default useListGames;
