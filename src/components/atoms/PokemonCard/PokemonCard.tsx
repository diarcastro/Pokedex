import React, { useEffect, useState } from 'react';
import _map from 'lodash/map';

import { BaseComponent } from 'interfaces';
import { NavLink } from 'react-router-dom';
import { Pokemon } from 'interfaces/pokemon';

import usePokemon from 'hooks/usePokemon';
import styles from './styles';

export interface PokemonCardProps extends BaseComponent {
  pokemon: Pokemon;
  fullCard?: boolean;
}

const PokemonCard = ({ pokemon, fullCard = false }: PokemonCardProps) => {
  const [types, setTypes] = useState<string[] | null>(null);
  const {
    getTypes,
  } = usePokemon();
  const {
    id, name, image,
  } = pokemon;

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

  useEffect(() => {
    if (!types) {
      getTypes(name).then((pokemonTypes) => {
        setTypes(pokemonTypes);
      });
    }
  }, [name, getTypes, types]);

  const cardContent = (
    <React.Fragment>
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
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image(fullCard)} />
      </div>
      { typesElement }
      <div className={styles.name}>
        {name}
      </div>
    </React.Fragment>
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
    <React.Fragment>
      { linkCardContent }
      { fullCardContent }
    </React.Fragment>
  );
};

export default PokemonCard;
