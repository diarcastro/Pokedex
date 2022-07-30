import { useMatch } from 'react-router-dom';

const useParam = (pattern: string) => {
  const match = useMatch(pattern);
  const {
    params: {
      pokemonName = null,
      pageNumber = null,
    } = {},
  } = match || {};

  return {
    match,
    pokemonName,
    pageNumber: pageNumber !== null ? Number(pageNumber) - 1 : null,
  };
};

export default useParam;
