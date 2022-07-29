import { Fragment } from 'react';
import _map from 'lodash/map';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import Container from '@atoms/Container';

import { PAGE_PATH } from '../routes/paths';
import useParam from '../hooks/useParam';
import usePokemon from '../hooks/usePokemon';
import { Pokemon } from '../interfaces/pokemon';

const IndexPage = () => {
  const { pageNumber } = useParam(PAGE_PATH);
  console.log('IndexPage', pageNumber);
  const {
    pokemons,
  } = usePokemon();

  console.log('IndexPage', { pokemons, pageNumber });
  const sectionClasses = classNames(
    'grid',
    'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
    'gap-4 md:gap-6',
    'my-8',
  );

  const cardClasses = classNames(
    'relative',
    'bg-white',
    'rounded-md',
    'overflow-hidden',
    'w-100',
    'transition-all',
    'drop-shadow-md',
    'focus:ring-3 focus:drop-shadow-lg',
    'hover:drop-shadow-lg',
  );
  return (
    <Fragment>
      <Container>
        <section className={sectionClasses}>
          {
            _map(pokemons, ((pokemon: Pokemon) => {
              const { id, name, image } = pokemon;
              const pokemonUrl = `/${name}`;
              return (
                <NavLink key={id} className={cardClasses} to={pokemonUrl}>
                  <span className="absolute top-0 right-0 px-4 py-2 text-sm font-bold bg-gray-50 rounded-md">{ id }</span>
                  <div className="p-6">
                    <img src={image} alt={name} className="max-w-100 h-32 mx-auto" />
                  </div>
                  <div className="font-bold text-center bg-gray-50 py-2">
                    <p>
                      { name }
                    </p>
                  </div>
                </NavLink>
              );
            }))
          }
        </section>
      </Container>
      <Container>
        IndexPage
      </Container>
    </Fragment>
  );
};

export default IndexPage;
