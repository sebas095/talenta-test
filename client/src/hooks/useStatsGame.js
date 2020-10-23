import ApiService from '@services/api.service';

const useStatsGame = ({ setError, setStats }) => async () => {
  const data = await ApiService.getStats();
  if (data.message) {
    setError(data.message);
  } else {
    setStats(data);
  }
};

export default useStatsGame;
