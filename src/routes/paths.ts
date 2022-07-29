import IndexPage from '@pages/Index';
import NotFound from '@pages/NotFound';

import { PathElement } from 'interfaces/route';

const paths: PathElement[] = [
  {
    key: 'home',
    component: IndexPage,
    languages: {
      en: '/',
      fr: '/fr',
    },
  },
  {
    key: 'notFound',
    component: NotFound,
    path: '*',
  },
];

export default paths;
