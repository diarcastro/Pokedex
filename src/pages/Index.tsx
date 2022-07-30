import _map from 'lodash/map';
import classNames from 'classnames';

import Container from '@atoms/Container';
import PokemonCard from '@atoms/PokemonCard';

import usePokemon from 'hooks/usePokemon';
import { Pokemon } from 'interfaces/pokemon';

const IndexPage = () => {
  const {
    pageItems,
  } = usePokemon();

  const sectionClasses = classNames(
    'grid',
    'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
    'gap-4 md:gap-6',
    'my-8',
  );
  return (
    <Container>
      <section className={sectionClasses}>
        {
          _map(
            pageItems, (
              (pokemon: Pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />),
          )
        }
      </section>
    </Container>
  );
};

export default IndexPage;
