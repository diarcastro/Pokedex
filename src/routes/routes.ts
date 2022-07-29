import _each from 'lodash/each';

import { PathElement } from 'interfaces/route';
import paths from './paths';

const makeRoutes = (): PathElement[] => {
  const appRoutes: PathElement[] = [];
  _each(paths, (pathItem: PathElement) => {
    const {
      component, languages, path, key,
    } = pathItem;
    if (languages) {
      _each(languages, (languagePath, language) => {
        appRoutes.push({
          key: `${language}-${key}`,
          component,
          path: languagePath,
        });
      });
    } else {
      appRoutes.push({
        key,
        component,
        path,
      });
    }
  });

  return appRoutes;
};

export default makeRoutes();
