import { Fragment } from 'react';

import Container from '@atoms/Container';

import { PAGE_PATH } from '../routes/paths';
import useParam from '../hooks/useParam';

const IndexPage = () => {
  const { pageNumber } = useParam(PAGE_PATH);
  console.log('IndexPage', pageNumber);
  // const {
  //   pokemons,
  // } = useState();

  return (
    <Fragment>
      <Container>
        IndexPage
      </Container>
      <Container>
        IndexPage
      </Container>
    </Fragment>
  );
};

export default IndexPage;
