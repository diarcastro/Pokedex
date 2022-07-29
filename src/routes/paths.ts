import IndexPage from '@pages/Index';
import PokemonPage from '@pages/pokemon';
import NotFound from '@pages/NotFound';

import { PathElement } from 'interfaces/route';

export const PAGE_PATH = '/page/:pageNumber';
export const ITEM_PATH = '/:pokemonName';

const paths: PathElement[] = [
  {
    key: 'home',
    path: '/',
    component: IndexPage,
  },
  {
    key: 'page',
    path: PAGE_PATH,
    component: IndexPage,
  },
  {
    key: 'pokemon',
    path: ITEM_PATH,
    component: PokemonPage,
  },
  {
    key: 'notFound',
    component: NotFound,
    path: '*',
  },
];

export default paths;
