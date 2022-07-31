import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _map from 'lodash/map';
import {
  AppState,
} from 'interfaces/store';
import { ApiConfig } from 'config';
import { Pokemon, PokemonResponseData } from 'interfaces/pokemon';
import { setPokemons, setCurrentPage } from 'store/actions/pokedex';
import { getEvolves, getId, getImage } from 'utils/images';
import { PAGE_PATH } from 'routes/paths';

import useParam from './useParam';

const Pokedex = require('pokeapi-js-wrapper');

const { itemsPerPage, limit } = ApiConfig;
const pokedex = new Pokedex.Pokedex(ApiConfig);

const usePokemon = () => {
  const dispatch = useDispatch();
  const { pageNumber, match } = useParam(PAGE_PATH);
  const {
    currentPage,
    pageItems,
    pokemons,
  } = useSelector(({ app }: AppState) => app);

  const getPokemons = useCallback(() => {
    const params = {
      limit,
      offset: 0,
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

  // eslint-disable-next-line max-len
  const getPokemonByName = useCallback((name: string): Promise<Pokemon> => pokedex.getPokemonByName(name)
    .then((response: any): Pokemon => {
      // @ts-ignore
      const {
        types,
        abilities,
        weight,
        height,
        stats,
        base_experience: baseExperience,
      } = response || {};
      const pokemonTypes = _map(types, ({ type }) => type && type.name);
      const pokemonAbilities = _map(abilities, ({ ability }) => ability && ability.name);
      const pokemonStats = _map(stats, (stat) => {
        const {
          base_stat: base,
          effort,
          stat: {
            name: statName = '',
          } = {},
        } = stat;
        return {
          base,
          effort,
          name: statName,
        };
      });
      return {
        ...response,
        ...{
          baseExperience,
          weight,
          height,
          types: pokemonTypes,
          abilities: pokemonAbilities,
          stats: pokemonStats,
        },
      };
    }).catch((e: any) => {
      console.log(e);
      return {};
    }), []);

  const totalPages = !pokemons || !pokemons.length
    ? 0
    : Math.ceil(pokemons.length / itemsPerPage);

  const resetCurrentPage = () => dispatch(setCurrentPage(0));
  const getPokemon = (name: string): Promise<Pokemon> => pokedex.getPokemonSpeciesByName(name)
    .then((pokemonData: PokemonResponseData) => {
      const {
        id,
        name: pokemonName,
        evolution_chain: {
          url: evolutionChain,
        },
      } = pokemonData;
      const evolutionChainId = getId(evolutionChain);
      const image = getImage(id);

      return {
        id,
        name: pokemonName,
        image,
        evolutionChain,
        evolutionChainId,
      };
    }).then((pokemonData: Pokemon): Pokemon => {
      const { evolutionChainId } = pokemonData;

      return pokedex.getEvolutionChainById(evolutionChainId)
        .then((response: PokemonResponseData) => {
          const { chain } = response;
          const evolutions = getEvolves(chain);
          return { ...pokemonData, evolutions };
        });
    });

  useEffect(() => {
    if (match && currentPage !== pageNumber) {
      dispatch(setCurrentPage(pageNumber));
    }
  }, [currentPage, pageNumber, dispatch, match]);

  useEffect(() => {
    if (pokemons && !pokemons.length) {
      getPokemons();
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  return {
    currentPage,
    pageItems,
    totalPages,
    getPokemonByName,

    resetCurrentPage,
    getPokemon,
  };
};

export default usePokemon;
