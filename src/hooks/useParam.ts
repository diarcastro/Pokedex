import { useMatch } from 'react-router-dom';

const useParam = (pattern: string) => {
  const match = useMatch(pattern);
  const {
    params: {
      pokemonName = '',
      pageNumber = 0,
    } = {},
  } = match || {};

  return {
    pokemonName,
    pageNumber,
  };
};

export default useParam;
