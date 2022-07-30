export const IMAGE_PATH = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';
export const IMAGE_EXT = '.svg';

export const getId = (url: string): number => {
  if (!url) {
    return 0;
  }
  const urlParts = url.split('/');
  const { length } = urlParts;
  const lastItem = length && length - 2;
  return (urlParts && urlParts[lastItem] && Number(urlParts[lastItem])) || 1;
};

export const getImage = (id: number) => `${IMAGE_PATH}${id}${IMAGE_EXT}`;
