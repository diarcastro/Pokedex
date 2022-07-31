import { Fragment, useEffect, useState } from 'react';
import _map from 'lodash/map';

import { BaseComponent } from 'interfaces';
import { NavLink } from 'react-router-dom';
import { Pokemon } from 'interfaces/pokemon';
import Heading, { HeadingSize } from '@atoms/Heading';

import usePokemon from 'hooks/usePokemon';
import styles from './styles';

export interface PokemonCardProps extends BaseComponent {
  pokemon: Pokemon;
  fullCard?: boolean;
}

const PokemonCard = ({ pokemon, fullCard = false }: PokemonCardProps) => {
  const [pokemonData, setPokemonData] = useState<Pokemon | null>(pokemon);
  const {
    getPokemonByName,
  } = usePokemon();
  const {
    id,
    name,
    image,
    types = [],
    baseExperience,
    height,
    weight,
    abilities,
    stats,
  } = pokemonData || {};

  const typesElement = types && types.length
    ? (
      <div className="px-4 my-3 text-center flex gap-3 justify-center">
        {_map(types, (type: string) => (
          <span
            key={type}
            className={`rounded-md bg-${type} px-1.5 py-1 text-xs shadow-sm`}
          >
            {type}
          </span>
        ))}
      </div>
    )
    : (
      <div className="px-4 my-3 text-center animate-pulse p-1 text-xs">Loading types...</div>
    );

  /* Updating pokemon if the pokemon change */
  useEffect(() => {
    if (pokemon.name !== pokemonData?.name) {
      setPokemonData(pokemon);
    }
  }, [pokemon, pokemonData, setPokemonData]);

  /* Getting pokemon data */
  useEffect(() => {
    if (!types.length && name) {
      getPokemonByName(pokemon.name).then((pokemonDataResult: Pokemon) => {
        setPokemonData({ ...pokemonData, ...pokemonDataResult });
      });
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [name, getPokemonByName, types, pokemon]);

  const statsComponent = fullCard && (
    <section className="sm:w-1/2">
      <Heading size={HeadingSize.H2}>Stats and info</Heading>
      <article className="mb-4">
        <p>
          <strong>Height: </strong>
          {' '}
          {height}
        </p>
        <p>
          <strong>Weight: </strong>
          {' '}
          {weight}
        </p>
        <p>
          <strong>Base experience: </strong>
          {' '}
          {baseExperience}
        </p>
      </article>
      <article className="mb-4">
        <Heading size={HeadingSize.H3}>Abilities</Heading>
        {
          _map(
            abilities,
            (ability) => (<span key={ability} className="p-1 mr-2 bg-blue-100 text-xs rounded-sm">{ability}</span>),
          )
        }
      </article>
      <article className="mb-4">
        <Heading size={HeadingSize.H3}>Stats</Heading>
        {
          _map(
            stats,
            ({ name: statName, base, effort }) => (
              <p key={statName}>
                <strong>{statName}</strong>
                <span className="text-xs">
                  {' '}
                  Base:
                  {' '}
                  {base}
                  {', '}
                  Effort:
                  {' '}
                  {effort}
                </span>
              </p>
            ),
          )
        }
      </article>
    </section>
  );

  const cardContent = (
    <Fragment>
      <span className={styles.cardNumber}>{id}</span>
      {
        !fullCard && (
          <span className="sr-only">
            Go to
            {name}
            {' '}
            page
          </span>
        )
      }
      <div className={styles.imageContainer(fullCard)}>
        <div>
          <img src={image} alt={name} className={styles.image(fullCard)} />
          <div className="mt-6">
            { fullCard && typesElement }
          </div>
        </div>
        {statsComponent}
      </div>
      { !fullCard && typesElement }
      <div className={styles.name}>
        {name}
      </div>
    </Fragment>
  );

  const linkCardContent = !fullCard && (
    <NavLink className={styles.component(fullCard)} to={`/${name}`}>
      {cardContent}
    </NavLink>
  );

  const fullCardContent = fullCard && (
    <section className={styles.component(fullCard)}>
      {cardContent}
    </section>
  );

  return (
    <Fragment>
      { linkCardContent }
      { fullCardContent }
    </Fragment>
  );
};

export default PokemonCard;
