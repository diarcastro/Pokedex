/* eslint-disable */
import { Fragment, useEffect, useState } from 'react';
import Container from '@atoms/Container';
import _map from 'lodash/map';
import _filter from 'lodash/filter';

import useParam from 'hooks/useParam';
import { ITEM_PATH } from 'routes/paths';
import { NavLink } from 'react-router-dom';
import usePokemon from '../hooks/usePokemon';
import { Pokemon } from '../interfaces/pokemon';
import PokemonCard from '@atoms/PokemonCard';

const PokemonPage = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const { name, evolutions } = pokemon || {};
  const filteredEvolutions = _filter(evolutions, (evo) => evo.name !== name);
  const isLoading = !pokemon;
  const {
    currentPage,
    getPokemon,
  } = usePokemon();

  const { pokemonName } = useParam(ITEM_PATH);

  const goBackUrl = currentPage !== null ? `/page/${currentPage + 1}` : '/';

  useEffect(() => {
    getPokemon(pokemonName || '').then((pokemonData) => {
      setPokemon(pokemonData);
    });
  }, [pokemonName]);

  const evolutionsElement = filteredEvolutions && filteredEvolutions.length > 0 && (
    <section className="my-6 bg-yellow-50 rounded-md">
      <h2 className="text-xl mb-6 font-bold p-6 bg-blue-100 rounded-md">
        {name}
        {' '}
        Evolutions
      </h2>
      <article className="grid gap-6 px-6 pb-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
          _map(filteredEvolutions, (evo) =>
            <PokemonCard key={evo.id} pokemon={evo} />
          )
        }
      </article>
    </section>
  );

  return (
    <Fragment>
      <Container>
        <NavLink to={goBackUrl} className="mt-6 mb-10 p-3 bg-blue-400 inline-flex rounded-sm text-white items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
               className="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
          </svg>
          <span className="ml-2">
            Go back
          </span>
        </NavLink>
      </Container>

      <Container>
        {
          isLoading
          && (
            <div className="px-4 my-3 text-center animate-pulse p-1 text-xs">
              Loading Pokemon data...
            </div>
          )
        }
        {
          pokemon
          && <PokemonCard pokemon={pokemon} fullCard />
        }

        {evolutionsElement}
      </Container>
    </Fragment>
  );
};

export default PokemonPage;
