import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _map from 'lodash/map';
import {
  AppState,
} from 'interfaces/store';
import { ApiConfig } from '../config';
import { Pokemon, PokemonResponseData } from '../interfaces/pokemon';
import setPokemons from '../store/actions/pokedex';
import { getImage } from '../utils/images';

const Pokedex = require('pokeapi-js-wrapper');

const { limit } = ApiConfig;
const pokedex = new Pokedex.Pokedex(ApiConfig);

const usePokemon = () => {
  const dispatch = useDispatch();
  const {
    currentPage,
    pokemons,
  } = useSelector(({ app }: AppState) => app);

  const getPokemons = useCallback((page: number) => {
    const params = {
      limit,
      offset: limit * page,
    };
    pokedex.getPokemonsList(params).then((pokemonsData: PokemonResponseData) => {
      const { results = [] } = pokemonsData || {};
      const items = _map(results, (pokemon: Pokemon) => {
        const { url = '' } = pokemon;
        const urlParts = url.split('/');
        const { length } = urlParts;
        const lastItem = length && length - 2;
        const id = (urlParts && urlParts[lastItem] && Number(urlParts[lastItem])) || 1;
        return { ...pokemon, id, image: getImage(id) };
      });
      dispatch(setPokemons(items));
    });
  }, [dispatch]);

  useEffect(() => {
    if (!pokemons.length) {
      getPokemons(0);
    }
  }, [pokemons, getPokemons]);

  return {
    currentPage,
    pokemons,

    getPokemons,
  };
};

export default usePokemon;
