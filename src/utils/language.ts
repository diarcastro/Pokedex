import { DEFAULT_LANGUAGE } from 'i18n';

/**
 * Get language based on the current url
 *
 * @returns {string}
 */
const getLanguage = () => {
  const { location: { pathname } } = window;
  const pathArray = pathname.split('/');

  return pathArray[1] === 'fr' ? 'fr' : DEFAULT_LANGUAGE;
};

export default getLanguage;
