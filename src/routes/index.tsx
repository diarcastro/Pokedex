import { Routes, Route } from 'react-router-dom';
import _map from 'lodash/map';

import routes from './routes';

const Router = () => (
  <Routes>
    {
      _map(routes, ({ component: Component, key, path }) => (
        <Route
          key={key}
          path={`${path}`}
          // @ts-ignore
          element={<Component />}
        />
      ))
    }
  </Routes>
);

export default Router;
