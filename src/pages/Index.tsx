import { Fragment, useEffect } from 'react';
import _map from 'lodash/map';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

import Container from '@atoms/Container';
import PokemonCard from '@atoms/PokemonCard';
import Pager from '@atoms/Pager';
import Header from '@atoms/Header';

import usePokemon from 'hooks/usePokemon';
import useGoToTop from 'hooks/useGoToTop';
import { Pokemon } from 'interfaces/pokemon';

const IndexPage = () => {
  const navigate = useNavigate();
  const goToTop = useGoToTop();
  const {
    currentPage,
    totalPages,
    pageItems,

    resetCurrentPage,
  } = usePokemon();
  const isLoading = !(pageItems && pageItems.length > 0);

  const sectionClasses = classNames(
    'grid',
    'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
    'gap-4 md:gap-6',
    'my-8',
  );

  /* redirect if the page does not exist */
  useEffect(() => {
    if (pageItems && !pageItems.length) {
      resetCurrentPage();
      navigate('/');
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [pageItems, navigate]);

  /* Move the scroll to the top of the page */
  useEffect(() => {
    goToTop(true);
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [currentPage]);

  return (
    <Fragment>
      <Header />
      <Container>
        {
          isLoading
          && (
          <div className="px-4 my-3 text-center animate-pulse p-1 text-xs">
            Loading Pokedex Data...
          </div>
          )
        }
        {
          pageItems && pageItems.length > 0
          && (
            <section className={sectionClasses}>
              {
                _map(
                  pageItems, (
                    (pokemon: Pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />),
                )
              }
            </section>
          )
        }
        {
          !isLoading
            && <Pager totalPages={totalPages} currentPage={currentPage || 0} />
        }
      </Container>
    </Fragment>
  );
};

export default IndexPage;
