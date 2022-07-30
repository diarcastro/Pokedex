import React, { useEffect, useState } from 'react';
import _map from 'lodash/map';

import { BaseComponent } from 'interfaces';
import { NavLink } from 'react-router-dom';
import { Pokemon } from 'interfaces/pokemon';

import usePokemon from 'hooks/usePokemon';
import styles from './styles';

export interface PokemonCardProps extends BaseComponent {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const [types, setTypes] = useState<string[] | null>(null);
  const {
    getTypes,
  } = usePokemon();
  const {
    id, name, image,
  } = pokemon;

  const typesElement = types && types.length
    ? (
      <div className="px-4 my-3 text-center">
        {_map(types, (type: string) => (
          <span
            key={type}
            className="rounded-md mr-3 bg-blue-100 p-1 text-xs"
          >
            {type}
          </span>
        ))}
      </div>
    )
    : (
      <div className="px-4 my-3 text-center animate-pulse p-1 text-xs">Loading types...</div>
    );

  useEffect(() => {
    if (!types) {
      getTypes(name).then((pokemonTypes) => {
        setTypes(pokemonTypes);
      });
    }
  }, [name, getTypes, types]);

  return (
    <NavLink key={id} className={styles.component} to={`/${name}`}>
      <span className={styles.cardNumber}>{id}</span>
      <span className="sr-only">
        Go to
        {name}
        page
        {' '}
      </span>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      { typesElement }
      <div className={styles.name}>
        {name}
      </div>
    </NavLink>
  );
};

export default PokemonCard;
