const APP_CONFIG = {
  HEADER_HEIGHT: 96,
};

export const ApiConfig = {
  protocol: 'https',
  hostName: 'pokeapi.co',
  versionPath: '/api/v2/',
  cache: true,
  timeout: 5 * 1000,
  cacheImages: true,
  limit: 151,
  itemsPerPage: 20,
};

export default APP_CONFIG;
