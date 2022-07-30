import _each from 'lodash/each';
import { EvolutionChain, Pokemon } from 'interfaces/pokemon';

export const IMAGE_PATH = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';
export const IMAGE_EXT = '.svg';

export const getId = (url: string = ''): number => {
  if (!url) {
    return 0;
  }
  const urlParts = url.split('/');
  const { length } = urlParts;
  const lastItem = length && length - 2;
  return (urlParts && urlParts[lastItem] && Number(urlParts[lastItem])) || 1;
};

export const getImage = (id: number) => `${IMAGE_PATH}${id}${IMAGE_EXT}`;

/**
 * Parse pokemon evolves
 * @param evolveData
 */
export const getEvolves = (evolveData: EvolutionChain): Pokemon[] => {
  const items: Pokemon[] = [];
  const {
    evolves_to: evolvesTo,
  } = evolveData;

  const recursive = (evolves: EvolutionChain[]) => {
    _each(evolves, (item) => {
      const { species: evolveSpecies, evolves_to: evolutions } = item;
      const {
        name,
        url,
      } = evolveSpecies;
      const id = getId(url);
      const image = getImage(id);
      items.push({
        id,
        name,
        image,
        url,
      });
      if (evolutions && evolutions.length) {
        recursive(evolutions);
      }
    });
  };

  recursive(evolvesTo);

  return items;
};
