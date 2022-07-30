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
    pageNumber: pageNumber !== null ? Number(pageNumber) : null,
  };
};

export default useParam;
