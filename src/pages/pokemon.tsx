import { Fragment } from 'react';
import Container from '@atoms/Container';

import useParam from '../hooks/useParam';
import { ITEM_PATH } from '../routes/paths';

const PokemonPage = () => {
  const { pokemonName } = useParam(ITEM_PATH);
  console.log('PokemonPage', pokemonName);

  return (
    <Fragment>
      <Container>
        PokemonPage
      </Container>
      <Container>
        PokemonPage
      </Container>
    </Fragment>
  );
};

export default PokemonPage;
