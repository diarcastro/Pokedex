import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _map from 'lodash/map';
import {
  AppState,
} from 'interfaces/store';
import { ApiConfig } from 'config';
import { Pokemon, PokemonResponseData } from 'interfaces/pokemon';
import { setPokemons, setCurrentPage } from 'store/actions/pokedex';
import { getId, getImage } from 'utils/images';
import { PAGE_PATH } from 'routes/paths';

import useParam from './useParam';

const Pokedex = require('pokeapi-js-wrapper');

const { limit } = ApiConfig;
const pokedex = new Pokedex.Pokedex(ApiConfig);

const usePokemon = () => {
  const dispatch = useDispatch();
  const { pageNumber, match } = useParam(PAGE_PATH);
  const {
    currentPage,
    pageItems,
    pokemons,
  } = useSelector(({ app }: AppState) => app);

  useEffect(() => {
    if (match && currentPage !== pageNumber) {
      dispatch(setCurrentPage(pageNumber));
    }
  }, [currentPage, pageNumber, dispatch, match]);

  const getPokemons = useCallback((page: number) => {
    const params = {
      limit,
      offset: limit * page,
    };

    pokedex.getPokemonsList(params).then((pokemonsData: PokemonResponseData) => {
      const { results = [] } = pokemonsData || {};
      const items = _map(results, (pokemon: Pokemon) => {
        const { url = '' } = pokemon;
        const id = getId(url);
        return { ...pokemon, id, image: getImage(id) };
      });

      dispatch(setPokemons(items));
    });
  }, [dispatch]);

  const getTypes = useCallback((name: string): Promise<string[]> => pokedex.getPokemonByName(name)
    .then((response: any[]): string[] => {
      // @ts-ignore
      const { types } = response || {};
      return _map(types, ({ type }) => type && type.name);
    }), []);

  useEffect(() => {
    if (currentPage !== null && !pokemons.length) {
      getPokemons(currentPage);
    }
  }, [currentPage, pokemons, getPokemons]);

  return {
    currentPage,
    pageItems,
    getTypes,
  };
};

export default usePokemon;
